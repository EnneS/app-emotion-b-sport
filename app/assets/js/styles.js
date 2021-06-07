const light = {
	bg: '#F9F9F9',
	componentBackground: '#ffffff',
	skeletonPrimary: '#AFAFAF',
	skeletonSecondary: '#DADADA',
	primary: 'linear-gradient(#21C8F6,#637BFF)',
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
    elevation: 60,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#ffffff',
    shadowOpacity: 1,
	overflow: 'visible'
	// borderColor: 'red',
	// borderWidth: 1
}


export default styles = {
	loginScreen: {
		page: {
			...container, 
			...{
				
			}
		},
		logo: { 
			// width: 275, 
			// height: 150,
			// maginBottom: 25
		},
		containerConnexionForm: {
			...shadow,
			...{

			}
			// height: 300,
			// width: 300,
			// backgroundColor: light.bg,
			// borderRadius: 1
		},
		headerConnexionForm: {

		},
		// background: 'linear-gradiant(#000000, #00ff00)'

	}
}