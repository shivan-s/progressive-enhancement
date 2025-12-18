import type { Actions } from './$types';
import { sleep } from '$lib/utils';

export const actions: Actions = {
	done1: async () => {
		await sleep(2000);
		const done1 = new Date();
		return { done1 };
	},
	done2: async () => {
		await sleep(2000);
		const done2 = new Date();
		return { done2 };
	}
};
