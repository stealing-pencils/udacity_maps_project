import React, { Component } from 'react';
import ResultsList from './ResultsList.js';
import AppMap from './AppMap.js'
import './App.css';


var foursquare = require('react-foursquare')({
clientID: 'OVXN3KG3ITFHVC2XKVARXSTXTSHRLL0OVRIUQCQE53WMPOUO',
clientSecret: 'TQTIW2FA04GLWPHBWBCK20YFKRNZ0H25PRRCTRANBZWWUTTG'
});

var params = {
"near": "Auckland, NZ",
"query": `$"{this.props.query}"`
};


class App extends Component {

  state = {
    query: '',
    venues: [],
    center: [],
    markers: []
  }

  componentDidMount() {
    foursquare.venues.getVenues(params)
      .then(res=> {
        const {venues} = res.response
        const {center} = res.response.geocode.feature.geometry
        const markers = venues.map(venue => {
          return {
            name: venue.name,
            lat: venue.location.lat,
            lng: venue.location.lng,
            isOpen: false,
            isVisible: true,
            id: venue.id,
            address: venue.location.address,
            formatted_address: venue.location.formattedAddress
          }
        })
        this.setState({venues, center, markers})
      });
  }

  // saves user search query
  updateQuery = (query ) => {
    this.setState({ query : query },_=> {
    })
  }

  render() {

    return (
      <div className="App">

        <header className="App-header">
          Eat New Zealand
        </header>
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

        <div className= 'map-body'>
          <AppMap
          query = {this.state.query}
          markers = {this.state.markers}
          venues = {this.state.venues}
          center = {this.state.center}
          />
        </div>

        <div className = "list-body">
          <ResultsList />
        </div>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
