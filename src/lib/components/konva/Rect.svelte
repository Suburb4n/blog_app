<script lang="ts">
	import Konva from 'konva';
	import { onDestroy } from 'svelte';
	import { getLayerContext } from './konva_context';
	import { type KonvaEventHooks, KONVA_EVENTS, registerEvents } from './events';

	let props: Konva.RectConfig & KonvaEventHooks = $props();
	const node = new Konva.Rect(props);
	registerEvents(props, node);
	const layer = getLayerContext();
	layer.add(node);

	onDestroy(() => {
		node.destroy();
	});
</script>
