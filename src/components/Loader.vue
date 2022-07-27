<template>
	<div class="overlay">
		<div class="loader"></div>
	</div>
</template>

<style scope>
	.overlay {
		z-index: 100;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
	}

	.loader {
		border: 16px solid #f3f3f3; 
		border-top: 16px solid #3498db;
		border-radius: 50%;
		width: 250px;
		height: 250px;
		animation: spin 0.4s linear infinite;
	}

	@media screen and (max-width: 500px) {
		.loader {
			width: 100px;
			height: 100px;
			animation: spin 0.3s linear infinite;
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
