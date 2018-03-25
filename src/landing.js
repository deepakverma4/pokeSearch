import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, Dimensions } from 'react-native';
import { Button } from 'native-base';

var { height, width } = Dimensions.get('window');
const imgSrc = require('../assets/icons/landing.jpg');
export default class Landing extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<ImageBackground source={imgSrc} style={styles.backgroundImage}>
					<View style={styles.container}>
						<Text style={styles.textStyle}>
							Welcome to PokeSearch
						</Text>
						<Button
							block
							style={styles.buttonStyle}
							onPress={() => this.props.renderButton('search')}
						>
							<Text style={styles.buttonText}>Search!</Text>
						</Button>
					</View>
				</ImageBackground>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	backgroundImage: {
		flex: 1,
		width: width,
		height: height
	},
	textStyle: {
		fontSize: 30,
		color: 'blue',
		alignItems: 'center'
	},
	buttonText: {
		color: 'white'
	},
	buttonStyle: {
		margin: 10
	}
};
