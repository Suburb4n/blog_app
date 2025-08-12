<script lang="ts">
	import type { Snippet } from 'svelte';
	import Konva from 'konva';
	import { setStageContext } from './konva_context';

	type Props = {
		children?: Snippet;
	} & Konva.StageConfig;

	let { children, ...props }: Props = $props();

	let container: HTMLDivElement;
	let stage: Konva.Stage;
	let isReady = $state(false);

	setStageContext(() => stage);

	$effect(() => {
		stage = new Konva.Stage({
			container,
			...props
		});
		isReady = true;
		return () => {
			stage.destroy();
		};
	});
</script>

<div bind:this={container}>
	{#if isReady}
		{@render children?.()}
	{/if}
</div>
