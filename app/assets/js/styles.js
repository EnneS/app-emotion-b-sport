import { Directions } from "react-native-gesture-handler"
import store from "./store/";

const light = {
	bg: '#F9F9F9',
	navBg: '#FFFFFF',
	componentBackground: '#ffffff',
	skeletonPrimary: '#AFAFAF',
	skeletonSecondary: '#DADADA',
	primary: { 
		color1: '#21C8F6', 
		color2: '#637BFF'
	},
	text: '#b0b0b0',
	text2: '#000000',
}

const dark = {
	bg: '#141414',
	navBg: '#313131',
	componentBackground: '#252525',
	skeletonPrimary: '#252525',
	skeletonSecondary: '#313131',
	primary: '3683D6',
	text: '#ffffff',
	text2: '#ffffff',
}

const container = {
	alignItems: 'center',
	justifyContent: 'center',
	flex: 1,
	padding: 50
}

const text = {
	textAlign: 'center',
	margin: 10
}

const shadow = {
    elevation: 5,
    shadowOffset: { width: 20, height: 150 },
    shadowColor: 'white',
    shadowOpacity: 1,
}

const rounded = {
	borderRadius: 50,
}
/*
 * Square const
 */

const dimensionSquareCategory = 66;
const dimensionSquareTeam = 55;
const dimensionSquareVs = 55;

