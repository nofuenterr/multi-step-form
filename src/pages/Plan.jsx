import { useFormContext, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { RadioGroup, Switch } from 'radix-ui';

export default function Plan() {
	const {
		control,
		watch,
		trigger,
		formState: { errors },
	} = useFormContext();

	const navigate = useNavigate();

	const planFields = ['plan'];

	const selectedPlan = watch('plan');
	const isYearly = watch('billing');

	const nextStep = async () => {
		const isValid = await trigger(planFields, { shouldFocus: true });

		if (isValid) {
			navigate('/addons');
		}
	};

	return (
		<div>
			<form>
				<h1>Select your plan</h1>
				<p>You have the option of monthly or yearly billing.</p>

				<Controller
					name="plan"
					control={control}
					defaultValue="arcade"
					render={({ field }) => (
						<RadioGroup.Root value={field.value} onValueChange={field.onChange}>
							<RadioGroup.Item value="arcade">Arcade</RadioGroup.Item>

							<RadioGroup.Item value="advanced">Advanced</RadioGroup.Item>

							<RadioGroup.Item value="pro">Pro</RadioGroup.Item>
						</RadioGroup.Root>
					)}
				/>

				<span>{errors?.plan?.message}</span>

				<div>
					<span>Monthly</span>
					<Controller
						name="billing"
						control={control}
						defaultValue={false}
						render={({ field }) => (
							<Switch.Root
								className="h-5 w-5 bg-black"
								checked={field.value}
								onCheckedChange={field.onChange}
							>
								<Switch.Thumb />
							</Switch.Root>
						)}
					/>
					<span>Yearly</span>
				</div>

				<p>Billing: {isYearly ? 'Yearly' : 'Monthly'}</p>

				<p>Plan: {selectedPlan}</p>

				<button type="button" onClick={() => navigate(-1)}>
					Go back
				</button>

				<button type="button" onClick={nextStep}>
					Next Step
				</button>
			</form>
		</div>
	);
}
