import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


var foursquare = require('react-foursquare')({
clientID: 'OVXN3KG3ITFHVC2XKVARXSTXTSHRLL0OVRIUQCQE53WMPOUO',
clientSecret: 'TQTIW2FA04GLWPHBWBCK20YFKRNZ0H25PRRCTRANBZWWUTTG'
});

var params = {
"near": "Auckland, NZ",
"query": 'coffee'
};

class Markers extends Component {

  state = {
    venues: [],
    markers: []
  }

  componentDidMount() {
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ venues: res.response.venues });
      });
  }


  render() {
    // console.log(this.state.venues[0])

    const markers =
    this.state.venues.map(venue => {
      return {
        lat: venue.location.lat,
        lng: venue.location.lng,
        isOpen: false,
        isVisible: true
      }

    })

    console.log(markers)

    return (


      markers.map((marker, idx) => (
        <marker key={idx}
        position = {{lat: marker.lat, lng: marker.lng}}
        />
      ))


    )
  }
}

export default Markers
