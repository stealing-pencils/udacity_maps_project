import React, { Component } from 'react';
import AppMap from './AppMap.js';
import SearchBar from './SearchBar.js';
import ResultsList from './ResultsList.js';
import './App.css';
// import SquareAPI from './API/';
// import ReactDOM from 'react-dom';



var foursquare = require('react-foursquare')({
clientID: 'OVXN3KG3ITFHVC2XKVARXSTXTSHRLL0OVRIUQCQE53WMPOUO',
clientSecret: 'TQTIW2FA04GLWPHBWBCK20YFKRNZ0H25PRRCTRANBZWWUTTG'
});

var params = {
"near": "Auckland, NZ",
"query": 'coffee'
};

class App extends Component {

  // componentDidMount(){
  //   SquareAPI.search({
  //     near:"AUSTIN, TX",
  //     query: "tacos",
  //     limit: 10
  //   }).then(results => console.log(results));
  // }
  constructor(props) {
       super(props);
       this.state = {
         items: []
       };
     }

    componentDidMount() {
      foursquare.venues.getVenues(params)
        .then(res=> {
          this.setState({ items: res.response.venues });
          console.log(this.state.items)
        });
    }


  render() {

    return (
      <div className="App">
        <header className="App-header">
        Eat New Zealand
        </header>

        <SearchBar />

        <AppMap />

        <ResultsList
        />

        <footer className="App-footer">
        </footer>

      </div>
    );
  }
}

export default App;
