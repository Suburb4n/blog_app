<script lang="ts">
	import { Stage, Layer, Rect } from '$lib/components/konva';
	let x = $state(180);
	let y = $state(90);
	let fill = $state('#A020F0');
</script>

<Stage width={500} height={500}>
	<Layer>
		<Rect
			ondragend={(e) => console.log(e)}
			draggable
			stroke="green"
			strokeWidth={3}
			width={200}
			height={200}
			x={20}
			y={40}
			fill="blanchedalmond"
		/>
		<Rect width={100} height={100} {x} {y} {fill} stroke="coral" strokeWidth={3}></Rect>
	</Layer>
</Stage>

<input type="range" bind:value={x} min={0} max={300} />
<input type="range" bind:value={y} min={0} max={300} />
<input type="color" bind:value={fill} />

<style>
	:global {
		body {
			background-color: #222;
			color: #fff;
			padding: 0;
			margin: 0;
		}
	}
</style>
