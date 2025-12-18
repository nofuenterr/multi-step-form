import Form from '../components/Form';
import InfoInput from '../components/InfoInput';
import Container from '../components/Container';

export default function Info() {
	return (
		<Container>
			<Form
				heading="Personal Info"
				paragraph="Please provide your name, email address, and phone number."
				fields={['fullName', 'email', 'phoneNumber']}
				nextPath="plan"
			>
				<div className="grid gap-4 md:gap-6">
					<InfoInput
						id="fullName"
						name="fullName"
						label="Name"
						type="text"
						placeholder="e.g. Merlin Hermes"
					/>
					<InfoInput
						id="email"
						name="email"
						label="Email Address"
						type="text"
						placeholder="e.g. merlinhermes@lotm.com"
					/>
					<InfoInput
						id="phoneNumber"
						name="phoneNumber"
						label="Phone Number"
						type="tel"
						placeholder="e.g. +1 234 567 890"
					/>
				</div>
			</Form>
		</Container>
	);
}
