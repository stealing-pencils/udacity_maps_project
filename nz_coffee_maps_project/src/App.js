import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import ResultsList from './ResultsList.js';
import AppMap from './AppMap.js'
import './App.css';


class App extends Component {

  render() {

    return (
      <div className="App">

        <header className="App-header">
        Eat New Zealand
        </header>

        <SearchBar />

        <ResultsList />
        <div className= 'map-body'>
          <AppMap />
        </div>
        <footer className="App-footer">
        </footer>

      </div>
    );
  }
}

export default App;
