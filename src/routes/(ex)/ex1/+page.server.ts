import * as v from 'valibot';
import type { PageServerLoad, Actions } from './$types';
import { sleep } from '$lib/utils';

const FAMOUS_DEVS = ['Bob', 'Siobhan', 'Xing', 'Rowena', 'Joanna', 'Haeden'] as const;

export const load: PageServerLoad = async () => {
	const sortedDevs = FAMOUS_DEVS.toSorted();
	return { devs: sortedDevs };
};

const DevSchema = v.array(
	v.pipe(
		v.string(),
		v.check((item) => FAMOUS_DEVS.some((x) => x === item))
	)
);

function checkDevs(data: unknown): typeof FAMOUS_DEVS {
	v.parse(DevSchema, data);
	return data as typeof FAMOUS_DEVS;
}

function shuffleDevs(devs: typeof FAMOUS_DEVS) {
	while (true) {
		const shuffledDevs = devs.toSorted(() => 0.5 - Math.random());
		const reShuffle = shuffledDevs.some((a, idx) => a === devs[idx]);
		if (!reShuffle) return shuffledDevs;
	}
}

export const actions: Actions = {
	shuffle: async ({ request }) => {
		await sleep();
		const fd = await request.formData();
		const devs = fd.getAll('devs');
		const validatedDevs = checkDevs(devs);
		const shuffledDevs = shuffleDevs(validatedDevs);
		return { devs: shuffledDevs };
	}
};
