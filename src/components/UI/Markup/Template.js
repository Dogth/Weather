import './Template.css';
import FC from './FC.json'
import Tagger from './Tagger.js'

export default function Template(props){
    return(
        <>
        <div className='Wsrapper'>
            <div className='BigCard'>
                <Tagger />
                <div className='CurrentWeather'>24Deg</div>
                <div className='Divider'>Graph by Hours</div>
                <div className='Graph'>WeatherGraph</div>
            </div>
            <div className='Carousel'>
                <div className='SmallCard'>
                    <div className='Date'>24.12</div>
                    <div className='Forecast'>
                        <div className='Icon'>FA_Sun</div>
                        <div className='Temp'>12 24</div>
                    </div>
                </div>
            </div>
        </div>
        </>
        )

}