<script lang="ts">
	import Konva from 'konva';
	import { onDestroy, type Snippet } from 'svelte';
	import { getStageContext, setLayerContext } from './konva_context';

	type Props = {
		children?: Snippet;
	} & Konva.StageConfig;

	let { children, ...props }: Props = $props();

	const node = new Konva.Layer(props);
	const stage = getStageContext();
	stage.add(node);
	setLayerContext(node);
	onDestroy(() => {
		node.destroy();
	});
</script>

{@render children?.()}
