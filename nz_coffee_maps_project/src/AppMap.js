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
    selectedPlace: {},
    showingInfoWindow: false,
    activeMarker: {},
    venues: [],
    center: [],
    markers: [],
    visibleMarkerInfo : {}
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
    // console.log(this.state.visibleMarkerInfo.formatted_address)
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
        {this.state.markers.filter(marker => (
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
