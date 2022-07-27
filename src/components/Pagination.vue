<template>
	<div class="pagination__wrapper">
		<button v-show="showPreviousLink()" @click="updatePage(currentPage - 1)">
			prev
		</button>

		<button v-show="showNextLink()" @click="updatePage(currentPage + 1)">
			next
		</button>
	</div>
</template>

<script>
	import { mapState, mapActions } from "vuex"

	export default {
		computed: {
			...mapState("pagination", [
				"visibleNews",
				"pageSize",
				"currentPage",
				"news",
			]),
		},
		beforeMount() {
			this.updateVisibleNews()
		},
		methods: {
			...mapActions("pagination", ["updatePage", "updateVisibleNews"]),
			totalPages() {
				return Math.ceil(this.news.length / this.pageSize)
			},
			showPreviousLink() {
				return this.currentPage == 0 ? false : true
			},
			showNextLink() {
				return this.currentPage == this.totalPages() - 1 ? false : true
			},
		},
	}
</script>

<style scoped>
	button {
		padding: 8px 16px;
		border-radius: 4px 8px;
		border: 1px;
	}

	button:focus, button:hover {
		background: gray;
		color: white;
		border: 5px;
		transition: 2s ease;
	}

	.pagination__wrapper {
		display: flex;
		justify-content: center;
	}
</style>
