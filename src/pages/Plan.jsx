import { useFormContext, Controller } from 'react-hook-form';
import { RadioGroup, Switch } from 'radix-ui';
import { getPrice } from '../utils/getPrice';
import Container from '../components/Container';
import Form from '../components/Form';
import ArcadeIcon from '../components/ui/ArcadeIcon';
import AdvancedIcon from '../components/ui/AdvancedIcon';
import ProIcon from '../components/ui/ProIcon';

export default function Plan() {
	const { control, watch } = useFormContext();

	const isYearly = watch('billing');

	return (
		<Container>
			<Form
				heading="Select your plan"
				paragraph="You have the option of monthly or yearly billing."
				fields={['plan']}
				nextPath="addons"
			>
				<div className="grid gap-6 lg:gap-8">
					<Controller
						name="plan"
						control={control}
						defaultValue="arcade"
						render={({ field }) => (
							<RadioGroup.Root
								value={field.value}
								onValueChange={field.onChange}
								className="grid gap-2 lg:auto-rows-[10rem] lg:grid-cols-3 lg:gap-4"
							>
								<RadioItem defaultChecked={true} value="arcade" title="Arcade">
									<ArcadeIcon />
								</RadioItem>
								<RadioItem
									defaultChecked={false}
									value="advanced"
									title="Advanced"
								>
									<AdvancedIcon />
								</RadioItem>
								<RadioItem defaultChecked={false} value="pro" title="Pro">
									<ProIcon />
								</RadioItem>
							</RadioGroup.Root>
						)}
					/>

					<div className="flex place-content-center gap-6 rounded-lg bg-blue-50 px-7 py-3.5 text-sm leading-6 font-medium">
						<span className={isYearly ? 'text-gray-500' : 'text-blue-950'}>
							Monthly
						</span>
						<Controller
							name="billing"
							control={control}
							defaultValue={false}
							render={({ field }) => (
								<Switch.Root
									className="relative h-5 w-9 cursor-pointer rounded-xl bg-blue-950"
									checked={field.value}
									onCheckedChange={field.onChange}
								>
									<Switch.Thumb className="absolute top-1 left-1 size-3 rounded-full bg-white transition-transform duration-300 ease-out data-[state=checked]:translate-x-4" />
								</Switch.Root>
							)}
						/>
						<span className={isYearly ? 'text-blue-950' : 'text-gray-500'}>
							Yearly
						</span>
					</div>
				</div>
			</Form>
		</Container>
	);
}

function RadioItem({ defaultChecked, value, title, children }) {
	const { watch } = useFormContext();

	const isYearly = watch('billing');
	const billingType = isYearly ? 'yr' : 'mo';
	const selectedPlan = watch('plan');

	return (
		<RadioGroup.Item
			defaultChecked={defaultChecked}
			value={value}
			className={
				'grid grid-cols-[auto_1fr] items-center gap-4 rounded-lg border border-purple-200 p-4 hover:border-purple-600' +
				(selectedPlan === value ? 'border-purple-600 bg-blue-50 ' : '') +
				' lg:auto-rows-[auto_1fr] lg:grid-cols-[8.625rem] lg:items-end'
			}
		>
			{children}
			<div className="grid items-center gap-1 text-start md:flex md:justify-between lg:flex-col lg:items-start lg:gap-2">
				<div className="grid gap-1">
					<p className="font-medium text-blue-950">{title}</p>
					<p className="text-sm text-gray-500">
						${getPrice(isYearly, 'plan', value)}/{billingType}
					</p>
				</div>
				{isYearly ? (
					<p className="text-xs text-blue-950">2 months free</p>
				) : null}
			</div>
		</RadioGroup.Item>
	);
}
