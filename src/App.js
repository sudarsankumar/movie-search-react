import React , {useState} from "react";
import axios from 'axios'
import SearchMovie from "./components/SearchMovie";
import MovieLists from "./components/MovieLists";
import Movie from "./components/Movie";
function App() {
	const apiUrl = 'http://www.omdbapi.com/?apikey=c1777f54';
	const search = (e) => {
		if(e.key==='Enter')
		{
			axios(apiUrl+"&s="+state.s).then(({data})=>{
				let results = data.Search
				setstate(prevState => {
					return {...prevState,results:results}
				})
			})
		}
	}
	const [state, setstate] = useState({
		s:"",
		results:[],
		selected:{}
	})
	const handleInput = (e) => {
		let s = e.target.value
		setstate(prevState=>{
			return {...prevState,s:s}
		})
	}
	const openPopup = id => {
		let api=apiUrl+"&i="+id
		axios(api)
		.then(({data})=>{
			let result = data
			setstate(prevState => {
				return {...prevState,selected: result}
			})
		})
	}
	const closePopup = () => {
		setstate(prevState=>{
			return {...prevState,selected:{}}
		})
	}
	return (
		<div className="App">
			<header>
				<h1>Movie Database</h1>
			</header>
			<main>
				<SearchMovie handleInput={handleInput} search={search} />
				<MovieLists results={state.results} openPopup={openPopup} />
				{(typeof state.selected.Title != "undefined") ? <Movie selected={state.selected} closePopup={closePopup} /> : false}
			</main>
		</div>
	);
}

export default App;
