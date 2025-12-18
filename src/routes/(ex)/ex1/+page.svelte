<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();

	let devs = $derived.by(() => {
		let devs = $state(form?.devs ?? data.devs);
		return devs;
	});
	let loading = $state(false);
</script>

<h1>Daily Standup</h1>
<ol>
	{#each devs as dev, idx (idx)}
		<li>{dev}</li>
	{/each}
</ol>
<form
	method="POST"
	action="?/shuffle"
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			await update();
			loading = false;
		};
	}}
>
	{#each devs as dev (dev)}
		<input name="devs" value={dev} type="hidden" />
	{/each}
	<button value="1" type="submit">Shuffle</button>
</form>
{#if loading}
	<p class="loading">Loading...</p>
{/if}

<style>
	:root {
		--navy: hsl(218 86% 7% / 1);
		--green: hsl(120 50% 50% / 1);
	}
	@keyframes blink {
		50% {
			opacity: 0.5;
			color: var(--green);
		}
	}
	p {
		&.loading {
			color: var(--navy);
			animation: blink 1s infinite ease-in-out;
		}
	}

	button {
		padding: 0.5rem 1rem;
		border-radius: 3rem;
		background: transparent;
		border: var(--navy) 4px solid;
		transition:
			background 0.3s ease-in-out,
			color 0.3s ease-in-out;
		&:hover {
			color: white;
			background: linear-gradient(var(--green), var(--navy), var(--green));
		}
		&:active {
			color: white;
			background: linear-gradient(var(--navy), var(--green), var(--navy));
		}
	}
</style>
