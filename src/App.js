import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import axios from 'axios';

import Forecast from './components/Forecast';

export default function App() {
  // -- Hooks --

  return (
    <Forecast />
  );
}

//<div className="App">
//<button onClick={() => {Endpoint(10,10) }}>Sus</button>
//</div>


// https://api.weather.yandex.ru/v1/informers? 
// 87978085-2aaa-42fe-a69b-1dbd5aef136b
/*
<div>

    <div className='Wrapper'>
      <div>
      <button onClick={async () => {await onLoadForecast()}}></button>
        Susy
      </div>
      <div>
        {Data}
      </div>
      <div>
    ABOUTs
    <Tax />
    </div>
    </div>

  </div>
*/
