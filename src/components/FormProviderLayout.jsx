import { Outlet } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z
	.object({
		fullName: z.string().min(3, 'Your name must be at least 3 characters long'),
		email: z.email('Invalid email address'),
		phoneNumber: z.string().min(7, 'Invalid phone number'),
		plan: z.enum(['arcade', 'advanced', 'pro']),
		billing: z.boolean(),
		addons: z.array(
			z.enum(['onlineService', 'largerStorage', 'customizableProfile'])
		),
	})
	.transform((data) => {
		const prices = {
			arcade: { monthly: 9, yearly: 90 },
			advanced: { monthly: 12, yearly: 120 },
			pro: { monthly: 15, yearly: 150 },
			onlineService: { monthly: 1, yearly: 10 },
			largerStorage: { monthly: 2, yearly: 20 },
			customizableProfile: { monthly: 2, yearly: 20 },
		};

		const billingCycle = data.billing ? 'yearly' : 'monthly';
		const planPrice = data.billing
			? prices[data.plan].yearly
			: prices[data.plan].monthly;
		const addonsPrice =
			data.addons.length > 0
				? data.addons.reduce((total, addon) => {
						const price = prices[addon][billingCycle];
						return (total += price);
					}, 0)
				: 0;
		const totalPrice = planPrice + addonsPrice;

		return {
			...data,
			billingCycle,
			planPrice,
			addonsPrice,
			totalPrice,
		};
	});

export default function FormProviderLayout() {
	const form = useForm({ resolver: zodResolver(formSchema), mode: 'onChange' });

	return (
		<FormProvider {...form}>
			<Outlet />
		</FormProvider>
	);
}
