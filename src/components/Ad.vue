<template>
	<div class="ad">
			<img :src="randomPost.image" class="card__image" />

		<div class="ad__container">
			<div class="container__header">
				<h5>{{ randomPost.author }}</h5>
				<svg
					class="inline"
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
				<p>{{ created(randomPost.created_at) }}</p>
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
		},
	}
</script>

<style scoped>
	.ad {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0 8px;
		margin-left: auto;
		margin-right: auto;
		padding: 10px;
		border: 1px solid #f5f5f5;
		border-radius: 5px;
	}

	.card__image {
		flex-grow: 0;
		width: 100%;
		height: 280px;
	}

	.ad__image {
		width: 100%;
	}
	.ad__container {
		height: 280px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.ad__container h1 {
		margin-top: -20px;
		font-size: 22px;
		font-weight: 900;
		line-height: 26px;
		letter-spacing: 0em;
	}
	.container__header {
		display: inline-flex;
		align-items: center;
		gap: 0 8px;
	}

	.container__text {
		margin-top: -4rem;
	}

	.ad__container p,
	.container__header p {
		font-size: 14px;
		font-weight: 400;
		line-height: 21px;
		letter-spacing: 0em;
		text-align: left;
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

	@media screen and (min-width: 1024px) {
		.ad {
			flex-direction: row;
		}

		.card__image {
			height: 100%;
			max-width: 40%;
		}
	}
</style>
