import './Landing.css';
import Slider from '../../Components/Slider/Slider';

export default function Landing(){
return(
    <div className='landing'>
        <span>
            <img className='stars' src={require('../../imgs/landing.png')}></img>
            <p>FOUR STARS, NO CLOUD</p>
        </span>
        <div className='img'>
            <Slider imgOne={require('../../imgs/1-landing.jpg')} imgTwo={require('../../imgs/2-landing.jpg')} imgThree={require('../../imgs/3-landing.jpg')} />
        </div>
    </div>
)
}