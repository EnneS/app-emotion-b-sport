<template>
	<view ref="row" @layout="updateWidthTeamName" class="container-prognosis" :style="styles.containerPrognosis">		
		<view v-if="charged" class="container-prognosis-row">	
			<image :source="require('../assets/img/team1.png')" class="team-logo"></image>
			<text class="team-name" :style="{ width: sizeTeamName }">Portland Trail Blazers</text>
			<image :source="require('../assets/img/vs.png')" class="vs"></image>
			<text class="team-name" :style="{ width: sizeTeamName }">LA LAKERS</text>
			<image :source="require('../assets/img/team2.png')" class="team-logo"></image>
		</view>
		<view v-else class="container-prognosis-row">	
			<view class="team-logo-skeleton"></view>
			<view class="team-name-skeleton">
				<view class="team-name-line1-skeleton"></view>
				<view class="team-name-line2-skeleton"></view>
			</view>
			<view class="vs-skeleton"></view>
			<view class="team-name-skeleton">
				<view class="team-name-line1-skeleton"></view>
				<view class="team-name-line2-skeleton"></view>
			</view>
			<view class="team-logo-skeleton"></view>		
		</view>			
		<view v-if="charged" class="container-prognosis-row bottom-row">	
			<view class="term-skeleton"></view>	
			<linear-gradient  
			:colors="['#21C8F6', '#637BFF']" 
			class="container-prognosis-info"
			:style="styles.containerPrognosisInfo"
			>
				<text class="container-prognosis-info-header text">Cote</text>
				<text class="text prognosis-info">1.52</text>
			</linear-gradient>
			<linear-gradient  
			:colors="['#21C8F6', '#637BFF']" 
			class="container-prognosis-info"
			:style="styles.containerPrognosisInfo"
			>
				<text class="container-prognosis-info-header text">Mise</text>
				<text class="text prognosis-info">4%</text>
			</linear-gradient>
			<linear-gradient  
			:colors="['#21C8F6', '#637BFF']" 
			class="container-prognosis-info"
			:style="styles.containerPrognosisInfo"
			>
				<text class="container-prognosis-info-header text">Pronostic</text>
				<text class="text prognosis-info prognosis-info-pronostic">Portland Trail Blazers H-35</text>
			</linear-gradient>
			<view class="status-skeleton"></view>
		</view>
		<view v-else class="container-prognosis-row bottom-row">	
			<view class="term-skeleton"></view>	
			<view class="container-prognosis-info container-prognosis-info-skeleton">
				<view class="container-prognosis-info-header container-prognosis-info-header-skeleton"></view>
			</view>
			<view class="container-prognosis-info container-prognosis-info-skeleton">
				<view class="container-prognosis-info-header container-prognosis-info-header-skeleton"></view>
			</view>
			<view class="container-prognosis-info container-prognosis-info-skeleton">
				<view class="container-prognosis-info-header container-prognosis-info-header-skeleton"></view>
			</view>
			<view class="status-skeleton"></view>
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
.container-prognosis {
	background-color: white;
	margin-bottom: 5;
	border-radius: 5;
	overflow: visible;
	margin-bottom: 15;
}

.container-prognosis-row {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	max-width: 100%;
	min-width: 100%;
	overflow: hidden;
	padding: 5px;
}

.bottom-row {
	align-items: flex-end;
}

.team-logo {
	height: 55;
	width: 55;
}

.team-name {
	text-align: center;
	flex-shrink: 1;
}

.vs {
	height: 25;
	width: 25;
	margin: 5;
}

.team-logo-skeleton {
	height: 55;
	width: 55;
	background-color: #dadada;
	border-radius: 50;
}

.team-name-skeleton {
	flex-grow: 1;
	display: flex;
	align-items: center;
}

.team-name-line1-skeleton {
	width: 100%;
	height: 13;
	background-color: #dadada;
	border-radius: 50;
	margin-bottom: 5;
}

.team-name-line2-skeleton {
	width: 70%;
	height: 13;
	background-color: #dadada;
	border-radius: 50;
}

.vs-skeleton {
	height: 25;
	width: 25;
	background-color: #dadada;
	margin: 5;
	border-radius: 50;
}

.container-prognosis-info {
	/* height: 60; */
	width: 85;
	border-radius: 5;
	overflow: hidden;
	display: flex;
}

.container-prognosis-info-skeleton {
	background-color: #dadada;
}

.container-prognosis-info-header {
	height: 18px;
	background-color: white;
	color: #3683D6;
	font-size: 15;
}

.container-prognosis-info-header-skeleton {
	background-color: #AFAFAF;
}

.term-skeleton, .status-skeleton {
	height: 25;
	width: 25;
	background-color: #dadada;
	border-radius: 50;
}

.text {
	text-align: center;
	text-align-vertical: center;
}

.prognosis-info {
	flex-grow: 1;
	color: white;
	font-size: 20;
	font-weight: bold;
	padding-top: 5;
	padding-bottom: 5;
}

.prognosis-info-pronostic {
	font-size: 12;
}
</style>