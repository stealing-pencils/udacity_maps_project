import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Markers from './Markers'





class AppMap extends Component {

  state = {
    selectedPlace: []
  }


  render() {


    const style = {
      height: '100%',
      width: '100%'
    }

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

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
          < Markers />
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
