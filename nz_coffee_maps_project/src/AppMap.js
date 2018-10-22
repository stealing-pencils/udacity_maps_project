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



class AppMap extends Component {

  state = {
    markers: [],
    venues: [],
    selectedPlace: []
  }



  componentDidMount() {
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ venues: res.response.venues });
      });
  }



  render() {
    console.log(this.state.venues)


    const style = {
      height: '100%',
      width: '100%'
    }


    return (

        <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: -36.848461,
          lng: 174.763336
        }}
        zoom={12}
        >
          <Marker onClick={this.onMarkerClick}
              name={'Current location'} />
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
