<template>
	<view @layout="updateWidthTeamName" class="container-prognosis" :style="styles.containerPrognosis">		
		<view v-if="charged" :style="styles.containerPrognosisRow">	
			<image :source="require('../assets/img/team1.png')" :style="styles.teamLogo"></image>
			<text :style="styleTeamName">
				Portland Trail Blazers
			</text>
			<image :source="imgs.vs" :style="styles.vs"></image>
			<text :style="styleTeamName">
				LA LAKERS
			</text>
			<image :source="require('../assets/img/team2.png')" :style="styles.teamLogo"></image>
		</view>
		<view v-else :style="styles.containerPrognosisRow">	
			<view :style="styles.teamLogoSkeleton"></view>
			<view :style="styles.teamNameSkeleton">
				<view :style="styles.teamNameLine1Skeleton"></view>
				<view :style="styles.teamNameLine2Skeleton"></view>
			</view>
			<view :style="styles.vsSkeleton"></view>
			<view :style="styles.teamNameSkeleton">
				<view :style="styles.teamNameLine1Skeleton"></view>
				<view :style="styles.teamNameLine2Skeleton"></view>
			</view>
			<view :style="styles.teamLogoSkeleton"></view>		
		</view>			
		<view v-if="charged" :style="styles.containerPrognosisRowBottom">
			<linear-gradient  
			:colors="['#21C8F6', '#637BFF']" 
			:style="styles.termAndStatus"
			>
				<text :style="styles.termText">{{ termValue }}</text>
			</linear-gradient>	
			<linear-gradient  
			:colors="['#21C8F6', '#637BFF']" 
			:style="styles.containerPrognosisInfo"
			>
				<text :style="styles.containerPrognosisInfoHeader">Cote</text>
				<text :style="styles.prognosisInfo">1.52</text>
			</linear-gradient>
			<linear-gradient  
			:colors="['#21C8F6', '#637BFF']" 
			:style="styles.containerPrognosisInfo"
			>
				<text :style="styles.containerPrognosisInfoHeader">Mise</text>
				<text :style="styles.prognosisInfo">4%</text>
			</linear-gradient>
			<linear-gradient  
			:colors="['#21C8F6', '#637BFF']" 
			:style="styles.containerPrognosisInfo"
			>
				<text :style="styles.containerPrognosisInfoHeader">Pronostic</text>
				<text :style="styles.prognosisInfoPrognosis">Portland Trail Blazers H-35</text>
			</linear-gradient>
			<image v-if="imgStatus == 0" :source="imgs.failed" :style="styles.termAndStatus"></image>	
			<image v-else-if="imgStatus == 1" :source="imgs.validate" :style="styles.termAndStatus"></image>	
			<image v-else :source="imgs.neutral" :style="styles.termAndStatus"></image>	
		</view>
		<view v-else :style="styles.containerPrognosisRowBottom">	
			<view :style="styles.termSkeleton"></view>	
			<view :style="styles.containerPrognosisInfoSkeleton">
				<view :style="styles.containerPrognosisInfoHeaderSkeleton"></view>
			</view>
			<view :style="styles.containerPrognosisInfoSkeleton">
				<view :style="styles.containerPrognosisInfoHeaderSkeleton"></view>
			</view>
			<view :style="styles.containerPrognosisInfoSkeleton">
				<view :style="styles.containerPrognosisInfoHeaderSkeleton"></view>
			</view>
			<view :style="styles.termSkeleton"></view>	
		</view>
	</view>
</template>

<script>
import LinearGradient from 'react-native-linear-gradient';
export default {
	components: {
		LinearGradient
	},
	data() {
		return {
			charged: true,
			mounted: false,
			sizeTeamName: 90,
		}
	},
	props: {
		img: String,
		name: String
	},
	computed: {
		styles() {
			return this.$styles.prognosis;
		},
		imgs() {
			return this.$imgs;
		},
		styleTeamName() {
			return {
				...this.styles.teamName,
				...{
					width: this.sizeTeamName
				}
			}
		},
		imgStatus() {
			let valeur = Math.floor(Math.random() * 6);
			if(valeur == 0)
				return 0
			else if(valeur == 1 || valeur == 2 || valeur == 3)
				return 1;
			else
				return 2;
		},
		termValue()
		{
			let valeur = Math.floor(Math.random() * 6);
			if(valeur == 0 || valeur == 1)
				return "LT";
			else
				return "CT";
		}
	},
	methods: {
		updateWidthTeamName(event) {
			// widthName = largeur prono - (2*largeur logo team + 2 * padding prono + largeur vs)
			this.sizeTeamName = (event.layout.width - (2*55 + 2*5 + 35))/2;
		}
	}
}
</script>

<style scoped>
</style>