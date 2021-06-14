<template>
	<view :style="styles.containerCategoryLines">
		<view :style="styles.containerHeader">
			<view :style="styles.line"></view>
			<view v-if="!charged" :style="styles.categoryImgSkeleton"></view>
			<image v-else :source="require('../assets/img/nba-logo.jpg')" :style="styles.categoryImg"></image>
			<view :style="styles.line"></view>
		</view>
		<view v-if="!charged" :style="styles.categoryNameSkeleton"></view>			
		<text v-else :style="styles.categoryName">NBA</text>
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
	},
	computed: {
		styles() {
			return this.$styles.categoryLine
		}
	}
}
</script>