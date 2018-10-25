import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class MyMarkers extends Component {


  render() {

    let eachMarker = this.props.marker
    console.log(eachMarker)

    return (
      <Marker>
        name = name: `${eachMarker.name}`,
        position = {{ lat : `${eachMarker.lat}`, lng : `${eachMarker.lng}` }}
        {eachMarker.isOpen && (
          <InfoWindow>
          <p>Hi there!</p>
          </InfoWindow>
        )}

      </Marker>
    )
  }
}

export default MyMarkers
