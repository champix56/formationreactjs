import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './components/Title/Title';
import Navbar from './components/Navbar/Navbar';
import Viewer from './components/Viewer/Viewer';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    return (
      <div className="App">
        <Title></Title>
        <Navbar></Navbar>
        <div>
          <Viewer></Viewer>
          {/*<Edition></Edition>*/}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}


App.propTypes = {

};


export default App;
