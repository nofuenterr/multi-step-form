import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFormStore = create(
	persist(
		(set, get) => ({
			formData: {},
			setFormData: (data: any) =>
				set(() => ({
					formData: data,
				})),
		}),
		{
			name: 'form-storage',
		}
	)
);
