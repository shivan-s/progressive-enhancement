<script lang="ts">
	import { browser } from '$app/environment';
	import { sineInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let isChecked = $state(false);
	let isChecked2 = $state(false);
</script>

<section>
	<h1>Checkboxes</h1>
	<div>
		<label for="js">JS</label>
		<input id="js" type="checkbox" bind:checked={isChecked} />
		{#if isChecked}
			<p in:fade={{ easing: sineInOut }}>This is checked!</p>
		{:else}
			<p>&nbsp</p>
		{/if}
	</div>
	<div>
		{#if browser}
			<label for="js2">JS</label>
			<input id="js2" type="checkbox" bind:checked={isChecked2} />
			{#if isChecked2}
				<p in:fade={{ easing: sineInOut }}>This is checked!</p>
			{:else}
				<p>&nbsp</p>
			{/if}
		{:else}
			Sorry no JS?
		{/if}
	</div>

	<div>
		<label for="no-js">!JS</label>
		<input id="no-js" type="checkbox" />
		<p>This is also checked</p>
	</div>
</section>

<style>
	section {
		display: grid;
		gap: 2rem;

		& div {
			display: flex;
			gap: 1rem;
		}
		& input + p {
			visibility: hidden;
			opacity: 0;
			transition: opacity 0.3s ease-in-out;
		}
		& input:checked + p {
			visibility: visible;
			opacity: 1;
		}
	}
</style>
