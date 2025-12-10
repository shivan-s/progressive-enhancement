<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import './app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Progressive Enhancement</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
