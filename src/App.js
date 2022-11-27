import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';

import Forecast from './components/UI/Forecast';
import Tile from './components/UI/Tile/Tile';

export default function App() {


  return (
    <div className='grid'>
     <Forecast />
    </div>
  );
}

/*
Colorscheme:
  Bg0:    #212121
  Bg1:    #282828

  Text1:  #FBF1C7
  Text2:  #EBDBB2

  Comms:  #928374

  Orange: #FE8019 
   
  +++ Colors +++
  R1: #CC241D | G1: #98971A | Y1: #D79921 | B1: #458588 | P1: #B16286 | A1: #689D6A
  R2: #FB4934 | G2: #B8BB26 | Y2: #FABD2F | B2: #83A598 | P2: #D3869B | A2: #8EC07C


*/
