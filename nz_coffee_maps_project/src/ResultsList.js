import React, { Component } from 'react';
import './App.css';



class ResultsList extends Component {
  render() {
    return (
      <div className= 'list-body'>
        <header className = 'results-header-body'>
          <div className = 'results-title'>
            <h2>Search Results</h2>
          </div>
          <button className = 'close-results-list'>
          </button>
        </header>
        <ol className = "search-results-body">
          <li className = "list-item">
            Hello world
          </li>
        </ol>
      </div>
    )
  }
}

export default ResultsList;
