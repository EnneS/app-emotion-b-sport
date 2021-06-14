/*
 * Colors Pallet
 */

const colorPalet = {
	light: {
		bg: '#F9F9F9',
		componentBackground: '#ffffff',
		skeletonPrimary: '#AFAFAF',
		skeletonSecondary: '#DADADA',
		primary: { 
			color1: '#21C8F6', 
			color2: '#637BFF'
		},
		text: '#b0b0b0'
	},
	dark: {
		bg: '#141414',
		componentBackground: '#252525',
		skeletonPrimary: '#252525',
		skeletonSecondary: '#313131',
		primary: { 
			color1: '#3683D6', 
			color2: '#3683D6'
		},
		text: '#ffffff'
	}
}


/*
 * General Styles
 */

const page = (mode) => {
	mode = mode == "dark" ? mode : "light"
	return {
		paddingTop: 5,
		paddingRight: 5,
		paddingLeft: 5,
		overflow: 'visible',
		backgroundColor: colorPalet[mode].bg
	}
}

const container = {
	alignItems: 'center',
	justifyContent: 'center',
	flex: 1,
	padding: 50
}

const text = {
	textAlign: 'center',
	color: '#6F6F6F'
}

const shadow = {
    elevation: 5,
    shadowOffset: { width: 20, height: 150 },
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



export default styles = {
	getStyles: (mode) => {
		mode = mode === "dark" ? mode : "light"

		return {/*
			* Login Page styles
			*/
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
						backgroundColor: colorPalet[mode].bg,
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
					color1: colorPalet[mode].primary.color1,
					color2: colorPalet[mode].primary.color2
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
			* Today's bet
			*/
			todaysBetsScreen: {
				page: {
					...page(mode)
				}
			},
	
	
			/*
			* Category Line Component styles
			*/
			categoryLine: {
				containerCategoryLines: {
					marginBottom: 15,
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
						backgroundColor: colorPalet[mode].skeletonSecondary,
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
						backgroundColor: colorPalet[mode].skeletonSecondary,
						height: 13,
						width: dimensionSquareCategory
					},
					...rounded
				},	
				categoryName: {
					...text
				},
				line: {
					backgroundColor: colorPalet[mode].skeletonSecondary,
					height: 3,
					flexGrow: 1
				}
			},
	
			/*
			* Prognosis Component styles
			*/
			prognosis: {
				containerPrognosis: {
					...shadow,
					...{
						backgroundColor: colorPalet[mode].componentBackground,
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
					backgroundColor: colorPalet[mode].skeletonSecondary
				},
				teamName: {
					textAlign: 'center',
					flexShrink: 1,
					color: '#3683D6',
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
					backgroundColor: colorPalet[mode].skeletonSecondary,
					borderRadius: 50,
					marginBottom: 5,
				},		
				teamNameLine2Skeleton: {
					width: '70%',
					height: 13,
					backgroundColor: colorPalet[mode].skeletonSecondary,
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
					backgroundColor: colorPalet[mode].skeletonSecondary,
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
					backgroundColor: colorPalet[mode].skeletonSecondary,
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
					backgroundColor: colorPalet[mode].skeletonPrimary
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
					backgroundColor: colorPalet[mode].skeletonSecondary
				},
				termText: {
					...text,
					...{
						fontSize: 15,
						fontWeight: 'bold',
						color: 'white',
					}
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
			}
		}
	},
}