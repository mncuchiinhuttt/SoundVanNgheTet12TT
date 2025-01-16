<script lang="ts">
	import { onMount } from "svelte";
	
	let { data } = $props();
	let audioElements: HTMLAudioElement[] = [];

	function handleKeyPress(event: KeyboardEvent) {
		const key = parseInt(event.key);
		if (!isNaN(key) && key > 0 && key <= data.fileNames.length) {
			const audioElement = audioElements[key - 1];
			if (audioElement) {
				if (audioElement.paused) {
					audioElement.play();
				} else {
					audioElement.pause();
				}
			}
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	});
</script>

<svelte:head>
	<title>Bảng chỉnh sound Văn Nghệ Tết 12TT</title>
</svelte:head>

<main class="flex flex-col gap-4 px-32 py-10">
	{#each data.fileNames as fileName, i}
		<div>
			<span>{i + 1}: {fileName}</span>
			<audio controls bind:this={audioElements[i]}>
				<source src={`../audio/${fileName}`} type="audio/mpeg">
			</audio>
		</div>
	{/each}

	<div class = "flex justify-center">
		<p style = "color: grey">Designed by Vo Minh Long</p>
	</div>
</main>