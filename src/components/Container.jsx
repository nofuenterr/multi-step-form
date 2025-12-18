import StepsNav from './StepsNav';

export default function Container({ children }) {
	return (
		<div className="h-dvh bg-blue-200 md:grid md:content-center md:justify-center">
			<div className="relative flex h-full max-w-4xl flex-col gap-8 drop-shadow-none md:mx-10 md:grid md:h-150 md:grid-cols-[1fr_2fr] md:rounded-3xl md:bg-white md:drop-shadow-lg">
				<div className="absolute top-0 left-0 z-0 h-44 w-full bg-[url('/src/assets/images/Container.jpg')] bg-cover bg-bottom bg-no-repeat md:hidden"></div>
				<StepsNav />
				{children}
			</div>
		</div>
	);
}
