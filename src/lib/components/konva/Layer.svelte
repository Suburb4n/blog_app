<script lang="ts">
	import Konva from 'konva';
	import { onDestroy, type Snippet } from 'svelte';
	import { getStageContext, setLayerContext } from './konva_context';
	import { registerEvents, type KonvaEventHooks } from './events';

	type Props = {
		children?: Snippet;
	} & Konva.StageConfig &
		KonvaEventHooks;

	let { children, ...props }: Props = $props();

	const node = new Konva.Layer(props);
	registerEvents(props, node);
	const stage = getStageContext();
	stage.add(node);
	setLayerContext(node);
	onDestroy(() => {
		node.destroy();
	});
</script>

{@render children?.()}
