import { useFormContext, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { getPrice } from '../utils/getPrice';
import { useFormStore } from '../store/formStore';

export default function Summary() {
	const { handleSubmit, getValues } = useFormContext();
	const setFormData = useFormStore((s) => s.setFormData);

	const navigate = useNavigate();

	const [selectedPlan, isYearly, selectedAddons] = getValues([
		'plan',
		'billing',
		'addons',
	]);

	const selectedPlanCapitalized = selectedPlan
		.split('')
		.map((c, i) => (i === 0 ? c.toUpperCase() : c))
		.join('');
	const billing = isYearly ? 'Yearly' : 'Monthly';
	const billingType = isYearly ? 'yr' : 'mo';

	const planPrice = getPrice(isYearly, 'plan', selectedPlan);
	const addonsPrice = selectedAddons.map((addon) => {
		return getPrice(isYearly, 'addons', addon);
	});
	const addonsTotal = addonsPrice.reduce((total, price) => {
		return (total += price);
	}, 0);

	const total = planPrice + addonsTotal;

	const submitForm = (data) => {
		setFormData(data);
		console.log('Form was submitted', data);
		navigate('/thank-you');
	};

	return (
		<div>
			<form onSubmit={handleSubmit(submitForm)}>
				<h1>Finishing up</h1>
				<p>Double-check everything looks OK before confirming.</p>

				<div>
					<span>
						{selectedPlanCapitalized} ({billing})
					</span>
					<Link to="/plan">Change</Link>
					<span>
						${planPrice}/{billingType}
					</span>
				</div>

				{selectedAddons.map((addon) => {
					return (
						<div key={addon}>
							<span>{addon}</span>
							<span>
								+${getPrice(isYearly, 'addons', addon)}/{billingType}
							</span>
						</div>
					);
				})}

				<div>
					<span>Total (per {isYearly ? 'year' : 'month'})</span>
					<span>
						+${total}/{billingType}
					</span>
				</div>

				<button type="button" onClick={() => navigate(-1)}>
					Go back
				</button>

				<button type="submit">Confirm</button>
			</form>
		</div>
	);
}
