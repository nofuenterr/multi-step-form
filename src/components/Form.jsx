import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';

export default function Form({ children, heading, paragraph, goBackButton }) {
	const { trigger } = useFormContext();

	const navigate = useNavigate();

	const infoFields = ['fullName', 'email', 'phoneNumber'];

	const nextStep = async () => {
		const isValid = await trigger(infoFields, { shouldFocus: true });

		if (isValid) {
			navigate('/plan');
		}
	};

	return (
		<form className="flex h-full flex-col gap-8 drop-shadow-lg md:drop-shadow-none">
			<div className="z-10 mx-4 mb-auto rounded-xl bg-white px-6 py-8 md:m-10 md:flex md:h-full md:flex-col md:p-0 lg:mx-15 xl:mx-20">
				<h1 className="mb-2 text-2xl font-bold text-blue-950 md:text-3xl">
					{heading}
				</h1>
				<p className="mb-6 leading-tight text-gray-500 md:mb-8">{paragraph}</p>

				{children}

				<div className="mt-auto hidden items-center md:flex">
					{goBackButton}
					<Button
						onClick={nextStep}
						buttonText="Next Step"
						extraClassNames="md:leading-tight md:text-base md:rounded-lg"
					/>
				</div>
			</div>

			<div className="flex items-center bg-white p-4 md:hidden">
				{goBackButton}
				<Button
					onClick={nextStep}
					buttonText="Next Step"
					extraClassNames="rounded text-sm leading-normal"
				/>
			</div>
		</form>
	);
}

function Button({ onClick, buttonText, extraClassNames }) {
	return (
		<button
			className={
				'ml-auto cursor-pointer bg-blue-950 px-4 py-2.5 font-medium text-white hover:bg-blue-700 ' +
				extraClassNames
			}
			type="button"
			onClick={onClick}
		>
			{buttonText}
		</button>
	);
}
