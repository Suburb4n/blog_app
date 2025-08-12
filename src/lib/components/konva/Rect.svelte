<script lang="ts">
	import Konva from 'konva';
	import { onDestroy } from 'svelte';
	import { getLayerContext } from './konva_context';
	import { type KonvaEventHooks, registerEvents } from './events';

	let props: Konva.RectConfig & KonvaEventHooks = $props();
	const node = new Konva.Rect(props);
	registerEvents(props, node);
	const layer = getLayerContext();
	layer.add(node);

	Object.keys(props)
		.filter((prop) => !prop.startsWith('on'))
		.forEach((prop) => {
			$effect(() => {
				node.setAttr(prop, props[prop]);
			});
		});
	onDestroy(() => {
		node.destroy();
	});
</script>
