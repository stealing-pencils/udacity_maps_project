import React, { Component } from 'react';
import './AppMap.js';
import './SearchBar.js'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <SearchBar />

        <AppMap />

        {/* TODO add results list component - child compnent of searchbar? */}


        <footer className="App-footer">
        </footer>

      </div>
    );
  }
}

export default App;
