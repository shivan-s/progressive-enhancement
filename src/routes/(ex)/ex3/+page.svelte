<script lang="ts">
	const popoverId0 = 'popover-0';

	let show = $state(false);
</script>

<section>
	<div>
		<button onclick={() => (show = !show)}>Toggle</button>
		{#if show}
			<p>I need JS!!</p>
		{:else}
			<p>&nbsp;</p>
		{/if}
	</div>

	<div>
		<button popovertarget={popoverId0} popovertargetaction="show">Open</button>
		<dialog popover id={popoverId0}>We are awesome!</dialog>
	</div>

	<details>
		<summary>Open me!</summary>
		<div>I don't need JS</div>
	</details>
</section>

<style>
	:root {
		--navy: hsl(218 86% 7% / 1);
	}
	section {
		display: grid;
		gap: 2rem;
	}
	dialog {
		&:popover-open {
			translate: 0rem 2rem;
			&::backdrop {
				backdrop-filter: blur(3px);
				opacity: 1;
			}
		}
	}

	details {
		padding: 1rem 0.5rem;
		border: 1px solid var(--navy);
		color: var(--navy);
		border-radius: 1rem;
		&::details-content {
			display: block;
			overflow: hidden;
			block-size: 0;
			transition-property: block-size, content-visiblity, margin;
			transition-duration: 0.3s;
			transition-timing-function: ease-in-out;
			transition-behavior: allow-discrete;
		}
		&[open] {
			&::details-content {
				block-size: auto;
				block-size: calc-size(auto);
			}
		}
	}
</style>
