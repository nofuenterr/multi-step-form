import { useFormContext } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

export default function StepsNav() {
	const { pathname } = useLocation();
	const { trigger } = useFormContext();
	const navigate = useNavigate();
	const fields = ['fullName', 'email', 'phoneNumber'];

	const moveToStep = async (step) => {
		const isValid = await trigger(fields, { shouldFocus: true });
		console.log(isValid);
		if (isValid) {
			navigate(`/${step}`);
		}
	};

	return (
		<aside className="z-10 mt-8 flex justify-center md:m-4 md:mt-4 md:w-full md:justify-start md:rounded-xl md:bg-[url('/src/assets/images/Container.jpg')] md:bg-cover md:bg-center md:bg-no-repeat md:px-6 md:py-10">
			<nav>
				<ul className="flex gap-4 md:flex-col md:gap-8 [&>*>*]:text-start md:[&>*>*]:flex md:[&>*>*]:items-center md:[&>*>*]:gap-4 [&>*>*>:first-child]:grid [&>*>*>:first-child]:size-8 [&>*>*>:first-child]:cursor-pointer [&>*>*>:first-child]:place-content-center [&>*>*>:first-child]:rounded-full [&>*>*>:first-child]:p-2 [&>*>*>:last-child]:hidden md:[&>*>*>:last-child]:inline-block [&>*>*>:last-child>:first-child]:text-xs [&>*>*>:last-child>:first-child]:text-blue-300 [&>*>*>:last-child>:last-child]:text-sm [&>*>*>:last-child>:last-child]:font-bold [&>*>*>:last-child>:last-child]:tracking-wider [&>*>*>:last-child>:last-child]:text-white">
					<li>
						<button
							onClick={() => {
								moveToStep('');
							}}
							className={
								pathname === '/'
									? '[&>*:first-child]:bg-blue-200 [&>*:first-child]:text-blue-950'
									: '[&>*:first-child]:border [&>*:first-child]:border-white [&>*:first-child]:bg-transparent [&>*:first-child]:text-white'
							}
						>
							<div>1</div>
							<div>
								<p>STEP 1</p>
								<p>YOUR INFO</p>
							</div>
						</button>
					</li>
					<li>
						<button
							onClick={() => {
								moveToStep('plan');
							}}
							className={
								pathname === '/plan'
									? '[&>*:first-child]:bg-blue-200 [&>*:first-child]:text-blue-950'
									: '[&>*:first-child]:border [&>*:first-child]:border-white [&>*:first-child]:bg-transparent [&>*:first-child]:text-white'
							}
						>
							<div>2</div>
							<div>
								<p>STEP 2</p>
								<p>SELECT PLAN</p>
							</div>
						</button>
					</li>
					<li>
						<button
							onClick={() => {
								moveToStep('addons');
							}}
							className={
								pathname === '/addons'
									? '[&>*:first-child]:bg-blue-200 [&>*:first-child]:text-blue-950'
									: '[&>*:first-child]:border [&>*:first-child]:border-white [&>*:first-child]:bg-transparent [&>*:first-child]:text-white'
							}
						>
							<div>3</div>
							<div>
								<p>STEP 3</p>
								<p>ADD-ONS</p>
							</div>
						</button>
					</li>
					<li>
						<button
							onClick={() => {
								moveToStep('summary');
							}}
							className={
								pathname === '/summary' || pathname === '/thank-you'
									? '[&>*:first-child]:bg-blue-200 [&>*:first-child]:text-blue-950'
									: '[&>*:first-child]:border [&>*:first-child]:border-white [&>*:first-child]:bg-transparent [&>*:first-child]:text-white'
							}
						>
							<div>4</div>
							<div>
								<p>STEP 4</p>
								<p>SUMMARY</p>
							</div>
						</button>
					</li>
				</ul>
			</nav>
		</aside>
	);
}
