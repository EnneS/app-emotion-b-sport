<template>
	<view :style="styles('categoryLine.containerCategoryLines')">
		<view :style="styles('categoryLine.containerHeader')">
			<view :style="styles('categoryLine.line')"></view>
			<view v-if="!charged" :style="styles('categoryLine.categoryImgSkeleton')"></view>
			<image v-else :source="require('../assets/img/nba-logo.jpg')" :style="styles('categoryLine.categoryImg')"></image>
			<view :style="styles('categoryLine.line')"></view>
		</view>
		<view v-if="!charged" :style="styles('categoryLine.categoryNameSkeleton')"></view>			
		<text v-else :style="styles('categoryLine.categoryName')">NBA</text>
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
			return this.$styles;
		}
	}
}
</script>