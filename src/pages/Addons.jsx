import { useFormContext, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToggleGroup } from 'radix-ui';
import { getPrice } from '../utils/getPrice';

export default function Addons() {
	const { control, watch } = useFormContext();

	const navigate = useNavigate();

	const selectedAddons = watch('addons');
	const isYearly = watch('billing');
	const billingType = isYearly ? 'yr' : 'mo';

	const nextStep = () => {
		navigate('/summary');
	};

	return (
		<div>
			<form>
				<h1>Pick add-ons</h1>
				<p>Add-ons help enhance your gaming experience.</p>

				<Controller
					name="addons"
					control={control}
					render={({ field }) => (
						<ToggleGroup.Root type="multiple" onValueChange={field.onChange}>
							<ToggleGroup.Item value="onlineService">
								<p>Online service</p>
								<p>Access to multiplayer games</p>
								<span>
									+${getPrice(isYearly, 'addons', 'onlineService')}/
									{billingType}
								</span>
							</ToggleGroup.Item>
							<ToggleGroup.Item value="largerStorage">
								<p>Larger storage</p>
								<p>Extra 1TB of cloud save</p>
								<span>
									+${getPrice(isYearly, 'addons', 'largerStorage')}/
									{billingType}
								</span>
							</ToggleGroup.Item>
							<ToggleGroup.Item value="customizableProfile">
								<p>Customizable profile</p>
								<p>Custom theme on your profile</p>
								<span>
									+${getPrice(isYearly, 'addons', 'customizableProfile')}/
									{billingType}
								</span>
							</ToggleGroup.Item>
						</ToggleGroup.Root>
					)}
				/>

				<p>Addons: {selectedAddons}</p>

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
