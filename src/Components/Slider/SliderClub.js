import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

export default function SliderClub(props){
  return(
      <Carousel responsive={responsive} autoPlay={true} infinite={true}>
        <div>
          <img src={props.imgOne} alt='' style={{width: '100%', height: '450px'}}></img>
        </div>
        <div>
          <img src={props.imgTwo} alt='' style={{width: '100%', height: '450px'}}></img>
        </div>
        <div>
          <img src={props.imgThree} alt='' style={{width: '100%', height: '450px'}}></img>
        </div>
        <div>
          <img src={props.imgFour} alt='' style={{width: '100%', height: '450px'}}></img>
        </div>
      </Carousel>
      )
}