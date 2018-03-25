import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import Landing from './src/landing';
import SearchScreen from './src/searchScreen';

export default class App extends Component {
	state = {
		currentScreen: 'landing'
	};
	renderButton = () => {
		this.setState({ currentScreen: 'search' });
	};
	renderPage = () => {
		if (this.state.currentScreen == 'landing') {
			return <Landing renderButton={this.renderButton} />;
		} else {
			return <SearchScreen />;
		}
	};
	render() {
		return <View style={styles.container}>{this.renderPage()}</View>;
	}
}

const styles = {
	container: {
		flex: 1
	}
};
