import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyButton from './components/Button/Button';
import Title from './components/Title/Title';
import Navbar from './components/Navbar/Navbar';
import Viewer from './components/Viewer/Viewer';
import Edition from './components/Edition/Edition';
import Footer from './components/Footer/Footer';
import MainView from './components/MainView/MainView';
import {Button as Button2} from 'react-bootstrap';

const initialState = {
  meme: {
    img: '',
    text: { x: 0, y: 0, value: '' },
  },
  imgs:['img1.jpg', 'img2.jpg']
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <>
      {JSON.stringify(this.state)} 
      <Button2 text="Ne pas cliquer!!" onClick={ 
        ()=> {
          this.setState({
            meme:{
              ...this.state.meme, //anciennes valeurs car plusieurs niveaux de profondeur 
              text:{
                ...this.state.meme.text, //anciennes valeurs car plusieurs niveaux de profondeur 
                value:'Hello'
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
          <Viewer></Viewer>
          <Edition></Edition>
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