let styles = {
	palettes: {
		light,
		dark,
	},
	page: {
		height: 100,
		flex: 1,
		backgroundColor: 'bg',
	},
	bottomNavBar: {
		backgroundColor: 'navBg',
	},
	topNavBar: {
		backgroundColor: 'navBg',
	},
	topNavBarIcon: {
		color: 'text',
	},
	bottomNavBarIcon: {
		color: 'text',
	},
	loginScreen: {
		page: {
			...container, 
			...{
				
			}
		},
		containerConnexionForm: {
			...shadow,
			...{
				width: 300,
				backgroundColor: light.bg,
				borderRadius: 1,
				padding: 25,
				display: "flex",
				justifyContent: "space-around"
			}
		},
		headerConnexionForm: {
			color: "#393939",
			fontSize: 25,
			marginBottom: 15
		},
		inputForm: {
			fontSize: 17,
			height: 40,
			color: "#808080",
			borderBottomColor: "#808080",
			borderBottomWidth: 1,
			marginBottom: 20,
			paddingLeft: 0,
		},
		button: {
			...{
				borderRadius: 5,
			},
			...shadow
			
		},
		colorsButton: {
			color1: light.primary.color1,
			color2: light.primary.color2
		},
		textButton: {
			color: 'white',
			textAlign: 'center',
			textAlignVertical: 'center',
			height: 36
		},
		arrowButton: {
			position: 'absolute',
			right: 5,
			top: 10,
			fontSize: 15,
			color: 'white'
		},
		logo: {
			width: 275,
			height: 150,
			marginBottom: 20
		}
	},
	/*
	* Category Line Component styles
	*/
	categoryLine: {
		containerCategoryLines: {
			marginBottom: 0,
			display: 'flex',
			alignItems: 'center'
		},		
		containerHeader: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			width: '100%',		
			height: 66,
			overflow: 'visible'
		},		
		categoryImgSkeleton: {
			...{
				backgroundColor: 'skeletonSecondary',
				height: dimensionSquareCategory,
				width: dimensionSquareCategory,
				marginBottom: 2,		
				marginRight: 5,
				marginLeft: 5
			},
			...rounded
		},	
		categoryImg: {
			...{
				height: dimensionSquareCategory,
				width: dimensionSquareCategory,
				marginBottom: 2,		
				marginRight: 5,
				marginLeft: 5,
			},
			...rounded,
		},
		categoryNameSkeleton: {
			...{
				backgroundColor: 'skeletonSecondary',
				height: 13,
				width: dimensionSquareCategory
			},
			...rounded
		},	
		categoryName: {
			...text,
			... {
				color: 'text'
			}
		},
		line: {
			backgroundColor: 'text',
			height: 2,
			flexGrow: 1,
			marginRight: 10,
			marginLeft: 10,
		}
	},

	/*
	* Prognosis Component styles
	*/
	prognosis: {
		page: {
			paddingTop: 5,
			paddingRight: 5,
			paddingLeft: 5,
			overflow: 'visible',
			backgroundColor: 'bg',
		},
		containerPrognosis: {
			...shadow,
			...{
				backgroundColor: 'componentBackground',
				marginBottom: 5,
				borderRadius: 5,
				overflow: 'visible',
				marginBottom: 15,
			}
		},
		containerPrognosisRow: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			maxWidth: '100%',
			minWidth: '100%',
			overflow: 'hidden',
			padding: 5
		},
		containerPrognosisRowBottom: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			maxWidth: '100%',
			minWidth: '100%',
			overflow: 'hidden',
			padding: 5,
			alignItems: 'flex-end'
		},
		teamLogo: {
			height: dimensionSquareTeam,
			width: dimensionSquareTeam
		},
		teamLogoSkeleton: {
			height: dimensionSquareTeam,
			width: dimensionSquareTeam,
			borderRadius: 50,
			backgroundColor: 'skeletonSecondary'
		},
		teamName: {
			textAlign: 'center',
			flexShrink: 1,
			fontWeight: 'bold',
		},
		teamNameSkeleton: {
			flexGrow: 1,
			display: 'flex',
			alignItems: 'center'
		},
		teamNameLine1Skeleton: {
			width: '100%',
			height: 13,
			backgroundColor: 'skeletonSecondary',
			borderRadius: 50,
			marginBottom: 5,
		},		
		teamNameLine2Skeleton: {
			width: '70%',
			height: 13,
			backgroundColor: 'skeletonSecondary',
			borderRadius: 50,
		},
		vs: {
			height: 25,
			width: 25,
			margin: 5
		},
		vsSkeleton: {
			height: 25,
			width: 25,
			backgroundColor: 'skeletonSecondary',
			margin: 5,
			borderRadius: 50,
		},
		containerPrognosisInfo: {
			...shadow,
			...{
				width: 85,
				borderRadius: 5,
				overflow: 'hidden',
				display: 'flex'
			}
		},
		containerPrognosisInfoSkeleton: {
			backgroundColor: 'skeletonSecondary',
			height: 60,
			width: 85,
			borderRadius: 5,
			overflow: 'hidden',
		},
		containerPrognosisInfoHeader: {
			height: 18,
			backgroundColor: 'white',
			color: '#3683D6',
			fontSize: 15,
			textAlign: 'center'
		},
		containerPrognosisInfoHeaderSkeleton: {
			height: 18,
			color: '#3683D6',
			fontSize: 15,
			backgroundColor: 'skeletonPrimary'
		},
		termAndStatus: {
			height: 25,
			width: 25,
			borderRadius: 50,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},
		termAndStatusSkeleton: {
			height: 25,
			width: 25,
			borderRadius: 50,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'skeletonSecondary'
		},
		termText: {
			fontSize: 15,
			fontWeight: 'bold',
			color: 'white',
			textAlign: 'center',
		},
		prognosisInfo: {
			flexGrow: 1,
			color: 'white',
			fontSize: 20,
			fontWeight: 'bold',
			paddingTop: 5,
			paddingBottom: 5,
			textAlign: 'center'
		},
		prognosisInfoPrognosis: {
			flexGrow: 1,
			color: 'white',
			fontSize: 20,
			fontWeight: 'bold',
			paddingTop: 5,
			paddingBottom: 5,
			fontSize: 12,
			textAlign: 'center'
		},
	},
	settingsScreen: {
		header: {
			display: 'flex',
			alignSelf: 'flex-end',
			flexDirection: 'row',
			marginRight: 40,
			marginTop: 40,
			justifyContent: 'center',
		},
		headerText: {
			fontSize: 28,
			marginRight: 18,
			fontWeight: 'bold',
			color: 'text2',
		},
		closeButton: {
			fontSize: 32,
			padding: 4,
			color: 'text2',
		},
		settingsBody: {
			paddingTop: 90,
			paddingLeft: 40,
			paddingRight: 40,
		},
		settingLine: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginBottom: 30,
		},
		settingText: {
			fontSize: 24,
			fontWeight: 'bold',
			color: 'text2',
		},
		settingSwitch: {
			scaleX: 1.5,
			scaleY: 1.5,
		}
	}
}

function getStyle(path){
	let style = path.split('.').reduce((p,c)=>p&&p[c]||null, styles);
	style = JSON.parse(JSON.stringify(style));

	/*	
	*	Replaces style fields 'backgroundColor' and 'color' based on their initial values.
	*	For example : 
	*		{
	*			color: 'text'
	*		}
	*	will take the 'text' value from the dark/light colors palette.
	*	Hence, in order to bypass the dark/light modes you have to either : not set the field / set the field with a value different from the palettes keys.
	*/
	if (Object.keys(style).includes('backgroundColor'))
		if(Object.keys(light).includes(style['backgroundColor']))
			style['backgroundColor'] = store.state.darkMode ? dark[style['backgroundColor']] : light[style['backgroundColor']];
	if(Object.keys(style).includes('color'))
		if(Object.keys(light).includes(style['color']))
			style['color'] = store.state.darkMode ? dark[style['color']] : light[style['color']];

	return style;
}

export default getStyle;