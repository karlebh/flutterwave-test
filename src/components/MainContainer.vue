<template>
	<main class="container">
		<PostCard v-for="post in allPosts.slice(0, 6)" :key="post.date" :item="post" />
	</main>
</template>

<script>
	import { mapGetters } from "vuex"
	import PostCard from "@/components/PostCard"

	export default {
		computed: {
			...mapGetters([
				'allPosts'
			])
		},
		components: {
			PostCard,
		},
	}
</script>

<style>
	.container {
		display: grid;
		align-content: center;
		grid-template-columns: auto;
		justify-content: center;
		gap: 16px;
		margin-top: 52px;
		margin-bottom: 52px;
		width: 100%;
	}

	@media screen and (min-width: 768px) {
		.container {
			justify-content: space-evenly;
			grid-template-columns: auto auto;
		}
	}

	@media screen and (min-width: 1024px) {
		.container {
			width: 71.5rem;
			grid-template-columns: auto auto auto;
		}
	}
</style>
