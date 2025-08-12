<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import Konva from 'konva';
	import { setStageContext } from './konva_context';
	import { registerEvents, type KonvaEventHooks } from './events';

	type Props = {
		children?: Snippet;
	} & Konva.StageConfig &
		KonvaEventHooks;

	let { children, ...props }: Props = $props();

	let container: HTMLDivElement;
	let stage: Konva.Stage;
	let isReady = $state(false);

	setStageContext(() => stage);

	onMount(() => {
		stage = new Konva.Stage({
			container,
			...props
		});
		registerEvents(props, stage);
		isReady = true;
		return () => {
			stage.destroy();
		};
	});

	Object.keys(props)
		.filter((prop) => prop.startsWith('on'))
		.forEach((prop) => {
			$effect(() => {
				stage.setAttr(prop, props[prop]);
			});
		});
</script>

<div bind:this={container}>
	{#if isReady}
		{@render children?.()}
	{/if}
</div>
