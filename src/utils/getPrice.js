import { billings } from '../data/billings';

export const getPrice = (isYearly, category, subcategory) => {
	const billingType = isYearly ? 'yearly' : 'monthly';
	return billings[billingType][category][subcategory];
};
