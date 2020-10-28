import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyButton from './components/Button/Button';
import Title from './components/Title/Title';
import Navbar from './components/Navbar/Navbar';
import Viewer from './components/Viewer/Viewer';
import Edition from './components/Edition/Edition';
import Footer from './components/Footer/Footer';
import MainView from './components/MainView/MainView';
import { Button as Button2 } from 'react-bootstrap';
// import {REST_SRV_ADR} from './config/config';

const REST_SRV_ADR = 'http://localhost:5644';

const initialState = {
  meme: {
    img: 1,
    text: { x: 20, y: 50, value: 'DEMAT BREIZH' },
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount = () => {
    fetch(REST_SRV_ADR + '/memes').then(f => f.json()).then(o => this.setState({ memes: o }))
  }

  render() {
    return (
      <>
        {JSON.stringify(this.state)}
        <Button2 text="Ne pas cliquer!!" onClick={
          () => {
            this.setState({
              meme: {
                ...this.state.meme, //anciennes valeurs car plusieurs niveaux de profondeur 
                text: {
                  ...this.state.meme.text, //anciennes valeurs car plusieurs niveaux de profondeur 
                  value: 'Hello'
                }
              }
            })
          }
        }>

        </Button2>
        <div className="App">

          <Title></Title>
          <Navbar></Navbar>
          <MainView>
            <Viewer meme={this.state.meme}></Viewer>
            <Edition meme={this.state.meme} onChangeMeme={(meme) => { this.setState({ meme: meme }) }}></Edition>
          </MainView>
          <Footer></Footer>
        </div>
      </>
    );
  }
}


App.propTypes = {

};


export default App;
