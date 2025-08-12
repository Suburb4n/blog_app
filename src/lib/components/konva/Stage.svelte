<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import Konva from 'konva';
	import { setStageContext } from './konva_context';
	import { registerEffect, registerEvents, type KonvaEventHooks } from './events.svelte';

	type Props = {
		children?: Snippet;
	} & Konva.StageConfig &
		KonvaEventHooks;

	let { children, ...props }: Props = $props();

	let container: HTMLDivElement;
	let stage: Konva.Stage;
	let isReady = $state(false);

	setStageContext(() => stage);
	export function getStage() {
		return stage;
	}
	onMount(() => {
		stage = new Konva.Stage({
			container,
			...props
		});
		registerEvents(props, stage);
		registerEffect(props, stage);
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
