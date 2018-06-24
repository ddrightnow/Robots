import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import './App.css'

class App extends Component {
	constructor(){
	super()
	this.state = {
	robots: [],
	searchfield: ''	
	}
	}

componentDidMount(){
console.log('check')
fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
	return response.json();
})
.then(users=>{
	this.setState({robots: users})
});
}



	onSearchChange = (event)=> {
		this.setState({searchfield: event.target.value})
		
	}

	render(){
		const {robots,searchfield} = this.state;
		const filteredRobots = robots.filter(robots=>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		console.log(filteredRobots);
		if (robots.length === 0){
			return <h1> Loading</h1>
		} else {
	return(
		<div className ='tc'>
		<h1 className = 'f1'>  Robofriends </h1>
		<SearchBox searchChange={this.onSearchChange}/>

		<Scroll>
		<Cardlist robots={filteredRobots}/>
		</Scroll>

		</div>
		);}
		}
}

export default App;