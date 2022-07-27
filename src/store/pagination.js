export default {
	namespaced: true,
	state: {
		news: [],
		pageSize: 6,
		visibleNews: [],
		currentPage: 0,
	},
	actions: {
		updatePage({ state, dispatch }, payload) {
			state.currentPage = payload
			dispatch("updateVisibleNews")
		},
		updateVisibleNews({ state, dispatch, rootState }) {
			state.visibleNews = rootState.posts.slice(
				state.currentPage * state.pageSize,
				state.currentPage * state.pageSize + state.pageSize
			)

			if (state.visibleNews.length == 0 && state.currentPage > 0) {
				dispatch("updatePage", state.currentPage - 1)
			}
		},
	},
}
