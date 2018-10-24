import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MyMarkers from './Markers'

var foursquare = require('react-foursquare')({
clientID: 'OVXN3KG3ITFHVC2XKVARXSTXTSHRLL0OVRIUQCQE53WMPOUO',
clientSecret: 'TQTIW2FA04GLWPHBWBCK20YFKRNZ0H25PRRCTRANBZWWUTTG'
});

var params = {
"near": "Auckland, NZ",
"query": 'coffee'
};



class AppMap extends Component {



  state = {
    selectedPlace: [],
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
            lat: venue.location.lat,
            lng: venue.location.lng,
            isOpen: false,
            isVisible: true,
          }
        })
        this.setState({venues, center, markers})
      });
  }


  render() {

    const style = {
      height: '100%',
      width: '100%'
    }

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    console.log(this.state.markers)

    return (

        <Map
        google={this.props.google}
        style={style}
        className = {'map'}
        initialCenter={{
          lat: -36.848461,
          lng: 174.763336
        }}
        zoom={12}
        >
        {this.state.markers.map((marker, index) => (
          <Marker key = {index}
          position={{lat: marker.lat, lng: marker.lng}}
          />
        ))}

          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>


    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBJ39aLUnpQEi-Ewf6EIIKguFlX-z_SNbw")
})(AppMap)
