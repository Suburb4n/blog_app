<script lang="ts">
	import { getCount, increment, reset } from '$lib/utils/counter.svelte';
	// import Counter from '$lib/utils/counter.svelte';

	// import createCounter from '$lib/utils/counter.svelte';
	import Button from './Button.svelte';

	// const counter = createCounter();
	// const counter = new Counter();
</script>

<div class="wrapper">
	<h2>{getCount()}</h2>
	<Button onclick={increment}>Increment</Button>
	<Button --buttonBgColor="#fff" --buttonTextColor="#000" onclick={reset}>Reset</Button>
</div>

<style>
	.wrapper {
		text-align: center;
		background-color: #111;
		padding: 20px;
		border-radius: 10px;
		margin-bottom: 10px;
		h2 {
			font-size: 60px;
			margin: 0 0 20px;
			line-height: 1;
		}
	}
</style>
