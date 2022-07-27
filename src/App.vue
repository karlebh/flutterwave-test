<template>
	<div id="app">
		<Loader v-if="loading" />

		<div v-if="!loading">
			<TheHeader />
			<router-view v-slot="{ Component }">
				<transition name="fade">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>
	</div>
</template>

<script>
	import { mapState, mapActions } from "vuex"

	import TheHeader from "@/components/TheHeader"
	import Loader from "@/components/Loader"

	export default {
		created() {
			this.getPosts()
		},
		methods: {
			...mapActions(["getPosts"]),
		},
		computed: {
			...mapState(["loading"]),
		},
		components: {
			TheHeader,
			Loader,
		},
	}
</script>

<style>
	#app {
		background-color: #ffffff;
		min-height: 100vh;
		max-width: 71.5rem;
		margin-left: auto;
		margin-right: auto;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
