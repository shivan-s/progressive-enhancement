<script>
	import { onMount } from 'svelte';
	import Reveal from 'reveal.js';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Highlight from 'reveal.js/plugin/markdown/markdown';
	import 'reveal.js/dist/reveal.css';

	onMount(() => {
		const slides = new Reveal({
			plugins: [Markdown, Highlight]
		});
		slides.initialize();
	});
</script>

<svelte:head>
	<title>Progressive Enhancement - Demo</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="reveal">
	<div class="slides">
		<section>
			<h1>Progressive Enhancement</h1>
			<p>2025-12-12</p>
		</section>
		<section>
			<h2>What?</h2>
		</section>
	</div>
</div>

<style>
	div.reveal {
		background-color: hsla(120 10% 10% / 1);
		color: hsla(120 40% 95% / 1);
		& h1 {
			color: hsla(120 100% 50% / 1);
			font-size: 3rem;
		}
		& h2 {
			color: hsla(120 100% 50% / 1);
			font-size: 3rem;
		}
		font-family: Poppins;
	}
</style>
