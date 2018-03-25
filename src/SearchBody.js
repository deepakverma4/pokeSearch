import React, { Component } from 'react';
import {
	View,
	Text,
	ImageBackground,
	ScrollView,
	Dimensions,
	Image
} from 'react-native';
import { ListItem, List } from 'native-base';

var { height, width } = Dimensions.get('window');
const imgSrc = require('../assets/icons/newpoke.jpg');

export default class SearchBBody extends Component {
	render() {
		var pokemon = this.props.data;
		if (!pokemon) {
			return <View />;
		}

		return (
			<ImageBackground source={imgSrc} style={styles.backgroundImage}>
				<ScrollView style={{ flex: 1 }}>
					<Text style={styles.header}>
						#{pokemon.id} - {pokemon.name.toUpperCase()}
					</Text>
					<View style={styles.viewStyle}>
						<Image
							source={{ uri: pokemon.sprites.front_default }}
							style={styles.imageStyle}
						/>
					</View>
					<View style={styles.info}>
						<ListItem itemDivider>
							<Text style={{ fontWeight: 'bold' }}>Size</Text>
						</ListItem>
						<ListItem>
							<Text>Weight - {pokemon.weight}kg</Text>
						</ListItem>
						<ListItem>
							<Text>Height - {pokemon.height / 10}m</Text>
						</ListItem>

						<ListItem itemDivider>
							<Text style={{ fontWeight: 'bold' }}>
								Abilities
							</Text>
						</ListItem>
						<List
							dataArray={pokemon.abilities}
							renderRow={item => (
								<ListItem>
									<Text>{item.ability.name}</Text>
								</ListItem>
							)}
						/>
					</View>
				</ScrollView>
			</ImageBackground>
		);
	}
}

const styles = {
	header: {
		fontSize: 30,
		color: 'white',
		textAlign: 'center'
	},
	viewStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	imageStyle: {
		height: 200,
		width: 200,
		alignItems: 'center',
		justifyContent: 'center'
	},
	info: {
		flex: 1,
		backgroundColor: 'white',
		opacity: 0.8
	},
	backgroundImage: {
		flex: 1,
		width: width,
		height: height,
		opacity: 0.9
	}
};
