import React, { Component } from 'react';
import AppMap from './AppMap.js';
import SearchBar from './SearchBar.js';
import ResultsList from './ResultsList.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
        </header>

        <SearchBar />

        <AppMap />

        <ResultsList />

        <footer className="App-footer">
        </footer>

      </div>
    );
  }
}

export default App;
