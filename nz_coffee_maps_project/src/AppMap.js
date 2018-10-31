import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class AppMap extends Component {


  state = {
    selectedPlace: {},
    showingInfoWindow: false,
    activeMarker: {},
    visibleMarkerInfo : {}
  }


  handleMarkerClick = (marker) => {
    marker.isOpen = true;
    this.setState({ markers : Object.assign(this.state.markers, marker)})
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })
    this.logOpenMarker(marker)
  };


  logOpenMarker = (marker) => {
    this.state.markers.forEach((openMarker) => {
      if(openMarker.id === marker.location) {
        this.setState({ visibleMarkerInfo : openMarker })
      }
    })
  }

  render() {

    
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
        <Map
        google={this.props.google}
        style={{width: '100%', height: '100%'}}
        className={'map'}
        zoom={14}
        initialCenter={{
          lat: -36.848461,
          lng: 174.763336
        }}
        onClick={this.onMapClicked}
        >
        {this.props.markers.filter(marker => (
          marker.isVisible === true )
        ).map((marker, index) => (
          <Marker
          key = {index}
          className = "markers"
          position={{lat: marker.lat, lng: marker.lng}}
          name={'Current Location'}
          location = {marker.id}
          onClick={this.onMarkerClick}
          >
          </Marker>
        ))}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <p>{this.state.visibleMarkerInfo.name}</p>
              {/* TODO : use formatted_address but include line breaks */}
              <p>{this.state.visibleMarkerInfo.address}</p>
            </div>
          </InfoWindow>
        </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBJ39aLUnpQEi-Ewf6EIIKguFlX-z_SNbw")
})(AppMap)
