<template>
	<div class="ad">
		<div class="image__container">
			<img :src="randomPost.image" class="ad__image" />
		</div>

		<div class="ad__container">
			<div class="container__header">
				<div>
					<h5 class="">{{ randomPost.author }}</h5>
					<svg
						class=""
						width="2"
						height="3"
						viewBox="0 0 2 3"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.892578 2.66211C1.39062 2.66211 1.75391 2.29297 1.75391 1.81836C1.75391 1.33789 1.39062 0.974609 0.892578 0.974609C0.400391 0.974609 0.03125 1.33789 0.03125 1.81836C0.03125 2.29297 0.400391 2.66211 0.892578 2.66211Z"
							fill="#6E6E6E"
						/>
					</svg>
					<p class="">{{ created(randomPost.created_at) }}</p>
				</div>
			</div>

			<h1 v-html="randomPost.title"></h1>

			<div class="container__text">
				<p v-html="randomPost.excerpt"></p>
			</div>

			<div class="time-link">
				<span class="time">{{ randomPost.read_time }} Mins Read </span>
				<router-link :to="{ name: 'details', params: { id: randomPost.id } }">
					<span class="link">
						<span> Read Full </span>
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4.16669 10H15.8334"
								stroke="#1473E6"
								stroke-width="1.25"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12.5 13.3333L15.8333 10"
								stroke="#1473E6"
								stroke-width="1.25"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12.5 6.66667L15.8333 10"
								stroke="#1473E6"
								stroke-width="1.25"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import moment from "moment"
	import { mapGetters } from "vuex"

	export default {
		computed: {
			...mapGetters(["randomPost"]),
		},
		methods: {
			created(date) {
				return moment(date).startOf("hour").fromNow()
			},
			trimmedTitle(str) {
				let trimmed = str.substr(0, 40)
				return (
					trimmed.substr(
						0,
						Math.min(trimmed.length, trimmed.lastIndexOf(" "))
					) + "..."
				)
			},
		},
	}
</script>

<style scoped>
	.ad {
		display: grid;
		grid-template-rows: auto;
		padding: 10px;
	}

	/* @media screen and (min-width: 1024px) { */
	@media screen and (min-width: 804px) {
		.ad {
			grid-template-columns: auto auto;
		}
	}
	.ad__image {
		width: 100%;
		height: 280px;
		object-fit: cover;
		border-radius: 3.5px;
	}

	.image__container {
		width: 100%;
		height: 280px;
	}

	.ad__container {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding-left: 10px;
	}

	@media screen  and (min-with: 1024px) {
		.ad__container {
			padding-left: 0;
		}
	}

	.ad__container h1 {
		font-size: 22px;
		font-weight: 900;
		line-height: 26px;
		letter-spacing: 0em;
		color: #2c2c2c;
	}

	.container__text p {
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 21px;
		color: #6e6e6e;
		text-align: justify;
		margin-bottom: 21px;
	}

	.container__header div {
		display: inline-flex;
		align-items: center;
		gap: 0 8px;
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
