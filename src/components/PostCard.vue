<template>
	<div class="card" v-for="post in posts" :key="post.date">
		<div class="image__conatiner">
			<img :src="post.image" alt="" class="card__image" />
		</div>
		<div>
			<div class="card__header">
				<h5>{{ post.author }}</h5>
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
				<p>{{ created(post.created_at) }}</p>
			</div>

			<h1 v-html="post.title"></h1>

			<div class="card__text">
				<p v-html="trimmedString(post.excerpt)"></p>
				<br />
			</div>

			<div class="time-link">
				<span class="time">{{ post.read_time }} Mins Read</span>

				<router-link
					@click="scrollTop"
					:to="{ name: 'details', params: { id: post.id } }"
				>
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
	export default {
		props: {
			posts: {
				type: Object,
			},
		},
		methods: {
			created(date) {
				return moment(date).startOf("hour").fromNow()
			},
			trimmedString(str) {
				let trimmed = str.substr(0, 200)
				return (
					trimmed.substr(
						0,
						Math.min(trimmed.length, trimmed.lastIndexOf(" "))
					) + "..."
				)
			},
			scrollTop() {
				window.scrollTo(0, 0)
			},
		},

		data() {
			return {
				post: this.item,
			}
		},
	}
</script>
<style scoped>
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
		border-radius: 3.5px;
	}

	img.card__image:hover,
	img.card__image:focus {
		transition: transform 1s ease-in-out;
		-webkit-transform: scale(1.1); /* Chrome, Safari, Opera */
		transform: scale(1.1);
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
