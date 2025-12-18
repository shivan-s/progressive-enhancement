<script>
	import { onMount } from 'svelte';
	import Reveal from 'reveal.js';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Highlight from 'reveal.js/plugin/markdown/markdown';
	import 'reveal.js/dist/reveal.css';
	import funny1 from './assets/funny-1.png';
	import { resolve } from '$app/paths';
	import { browser } from '$app/environment';

	onMount(() => {
		const slides = new Reveal({
			plugins: [Markdown, Highlight]
		});
		slides.initialize();
	});
</script>

<svelte:head>
	<title>Progressive Enhancement - Slides</title>
</svelte:head>

{#snippet content()}
	<section>
		<h1>Progressive Enhancement</h1>
		<p>2025-12-19</p>
		<p>
			<a href={resolve('/')} target="_blank">Page</a> -
			<a href="https://github.com/shivan-s/progressive-enhancement" target="_blank">Code</a>
		</p>
	</section>
	<section>
		<figure>
			<img
				style="max-width: 75vw; max-height: 75vh"
				alt="Screenshot of a funny license"
				src={funny1}
			/>
			<figcaption>
				<a href="https://github.com/zac-garby/carcassonne/blob/master/LICENSE.txt" target="_blank">
					Source
				</a>
			</figcaption>
		</figure>
	</section>
	<section>
		<h2>Disclaimer</h2>
		<p>Sharing own opinions</p>
		<p class="fragment">Might also talk about: Accessibility and Optimistic Updates</p>
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
	<section>
		<h2>!(What?)</h2>
		<code>Progressive Enhancement != No Javascript</code>
		<p class="fragment">"0kb of Javascript is not a feature"</p>
		<p class="fragment">Provide all users with the same experience</p>
	</section>
	<section>
		<h2>What?</h2>
		<blockquote>
			<strong>Progressive enhancement</strong> is a design philosophy that provides a baseline of essential
			content and functionality to as many users as possible, while delivering the best possible experience
			only to users of the most modern browsers that can run all the required code.
		</blockquote>
		<a
			href="https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement"
			target="_blank"
		>
			MDN Definition of Progressive Enhancemnet
		</a>
		<p class="fragment">Similar to <em>Gradual Degradation</em></p>
		<p class="fragment">Product Requirement</p>
	</section>
	<section>
		<h2>Why?</h2>
		<p class="fragment">Attempt to make application accessible to as many people possible</p>
		<p class="fragment">Good principle for most devs</p>
		<p class="fragment">Build in this way can make code simple</p>
		<p class="fragment">Good User Experience</p>
	</section>
	<section>
		<h2>Examples</h2>
		<p><a href={resolve('/ex0')} target="_blank">Example 0</a> - Checkbox</p>
		<p><a href={resolve('/ex1')} target="_blank">Example 1</a> - Form action</p>
		<p><a href={resolve('/ex2')} target="_blank">Example 2</a> - Optimistic Update</p>
	</section>
	<section>
		<h2>A Worthy Goal</h2>
		<p class="fragment">Are we able to complete an order without Javascript?</p>
	</section>
	<section>
		<h2>Roän's Discovery</h2>
		<pre><code data-trim data-noescape data-line-numbers class="language-javascript">
const arr = [1, 2, 3, 4];
const newArr = arr.toReversed()
</code></pre>
	</section>
	<section>
		<h2>Thanks for Listening & Feedback Welcomed</h2>
		<p style="text-align: start">What else would you like to know about?</p>
		<ul>
			<li>
				Learning <a href="https://elixir-lang.org/" target="_blank">Elixir</a> (functional paradigm)
			</li>
			<li>
				<em>
					<a href="https://itrevolution.com/product/accelerate/" target="_blank"> Accelerate </a>
				</em> - Devops
			</li>
			<li>Dev Setups?</li>
			<li>Books we are reading?</li>
		</ul>
	</section>
{/snippet}

<div class="reveal">
	<div class="slides">
		{@render content()}
	</div>
</div>

{#if !browser}
	{@render content()}
{/if}

<style>
	:root {
		--dim-green: hsl(120 100% 30% / 1);
		--green: hsl(120 100% 50% / 1);
		--hl-green: hsl(120 100% 65% / 1);
		--v-hl-green: hsl(120 100% 85% / 1);
		--f-v-hl-green: hsl(120 100% 85% / 0.6);
		--text: hsl(120 100% 50% / 1);
		--navy: hsl(218 94% 7% / 1);

		--background: var(--navy);
		--text: hsl(120 40% 95% / 1);
		--font-size: 1.5rem;
	}
	div.reveal {
		background-color: var(--background);
		color: var(--text);
		font-size: var(--font-size);
		& h1 {
			color: var(--green);
			font-size: calc(var(--font-size) * 2);
			text-shadow: 0rem 0rem 1.25rem var(--f-v-hl-green);
		}
		& h2 {
			color: var(--green);
			font-size: calc(var(--font-size) * 2 - 0.25rem);
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
