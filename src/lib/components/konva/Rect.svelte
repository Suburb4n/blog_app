<script lang="ts">
	import Konva from 'konva';
	import { onDestroy } from 'svelte';
	import { getLayerContext } from './konva_context';
	import { type KonvaEventHooks, registerEffect, registerEvents } from './events.svelte';

	let {
		x = $bindable(),
		y = $bindable(),
		staticProps,
		...props
	}: { staticProps?: boolean } & Konva.RectConfig & KonvaEventHooks = $props();
	const node = new Konva.Rect(props);
	if (!staticProps) {
		node.on('dragend', (e) => {
			x = e.currentTarget.attrs.x;
			y = e.currentTarget.attrs.y;
		});
	}
	registerEvents(props, node);
	const layer = getLayerContext();
	layer.add(node);

	registerEffect(props, node);

	$effect(() => {
		node.setAttr('x', x);
	});
	$effect(() => {
		node.setAttr('y', y);
	});
	onDestroy(() => {
		node.destroy();
	});
</script>
