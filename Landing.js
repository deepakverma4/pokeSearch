import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button } from 'native-base';

var imgsrc = require('../assets/landing.jpg');

class Landing extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image src={imgsrc} style={styles.imageStyle}>
					<View style={styles.inStyle}>
						<Text> landingScreen</Text>
					</View>
				</Image>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1
	},
	imageStyle: {
		flex: 1
	},
	inStyle: {
		marginTop: 5
	}
};

export default Landing;
