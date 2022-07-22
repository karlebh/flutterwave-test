<template>
	<div>
		<Ad />
		<MainContainer />
		<JoinUs />
	</div>
</template>

<script>
	import MainContainer from "@/components/MainContainer"
	import JoinUs from "@/components/JoinUs"
	import Ad from "@/components/Ad"

	export default {
		components: {
			MainContainer,
			JoinUs,
			Ad,
		},
	}
</script>
