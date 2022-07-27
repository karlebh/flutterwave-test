<template>
	<header class="header" id="header">
		<router-link to="/blog-listing">
			<HeaderLogo />
		</router-link>
		<HeaderIcons />
	</header>
</template>

<script>
	import HeaderLogo from "@/components/HeaderLogo"
	import HeaderIcons from "@/components/HeaderIcons"

	export default {
		components: {
			HeaderLogo,
			HeaderIcons,
		},
	}
</script>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		padding: 10px;
		margin-bottom: 58px;
	}
	

	/* @media screen and (min-width: 380px) {
		.header {
			width: 71.5rem; 
		}
	} */
</style>
