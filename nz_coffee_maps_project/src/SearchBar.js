import React, { Component } from 'react';


class SearchBar extends Component {

  state = {
    query: '',
  }

  updateQuery = (query ) => {
    this.setState({ query : query },_=> {
    })
  }

  render() {
    console.log(this.state.query)
    return (

      <div className = "search-bar-body">
        <div className = "search-bar-title">
          <h2>find what you fancy</h2>
        </div>
        <div className = 'search-field'>
          <input
            id="search-location-text"
            type="text"
            placeholder="Enter your favorite area!"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
          <input id="search-location-button" type="button" value="Zoom"/>
        </div>
      </div>
    )
  }
}

export default SearchBar;
