<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();

	let done1 = $derived.by(() => {
		let done = $state(form?.done1);
		return done;
	});
	let done2 = $derived.by(() => {
		let done = $state(form?.done2);
		return done;
	});
	let loading1 = $state(false);
	let loading2 = $state(false);
</script>

<h1>Submit</h1>
<div>
	<form
		method="POST"
		action="?/done1"
		use:enhance={() => {
			loading1 = true;
			return async ({ update }) => {
				await update();
				loading1 = false;
			};
		}}
	>
		<button type="submit" disabled={!!done1}>
			{#if done1}
				Submitted
			{:else}
				Submit1
			{/if}
		</button>
	</form>
	{#if loading1}
		<p class="loading">Loading...</p>
	{/if}
	{#if !loading1 && done1}
		<p class="success">
			<time datetime={done1.toISOString()}>
				{done1.toLocaleDateString()}
			</time> ✓
		</p>
	{/if}
</div>
<div>
	<form
		method="POST"
		action="?/done2"
		use:enhance={() => {
			loading2 = true;
			done2 = new Date();
			return async ({ update }) => {
				await update();
				loading2 = false;
			};
		}}
	>
		<button type="submit" disabled={!!done2}>
			{#if done2}
				Submitted
			{:else}
				Submit2
			{/if}
		</button>
	</form>
	{#if done2}
		<p class="success">
			<time datetime={done2.toISOString()}>
				{done2.toLocaleDateString()}
			</time>
			{#if done2 && !loading2}✓{/if}
		</p>
	{/if}
</div>

<style>
	:root {
		--green: hsl(120 50% 25% / 1);
	}

	div {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	@keyframes blink {
		50% {
			opacity: 0.5;
		}
	}
	p {
		margin: 0;
		padding: 0;
		&.loading {
			color: var(--navy);
			animation: blink 1s infinite ease-in-out;
		}
		&.success {
			color: var(--green);
		}
	}
</style>
