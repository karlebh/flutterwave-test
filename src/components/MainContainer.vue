<template>
	<div>
		<main class="container">
			<PostCard :posts="visibleNews" />
		</main>
		<Pagination />
	</div>
</template>

<script>
	import { mapGetters, mapState, mapActions } from "vuex"
	import PostCard from "@/components/PostCard"
	import Pagination from "@/components/Pagination"

	export default {
		computed: {
			...mapState("pagination", ["visibleNews", "news"]),
			...mapGetters(["allPosts"]),
		},
		beforeMount() {
			this.updateVisibleNews()
		},
		components: {
			PostCard,
			Pagination,
		},
		methods: {
			...mapActions("pagination", ["updateVisibleNews"]),
		},
	}
</script>

<style scoped>
	.container {
		display: grid;
		align-content: center;
		grid-template-columns: auto;
		justify-content: center;
		gap: 16px;
		margin-top: 52px;
		margin-bottom: 52px;
		/* width: 100%; */
	}

	@media screen and (min-width: 768px) {
		.container {
			justify-content: space-evenly;
			grid-template-columns: auto auto;
		}
	}

	@media screen and (min-width: 1142px) {
		.container {
			grid-template-columns: auto auto auto;
			
		}
	}
	.card {
		border-radius: 5px;
		padding: 10px;
		border: 1px solid #f5f5f5;
	}

	@media screen and (min-width: 768px) {
		.card {
			width: 350px;
			height: 420px;
		}
	}

	.card h1 {
		font-weight: 700;
		font-size: 18px;
		line-height: 21px;
		color: #2c2c2c;
	}

	.card__image {
		width: 100%;
		max-height: 200px;
		object-fit: fill;
	}

	img.card__img:hover,
	image.card__image:focus {
		transition: transform 1s ease-in-out;
		transform: scale(1);
	}

	.card__header {
		display: inline-flex;
		align-items: center;
		gap: 0 8px;
	}

	.card__header p {
		font-size: 12px;
		font-weight: 500;
		line-height: 21px;
		line-height: 14px;
		text-align: left;
		color: #6e6e6e;
		text-transform: capitalize;
		/* 09018188897 */
	}

	.card__text p {
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 21px;
		color: #6e6e6e;
	}

	.time-link {
		display: flex;
		justify-content: space-between;
	}
	.link {
		display: inline-flex;
		align-items: center;
		color: #1473e6;
		font-size: 12px;
		font-weight: 700;
		line-height: 14px;
		letter-spacing: 0em;
	}
	.time {
		font-size: 12px;
		font-weight: 500;
		line-height: 14px;
		letter-spacing: 0em;
		text-align: left;
	}
	a {
		text-decoration: none;
	}
</style>
