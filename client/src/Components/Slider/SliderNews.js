import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Slider(props){
  return(
      <Carousel responsive={responsive} infinite={true}>
        <li>
          <img src={props.imgOne} alt='' style={{width: '100%'}}></img>
            <div className='info'>
                <Link to ='/'>
                    OKKO HOTELS ANNOUNCES <br/>
                    A NEW ADDRESS IN <br/> LA DÉFENSE
                </Link>
                <Link className='details' to ='/'> more details </Link>
            </div>
        </li>
        <li>
          <img src={props.imgTwo} alt='' style={{width: '100%'}}></img>
            <div className='info'>
                <Link to ='/'>
                    OKKO HOTELS ANNOUNCES <br/>
                    A NEW ADDRESS IN <br/> LA DÉFENSE
                </Link>
                <Link className='details' to ='/'> more details </Link>
            </div>
        </li>
        <li>
          <img src={props.imgThree} alt='' style={{width: '100%'}}></img>
            <div className='info'>
                <Link to ='/'>
                    OKKO HOTELS ANNOUNCES <br/>
                    A NEW ADDRESS IN <br/> LA DÉFENSE
                </Link>
                <Link className='details' to ='/'> more details </Link>
            </div>
        </li>
        <li>
          <img src={props.imgFour} alt='' style={{width: '100%'}}></img>
            <div className='info'>
                <Link to ='/'>
                    OKKO HOTELS ANNOUNCES <br/>
                    A NEW ADDRESS IN <br/> LA DÉFENSE
                </Link>
                <Link className='details' to ='/'> more details </Link>
            </div>
        </li>
        <li>
          <img src={props.imgFive} alt='' style={{width: '100%'}}></img>
            <div className='info'>
                <Link to ='/'>
                    OKKO HOTELS ANNOUNCES <br/>
                    A NEW ADDRESS IN <br/> LA DÉFENSE
                </Link>
                <Link className='details' to ='/'> more details </Link>
            </div>
        </li>
        <li>
          <img src={props.imgSix} alt='' style={{width: '100%'}}></img>
            <div className='info'>
                <Link to ='/'>
                    OKKO HOTELS ANNOUNCES <br/>
                    A NEW ADDRESS IN <br/> LA DÉFENSE
                </Link>
                <Link className='details' to ='/'> more details </Link>
            </div>
        </li>
        <li>
          <img src={props.imgSeven} alt='' style={{width: '100%'}}></img>
            <div className='info'>
                <Link to ='/'>
                    OKKO HOTELS ANNOUNCES <br/>
                    A NEW ADDRESS IN <br/> LA DÉFENSE
                </Link>
                <Link className='details' to ='/'> more details </Link>
            </div>
        </li>
      </Carousel>
      )
}