import React, { Component } from 'react';


class ResultsList extends Component {
  render() {
    return (
      <div className= 'list-body'>
      results list
        <header className = 'results-header-body'>
          <div className = 'results-title'>
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
