import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


// creates google map
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    // Center of map set to Auckland, NZ
    defaultCenter={{ lat: -36.848461, lng: 174.763336 }}
  >
    {/*{props.isMarkerShown && <Marker position={{ lat: -36.848461, lng: 174.763336 }} />}*/}
  </GoogleMap>
))


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
    venues: []
  }



  componentDidMount() {
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ venues: res.response.venues });
      });
  }


  render() {
    console.log(this.state.venues)

    return (
      <div className= 'map-body'>

        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBJ39aLUnpQEi-Ewf6EIIKguFlX-z_SNbw"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `570px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />

        <div className= 'third-party-api-reference'>
        </div>
      </div>
    )
  }
}

export default AppMap;
