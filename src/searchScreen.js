import React, { Component } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { Header, Item, Input, Icon, SearchBar } from 'native-base';
import axios from 'axios';
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';

export default class SearchScreen extends Component {
	state = {
		pokeSearch: '',
		onCall: true,
		data: {}
	};

	flipCall = () => {
		this.setState({ onCall: !this.state.onCall });
	};

	renderBody = () => {
		if (this.state.onCall) {
			return <PokeLoader />;
		} else {
			return (
				<SearchBody flipCall={this.flipCall} data={this.state.data} />
			);
		}
	};

	searchPoke = () => {
		Keyboard.dismiss();
		this.setState({ onCall: true });
		var self = this;

		axios
			.get(
				'http://pokeapi.co/api/v2/pokemon/' +
					this.state.pokeSearch.toLowerCase()
			)
			.then(function(response) {
				console.log(response.data);
				self.setState({ data: response.data });
				self.setState({ onCall: false });
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header searchBar rounded>
					<Item>
						<Icon name="ios-search" onPress={this.searchPoke} />
						<Input
							placeholder="Search Here!"
							value={this.state.pokesearch}
							onChangeText={pokeSearch => {
								this.setState({ pokeSearch });
							}}
						/>
					</Item>
				</Header>
				{this.renderBody()}
			</View>
		);
	}
}
