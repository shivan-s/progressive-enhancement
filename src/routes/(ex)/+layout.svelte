<script lang="ts">
	let { children } = $props();
</script>

<header></header>
<main>
	{@render children()}
</main>
<footer></footer>

<style>
	main {
		margin-block: 1rem;
		margin-inline: 2rem;
	}
</style>
