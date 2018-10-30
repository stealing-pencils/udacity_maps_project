import React, { Component } from 'react';


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
        <div className = 'search-results-body'>
        </div>
      </div>
    )
  }
}

export default ResultsList;
