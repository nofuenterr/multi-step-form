import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import Container from '../components/Container';
import Form from '../components/Form';
import { CheckCircledIcon } from '@radix-ui/react-icons';

export default function ThankYou() {
	const { trigger } = useFormContext();
	const navigate = useNavigate();
	const fields = useMemo(() => ['fullName', 'email', 'phoneNumber'], []);

	useEffect(() => {
		(async () => {
			const isValid = await trigger(fields);
			if (!isValid) navigate('/', { replace: true });
		})();
	}, [fields, navigate, trigger]);

	return (
		<Container>
			<Form formSubmitted={true}>
				<div className="grid place-items-center p-6">
					<div className="mb-6 grid size-14 place-content-center rounded-full bg-red-400 md:mb-8 md:size-20">
						<CheckCircledIcon className="size-8 text-white md:size-11" />
					</div>
					<h1 className="mb-2 text-2xl font-bold text-blue-950 md:mb-4 md:text-3xl">
						Thank You
					</h1>
					<p className="text-center leading-normal text-gray-500">
						Thanks for confirming your subscription! We hope you have fun using
						our platform. If you ever need support, please feel free to email us
						at support@thefoolschurch.com.
					</p>
				</div>
			</Form>
		</Container>
	);
}
