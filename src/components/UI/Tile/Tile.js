import { useEffect, useState } from 'react';
import './Tile.css';

export default function Tile(props){
    const {title, body} = props

    const [mousePos, setMousePos] = useState({});

    useEffect(() => {
      const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener(
          'mousemove',
          handleMouseMove
        );
      };
    }, []);



    return(
        <>
        <div className='light' style={{'--x-pos': `${mousePos.x}px`, '--y-pos': `${mousePos.y}px`}}>
        </div>
        <div className='Forecast'><h3>Location<span style={{color:'#928374'}}> | Location | Location</span></h3>
        </div>
        <div className='Jeo'>Current Weather</div>
        <div className='Graph'><h1>Weather Graph by days</h1>
        </div>
        
        <div className='ForecastTable'><h1>A bit more about the weather</h1>
        <div className='tile'>Cloudness</div>
        <div className='tile'>Condition</div>
        <div className='tile'>Season</div>
        <div className='tile'>Wind stuff</div>
        <div className='tile'>UV index</div>
        <div className='tile'>Humidity</div>
        </div>

        <div className='Cbox'>
        <div className='color' style={{background:"#CC241D"}}></div>
        <div className='color' style={{background:"#98971A"}}></div>
        <div className='color' style={{background:"#D79921"}}></div>
        <div className='color' style={{background:"#458588"}}></div>
        <div className='color' style={{background:"#B16286"}}></div>
        <div className='color' style={{background:"#689D6A"}}></div>

        <div className='color' style={{background:"#FB4934"}}></div>
        <div className='color' style={{background:"#B8BB26"}}></div>
        <div className='color' style={{background:"#FABD2F"}}></div>
        <div className='color' style={{background:"#83A598"}}></div>
        <div className='color' style={{background:"#D3869B"}}></div>
        <div className='color' style={{background:"#8EC07C"}}></div>
        </div>

        </>
        )

}