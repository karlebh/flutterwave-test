<template>
	<div class="post">
		<div class="post__header">
			<h5>By {{ post.author }}</h5>
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
			<p>2 Months Ago</p>
		</div>

		<h1 v-html="post.title"></h1>

		<div class="post__desc">
			<div>
				<p v-html="post.desc"></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			post: {
				type: String,
			},
		},
	}
</script>

<style scoped>
	.post {
		margin-right: auto;
		margin-left: auto;
		padding: 10px;
	}

	@media screen and (min-width: 768px) {
		.post {
			width: 714px;
		}
	}

	.post__header {
		display: inline-flex;
		align-items: center;
		gap: 0 8px;
	}
	.post__header p {
		font-size: 12px;
		font-weight: 500;
		line-height: 21px;
		line-height: 14px;
		text-align: left;
		color: #6e6e6e;
		text-transform: capitalize;
	}

	.post h1 {
		font-weight: 900;
		font-size: 32px;
		line-height: 38px;
		color: #2c2c2c;
	}

	.post__desc {
		display: grid;
		place-content: center;
		place-items: center;
		font-weight: 400;
		font-size: 14px;
		line-height: 21px;
		color: #6e6e6e;
	}

	.center {
		display: flex;
		justify-content: center;
	}

	img {
		max-width: 510px;
		max-height: 327px;
		object-fit: cover;
		margin-left: auto;
		margin-right: auto;
	}

</style>
