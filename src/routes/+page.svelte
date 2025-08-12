<script lang="ts">
	import { scrollY } from 'svelte/reactivity/window';
</script>

<h1 style="position:fixed;">{scrollY.current}</h1>
<div style="height:2000px;"></div>

<style>
	:global {
		body {
			background-color: #222;
			color: #fff;
		}
	}
</style>
