import { Directions } from "react-native-gesture-handler"

const light = {
	bg: '#F9F9F9',
	componentBackground: '#ffffff',
	skeletonPrimary: '#AFAFAF',
	skeletonSecondary: '#DADADA',
	primary: { 
		color1: '#21C8F6', 
		color2: '#637BFF'
	},
	text: '#b0b0b0'
}

const dark = {
	bg: '#141414',
	componentBackground: '#252525',
	skeletonPrimary: '#252525',
	skeletonSecondary: '#313131',
	primary: '3683D6',
	text: '#ffffff'
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


export default styles = {
	palettes: {
		light,
		dark,
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
		},
		closeButton: {
			fontSize: 32,
			padding: 4
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
		},
		settingSwitch: {
			scaleX: 1.5,
			scaleY: 1.5,
		}
	}
}