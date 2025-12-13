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
</svelte:head>

<div class="reveal">
	<div class="slides">
		<section>
			<h1>Progressive Enhancement</h1>
			<p>2025-12-19</p>
		</section>
		<section>
			<h2>!(What?)</h2>
			<code>Progressive Enhancement != No Javascript</code>
		</section>
		<section>
			<h2>What?</h2>
			<blockquote>
				Progressive enhancement is a design philosophy that provides a baseline of essential content
				and functionality to as many users as possible, while delivering the best possible
				experience only to users of the most modern browsers that can run all the required code.
			</blockquote>
			<a
				href="https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement"
				target="_blank"
			>
				MDN Definition of Progressive Enhancemnet
			</a>
			<p>Similar to <em>Gradual Degradation</em></p>
		</section>
		<section>
			<h2>Recommended Resources</h2>
			<ul>
				<li>
					<a href="https://www.youtube.com/watch?v=Ji4Y5vo-gOg" target="_blank">
						Paolo Ricciuti - Progressively enhanced apps with Svelte
					</a>
				</li>
				<li>
					<a href="https://github.com/sveltejs/svelte/discussions/10085" target="_blank">
						Svelte's Tenets
					</a>
				</li>
				<li>
					<a href="https://www.youtube.com/watch?v=UegUi2fWBaU" target="_blank">
						Rich Harris – North Star, JSNation US 2024
					</a>
				</li>
			</ul>
		</section>
	</div>
</div>

<style>
	:root {
		--dim-green: hsla(120 100% 30% / 1);
		--green: hsla(120 100% 50% / 1);
		--hl-green: hsla(120 100% 65% / 1);
		--v-hl-green: hsla(120 100% 85% / 1);
		--f-v-hl-green: hsla(120 100% 85% / 0.6);
		--text: hsla(120 100% 50% / 1);
		--navy: hsla(218 94% 7% / 1);

		--background: var(--navy);
		--text: hsla(120 40% 95% / 1);
	}
	div.reveal {
		background-color: var(--background);
		color: var(--text);
		& h1 {
			color: var(--green);
			font-size: 3rem;
			text-shadow: 0rem 0rem 1.25rem var(--f-v-hl-green);
		}
		& h2 {
			color: var(--green);
			font-size: 2.75rem;
		}
		a {
			color: var(--dim-green);
			transition:
				color 0.3s ease-in-out,
				text-shadow 0.3s ease-in-out;
			&:hover {
				color: var(--hl-green);
				text-shadow: 0rem 0rem 0.75rem var(--f-v-hl-green);
			}
			&:active {
				color: var(--v-hl-green);
			}
		}
		ul {
			text-align: start;
		}
	}
</style>
