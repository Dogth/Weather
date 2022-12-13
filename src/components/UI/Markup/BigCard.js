import FC from './FC.json'
import Graph from './Graph';
import Tagger from './Tagger';

import './BigCard.css'

export default function BigCard(props){

//Perhaps User Defined

const degrees = new Intl.NumberFormat('en-US', {
    style: 'unit',
    unit: 'celsius',
  }).format;

const location = ` ${FC.geo_object.province.name}, ${FC.geo_object.country.name} (${FC.info.lat} ${FC.info.lon})`

const Time = new Intl.DateTimeFormat(navigator.language, {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
}).format;

    return(
        <>
        <div className='BigCard'>
            <Tagger></Tagger>
        <h4>{Time(new Date(FC.now_dt))}. {location}</h4>
        <h1>{degrees(FC.fact.temp)}</h1>
        <h3>{degrees(FC.fact.feels_like)}</h3>
        <Graph></Graph>
        </div>
        </>
        )

}