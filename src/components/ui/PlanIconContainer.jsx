export default function PlanIconContainer({ children, backgroundColor }) {
	return (
		<div
			className={
				'grid size-10 place-content-center rounded-full stroke-white ' +
				backgroundColor
			}
		>
			{children}
		</div>
	);
}
