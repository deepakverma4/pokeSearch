import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class PokeLoader extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Image
					source={{
						uri:
							'https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif'
					}}
					style={styles.imgStyle}
				/>
			</View>
		);
	}
}

const styles = {
	imgStyle: {
		height: 400,
		width: 400,
		justifyContent: 'center',
		alignItems: 'center'
	}
};
