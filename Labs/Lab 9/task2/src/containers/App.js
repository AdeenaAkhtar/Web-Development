import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';
import {Cats} from '../cats';

class App extends Component {
	render(){
		return !Cats.length ?
		<h1>Loading</h1> :
		(
			<div className = 'tc'>
			<h1 className = 'f1'>Kitty Kats</h1>
			<Scroll>
			<CardList cats={Cats} />	
			</Scroll>
			</div>
			);
	}
}

export default App;