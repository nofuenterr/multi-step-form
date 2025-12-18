import Form from '../components/Form';
import FormControl from '../components/FormControl';
import Container from '../components/Container';

export default function Info() {
	return (
		<Container>
			<Form
				heading="Personal Info"
				paragraph="Please provide your name, email address, and phone number."
			>
				<div className="grid gap-4 md:gap-6">
					<FormControl
						id="fullName"
						name="fullName"
						label="Name"
						type="text"
						placeholder="e.g. Merlin Hermes"
					/>
					<FormControl
						id="email"
						name="email"
						label="Email Address"
						type="text"
						placeholder="e.g. merlinhermes@lotm.com"
					/>
					<FormControl
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
