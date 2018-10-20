import React, { Component } from 'react';
import AppMap from './AppMap.js';
import SearchBar from './SearchBar.js';
import ResultsList from './ResultsList.js';
import './App.css';
// import SquareAPI from './API/';
// import ReactDOM from 'react-dom';


class App extends Component {

  // componentDidMount(){
  //   SquareAPI.search({
  //     near:"AUSTIN, TX",
  //     query: "tacos",
  //     limit: 10
  //   }).then(results => console.log(results));
  // }

  render() {

    return (
      <div className="App">
        <header className="App-header">
        Eat New Zealand
        </header>

        <SearchBar />

        <AppMap />

        <ResultsList
        />

        <footer className="App-footer">
        </footer>

      </div>
    );
  }
}

export default App;
