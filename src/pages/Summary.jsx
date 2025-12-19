import { useFormContext } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { getPrice } from '../utils/getPrice';
import Container from '../components/Container';
import Form from '../components/Form';

export default function Summary() {
	const { getValues, trigger } = useFormContext();
	const navigate = useNavigate();
	const fields = useMemo(() => ['fullName', 'email', 'phoneNumber'], []);

	useEffect(() => {
		(async () => {
			const isValid = await trigger(fields);
			if (!isValid) navigate('/', { replace: true });
		})();
	}, [fields, navigate, trigger]);

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

	return (
		<Container>
			<Form
				heading="Finishing up"
				paragraph="Double-check everything looks OK before confirming."
				nextPath="thank-you"
				formSubmit={true}
			>
				<div className="grid gap-6 md:gap-8">
					<div className="grid gap-4 rounded-lg bg-blue-50 p-4 md:py-5 lg:px-6">
						<div className="flex items-center justify-between">
							<div className="text-sm text-blue-950 md:grid md:gap-2">
								<p className="leading-normal font-medium md:leading-none md:text-balance">
									{selectedPlanCapitalized} ({billing})
								</p>
								<Link
									to="/plan"
									className="text-gray-500 hover:text-purple-600"
								>
									Change
								</Link>
							</div>
							<span className="font-bold tracking-[1px] md:tracking-normal md:text-balance">
								${planPrice}/{billingType}
							</span>
						</div>

						{selectedAddons.length > 0 ? (
							<hr className="text-gray-500" />
						) : null}

						{selectedAddons.map((addon) => {
							return (
								<div key={addon} className="flex items-center justify-between">
									<span className="text-sm text-gray-500">{addon}</span>
									<span className="tracking-[1px]">
										+${getPrice(isYearly, 'addons', addon)}/{billingType}
									</span>
								</div>
							);
						})}
					</div>

					<div className="flex items-center justify-between px-4 lg:px-6">
						<span className="text-sm text-gray-500">
							Total (per {isYearly ? 'year' : 'month'})
						</span>
						<span className="font-bold text-purple-600 md:text-xl">
							+${total}/{billingType}
						</span>
					</div>
				</div>
			</Form>
		</Container>
	);
}
