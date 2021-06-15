<template>
	<view @layout="updateWidthTeamName" class="container-prognosis" :style="styles('prognosis.containerPrognosis')">		
		<view v-if="charged" :style="styles('prognosis.containerPrognosisRow')">	
			<image :source="require('../assets/img/team1.png')" :style="styles('prognosis.teamLogo')"></image>
			<text :style="styleTeamName">
				Portland Trail Blazers
			</text>
			<image :source="imgs.vs" :style="styles('prognosis.vs')"></image>
			<text :style="styleTeamName">
				LA LAKERS
			</text>
			<image :source="require('../assets/img/team2.png')" :style="styles('prognosis.teamLogo')"></image>
		</view>
		<view v-else :style="styles('prognosis.containerPrognosisRow')">	
			<view :style="styles('prognosis.teamLogoSkeleton')"></view>
			<view :style="styles('prognosis.teamNameSkeleton')">
				<view :style="styles('prognosis.teamNameLine1Skeleton')"></view>
				<view :style="styles('prognosis.teamNameLine2Skeleton')"></view>
			</view>
			<view :style="styles('prognosis.vsSkeleton')"></view>
			<view :style="styles('prognosis.teamNameSkeleton')">
				<view :style="styles('prognosis.teamNameLine1Skeleton')"></view>
				<view :style="styles('prognosis.teamNameLine2Skeleton')"></view>
			</view>
			<view :style="styles('prognosis.teamLogoSkeleton')"></view>		
		</view>			
		<view v-if="charged" :style="styles('prognosis.containerPrognosisRowBottom')">
			<linear-gradient  
			:colors="['#21C8F6', '#637BFF']" 
			:style="styles('prognosis.termAndStatus')"
			>
				<text :style="styles('prognosis.termText')">{{ termValue }}</text>				
			</linear-gradient>	
			<linear-gradient  
			:colors="['#21C8F6', '#637BFF']" 
			:style="styles('prognosis.containerPrognosisInfo')"
			>
				<text :style="styles('prognosis.containerPrognosisInfoHeader')">Cote</text>
				<text :style="styles('prognosis.prognosisInfo')">1.52</text>
			</linear-gradient>
			<linear-gradient  
			:colors="['#21C8F6', '#637BFF']" 
			:style="styles('prognosis.containerPrognosisInfo')"
			>
				<text :style="styles('prognosis.containerPrognosisInfoHeader')">Mise</text>
				<text :style="styles('prognosis.prognosisInfo')">4%</text>
			</linear-gradient>
			<linear-gradient  
			:colors="['#21C8F6', '#637BFF']" 
			:style="styles('prognosis.containerPrognosisInfo')"
			>
				<text :style="styles('prognosis.containerPrognosisInfoHeader')">Pronostic</text>
				<text :style="styles('prognosis.prognosisInfoPrognosis')">Portland Trail Blazers H-35</text>
			</linear-gradient>
			<image v-if="imgStatus == 0" :source="imgs.failed" :style="styles('prognosis.termAndStatus')"></image>	
			<image v-else-if="imgStatus == 1" :source="imgs.validate" :style="styles('prognosis.termAndStatus')"></image>	
			<image v-else :source="imgs.neutral" :style="styles('prognosis.termAndStatus')"></image>	
		</view>
		<view v-else :style="styles('prognosis.containerPrognosisRowBottom')">	
			<view :style="styles('prognosis.termSkeleton')"></view>	
			<view :style="styles('prognosis.containerPrognosisInfoSkeleton')">
				<view :style="styles('prognosis.containerPrognosisInfoHeaderSkeleton')"></view>
			</view>
			<view :style="styles('prognosis.containerPrognosisInfoSkeleton')">
				<view :style="styles('prognosis.containerPrognosisInfoHeaderSkeleton')"></view>
			</view>
			<view :style="styles('prognosis.containerPrognosisInfoSkeleton')">
				<view :style="styles('prognosis.containerPrognosisInfoHeaderSkeleton')"></view>
			</view>
			<view :style="styles('prognosis.termSkeleton')"></view>	
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
			return this.$styles;
		},
		imgs() {
			return this.$imgs;
		},
		styleTeamName() {
			return {
				...this.styles('prognosis.teamName'),
				...{
					width: this.sizeTeamName,
					color: this.$store.state.darkMode ? 'white' : '#3683D6',
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