<script lang="ts">
	import Konva from 'konva';
	import { onDestroy } from 'svelte';
	import { getLayerContext } from './konva_context';

	let props: Konva.RectConfig = $props();
	const node = new Konva.Rect(props);
	const layer = getLayerContext();
	layer.add(node);

	onDestroy(() => {
		node.destroy();
	});
</script>
