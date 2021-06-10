<template>
	<view class="category">
		<view v-if="!charged" class="category-img-skeleton"></view>	
		<image v-else :source="require('../assets/img/nba-logo.jpg')" class="category-img"></image>
		<view v-if="!charged" class="category-name-skeleton"></view>			
		<text v-else class="text">NBA</text>
	</view>
</template>

<script>
export default {
	data() {
		return {
			charged: true
		}
	},
	props: {
		img: String,
		name: String
	}
}
</script>

<style scoped>
.category {

}

.category-img-skeleton {
	background-color: #DADADA;
	height: 66;
	width: 66;
	border-radius: 50;
	margin-bottom: 2;
}

.category-img {
	height: 66;
	width: 66;
	border-radius: 50;
	margin-bottom: 2;
}

.category-name-skeleton {
	background-color: #DADADA;
	height: 13;
	width: 65;
	border-radius: 50;
}

.text {
	text-align: center;
	color: #6F6F6F;
}
</style>