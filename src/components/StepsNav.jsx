export default function StepsNav() {
	return (
		<div className="z-10 mt-8 flex justify-center md:m-4 md:mt-0 md:mt-4 md:w-full md:justify-start md:rounded-xl md:bg-[url('/src/assets/images/Container.jpg')] md:bg-cover md:bg-center md:bg-no-repeat md:px-6 md:py-10">
			<nav>
				<ul className="flex gap-4 md:flex-col md:gap-8 md:[&>*]:flex md:[&>*]:items-center md:[&>*]:gap-4 [&>*>:first-child]:grid [&>*>:first-child]:size-8 [&>*>:first-child]:cursor-pointer [&>*>:first-child]:place-content-center [&>*>:first-child]:rounded-full [&>*>:first-child]:p-2 [&>*>:last-child]:hidden md:[&>*>:last-child]:inline-block [&>*>:last-child>:first-child]:text-xs [&>*>:last-child>:first-child]:text-blue-300 [&>*>:last-child>:last-child]:text-sm [&>*>:last-child>:last-child]:font-bold [&>*>:last-child>:last-child]:tracking-wider [&>*>:last-child>:last-child]:text-white">
					<li>
						<div className="bg-blue-200 text-blue-950">1</div>
						<div>
							<p>STEP 1</p>
							<p>YOUR INFO</p>
						</div>
					</li>
					<li>
						<div className="border border-white bg-transparent text-white">
							2
						</div>
						<div>
							<p>STEP 2</p>
							<p>SELECT PLAN</p>
						</div>
					</li>
					<li>
						<div className="border border-white bg-transparent text-white">
							3
						</div>
						<div>
							<p>STEP 3</p>
							<p>ADD-ONS</p>
						</div>
					</li>
					<li>
						<div className="border border-white bg-transparent text-white">
							4
						</div>
						<div>
							<p>STEP 4</p>
							<p>SUMMARY</p>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	);
}
