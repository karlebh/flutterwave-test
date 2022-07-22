import { createRouter, createWebHistory } from "vue-router"

import BlogDetails from "@/views/BlogDetails"
import BlogListing from "@/views/BlogListing"

const routes = [
	{
		path: "/blog-listing",
		name: "listing",
		component: BlogListing,
	},
	{
		path: "/blog-details/:id",
		name: "details",
		component: BlogDetails,
	},

	{ path: "/:catchAll(.*)", redirect: "/blog-listing" },
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
