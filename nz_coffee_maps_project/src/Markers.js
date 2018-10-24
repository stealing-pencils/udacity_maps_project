import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class MyMarkers extends Component {


  render() {

    let eachMarker = this.props.marker
    console.log(eachMarker)

    return (
      <Marker
        name = {"test"}
        position = {{ lat : `${eachMarker.lat}`, lng : `${eachMarker.lng}` }}
      />

    )
  }
}

export default MyMarkers
