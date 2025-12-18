import { useFormContext } from 'react-hook-form';

export default function InfoInput({ id, name, label, type, placeholder }) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const error = errors?.[name]?.message;

	return (
		<div className="grid gap-2">
			<div className="flex items-end justify-between gap-2 text-xs md:text-sm">
				<label className="text-blue-950" htmlFor={id}>
					{label}
				</label>
				<span className="text-right font-bold tracking-wider text-balance text-red-500">
					{error}
				</span>
			</div>
			<input
				className={
					'rounded-lg border border-purple-200 px-4 py-2 text-sm leading-normal font-medium text-blue-950 hover:border-purple-600 md:text-base md:leading-tight md:font-medium ' +
					(error ? 'border-red-500' : '')
				}
				type={type}
				{...register(name)}
				id={id}
				placeholder={placeholder}
			/>
		</div>
	);
}
