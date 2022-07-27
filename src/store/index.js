import { createStore } from "vuex"
import axios from "axios"

import pagination from "./pagination"

export default createStore({
	modules: {
		pagination
	},
	state: {
		posts: [],
		loading: false,
	},
	getters: {
		allPosts(state) {
			return state.posts
		},
		randomPost(state) {
			let randomNumber = Math.floor(Math.random() * 10)
			return state.posts.sort(() => Math.random() - 0.5)[randomNumber]
		},
		randomPosts(state) {
			return state.posts.sort(() => Math.random() - 0.5)
		}
	},
	mutations: {
		loadPosts(state, payload) {
			state.posts = payload
		},
	},
	actions: {
		async getPosts({ commit, state }) {
			state.loading = true

			const posts = localStorage.getItem("posts")
			if (posts) {
				commit("loadPosts", JSON.parse(posts))
				state.loading = false
			} else {
				await axios
					.get(`https://techcrunch.com/wp-json/wp/v2/posts`)
					.then((response) => {
						const data = response.data
						let info = []
						let reading_time = Math.floor(Math.random() * (10 - 4 + 1)) + 4

						Array.from(data).forEach((article, i) => {
							info.push({
								id: i + 1,
								excerpt: article.excerpt.rendered,
								desc: article.content.rendered,
								title: article.title.rendered,
								created_at: article.parsely.meta.dateCreated,
								image: article.jetpack_featured_media_url,
								image_2: article.parsely.meta.image.url,
								thumbNail: article.parsely.meta.thumbnailUrl,
								read_time: reading_time,
								author: article.parsely.meta.creator[0],
							})
						})
						commit("loadPosts", info)
						localStorage.setItem("posts", JSON.stringify(info))
						state.loading = false
					})
					.catch((err) => {
						err.message
						state.loading = true
					})
			}
		},
	},
})
