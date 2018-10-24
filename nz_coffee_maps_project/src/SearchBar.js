import React, { Component } from 'react';


class SearchBar extends Component {
  render() {
    return (
      <div className = 'search-bar-body'>
      search bar and this is stuff about it
        <div className = 'search-field'>
          <input id="search-location-text" type="text" placeholder="Enter your favorite area!"/>
          <input id="search-location-button" type="button" value="Zoom"/>
        </div>
      </div>
    )
  }
}

export default SearchBar;
