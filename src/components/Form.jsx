import { useNavigate, useLocation } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { useFormStore } from '../store/formStore';

export default function Form({
	children,
	heading,
	paragraph,
	fields,
	nextPath,
	formSubmit,
}) {
	const { trigger, handleSubmit } = useFormContext();

	const location = useLocation();
	const navigate = useNavigate();

	const setFormData = useFormStore((s) => s.setFormData);

	const nextStep = async (data) => {
		const isValid = await trigger(fields, { shouldFocus: true });
		if (isValid && !formSubmit) {
			navigate(`/${nextPath}`);
		}
		const cleanData = {
			fullName: data.fullName,
			email: data.email,
			phoneNumber: data.phoneNumber,
			plan: data.plan,
			billing: data.billing,
			billingCycle: data.billingCycle,
			addons: data.addons,
			totalPrice: data.totalPrice,
		};
		if (formSubmit) {
			setFormData(cleanData);
			console.log('Form was submitted', cleanData);
			navigate(`/${nextPath}`, { replace: true });
		}
	};

	return (
		<form
			onSubmit={handleSubmit(nextStep)}
			className="flex h-full flex-col gap-8 drop-shadow-lg md:drop-shadow-none"
		>
			<div className="z-10 mx-4 mb-auto rounded-xl bg-white px-6 py-8 md:m-10 md:flex md:h-full md:flex-col md:p-0 lg:mx-15 xl:mx-20">
				<h1 className="mb-2 text-2xl font-bold text-blue-950 md:text-3xl">
					{heading}
				</h1>
				<p className="mb-6 leading-tight text-gray-500 md:mb-8">{paragraph}</p>

				{children}

				<div className="mt-auto hidden items-center md:flex">
					{location.pathname !== '/' ? <GoBackButton /> : null}
					<NextStepButton
						onClick={nextStep}
						extraClassNames="md:leading-tight md:text-base md:rounded-lg"
						formSubmit={formSubmit}
					/>
				</div>
			</div>

			<div className="flex items-center bg-white p-4 md:hidden">
				{location.pathname !== '/' ? <GoBackButton /> : null}
				<NextStepButton
					onClick={nextStep}
					extraClassNames="rounded text-sm leading-normal"
					formSubmit={formSubmit}
				/>
			</div>
		</form>
	);
}

function GoBackButton() {
	const navigate = useNavigate();

	return (
		<button
			className="cursor-pointer border-none bg-transparent font-medium text-gray-500 hover:text-blue-950"
			type="button"
			onClick={() => navigate(-1)}
		>
			Go Back
		</button>
	);
}

function NextStepButton({ onClick, extraClassNames, formSubmit }) {
	return (
		<button
			className={
				'ml-auto cursor-pointer bg-blue-950 px-4 py-2.5 font-medium text-white hover:bg-blue-700 ' +
				extraClassNames
			}
			type={formSubmit ? 'submit' : 'button'}
			onClick={onClick}
		>
			{formSubmit ? 'Confirm' : 'Next Step'}
		</button>
	);
}
