import { Outlet } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
	fullName: z.string().min(3, 'Your name must be at least 3 characters long'),
	email: z.email('Invalid email address'),
	phoneNumber: z.string().min(7, 'Invalid phone number'),
	plan: z.enum(['arcade', 'advanced', 'pro']),
	addons: z.array(
		z.enum(['onlineService', 'largerStorage', 'customizableProfile'])
	),
});

export default function FormProviderLayout() {
	const form = useForm({ resolver: zodResolver(formSchema), mode: 'onChange' });

	return (
		<FormProvider {...form}>
			<Outlet />
		</FormProvider>
	);
}
