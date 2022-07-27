<template>
	<footer>
		<Post :post="currentPost" />
		<div class="post__more">
			<h1>More Articles</h1>
			<div class="post__articles">
				<PostCard :posts="randomPosts.slice(0, 3)" />
			</div>
		</div>
	</footer>
</template>

<script>
	import { mapGetters } from "vuex"

	import Post from "@/components/Post"
	import PostCard from "@/components/PostCard"

	export default {
		data() {
			return {
				currentPost: "",
			}
		},
		components: {
			Post,
			PostCard
		},
		computed: {
			...mapGetters(["allPosts", "randomPosts"]),
		},
		beforeMount() {
			this.currentPost = this.allPosts.find(
				(post) => post.id == this.$route.params.id
			)
		},
		beforeUpdate() {
			this.updatePost()
		},
		methods: {
			updatePost() {
				return (this.currentPost = this.allPosts.find(
					(post) => post.id == this.$route.params.id
				))
			},
		},
	}
</script>

<style>
	footer {
		margin-bottom: 239px;
		margin-top: 140px;
	}
	.post__articles {
		display: grid;
		align-content: center;
		grid-template-columns: auto;
		justify-content: center;
		gap: 24px;
	}

	.post__more h1 {
		text-align: center;
	}

	@media screen and (min-width: 768px) {
		.post__articles {
			justify-content: space-around;
			grid-template-columns: auto auto;
		}
	}

	@media screen and (min-width: 1280px) {
		.post__more h1 {
			text-align: left;
		}
		.post__articles {
			justify-content: space-evenly;
			grid-template-columns: auto auto auto;
		}
	}
</style>
