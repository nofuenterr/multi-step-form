import { useFormContext, Controller } from 'react-hook-form';
import { ToggleGroup } from 'radix-ui';
import { getPrice } from '../utils/getPrice';
import Container from '../components/Container';
import Form from '../components/Form';

export default function Addons() {
	const { control } = useFormContext();

	return (
		<Container>
			<Form
				heading="Pick add-ons"
				paragraph="Add-ons help enhance your gaming experience."
				nextPath="summary"
			>
				<div>
					<Controller
						name="addons"
						control={control}
						render={({ field }) => (
							<ToggleGroup.Root
								type="multiple"
								onValueChange={field.onChange}
								className="grid gap-2 md:gap-4"
							>
								<ToggleItem
									value="onlineService"
									title="Online service"
									subtitle="Access to multiplayer games"
								/>
								<ToggleItem
									value="largerStorage"
									title="Larger storage"
									subtitle="Extra 1TB of cloud save"
								/>
								<ToggleItem
									value="customizableProfile"
									title="Customizable profile"
									subtitle="Custom theme on your profile"
								/>
							</ToggleGroup.Root>
						)}
					/>
				</div>
			</Form>
		</Container>
	);
}

function ToggleItem({ value, title, subtitle }) {
	const { watch } = useFormContext();

	const isYearly = watch('billing');
	const billingType = isYearly ? 'yr' : 'mo';

	return (
		<ToggleGroup.Item
			value={value}
			className="grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border border-purple-200 bg-transparent px-4 py-3 hover:border-purple-600 data-[state=on]:border-purple-600 data-[state=on]:bg-blue-50 md:gap-6 data-[state=on]:[&>*:first-child]:border-none data-[state=on]:[&>*:first-child]:bg-purple-600"
		>
			<div className="size-4 rounded border border-purple-200"></div>
			<div className="justify-self-start text-start">
				<p className="text-sm leading-6 font-medium text-blue-950">{title}</p>
				<p className="text-xs text-gray-500">{subtitle}</p>
			</div>
			<span className="text-xs text-purple-600">
				+${getPrice(isYearly, 'addons', value)}/{billingType}
			</span>
		</ToggleGroup.Item>
	);
}
