import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
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

export default function SliderShop(){
  return(
      <Carousel responsive={responsive} infinite={true}>
            <div className='box-shop box-shop-1'>
                <div>
                    <h3>Dilos pillow</h3>
                    <p>our top 3</p>
                    <span>45$</span>
                    <Link to=''>buy</Link>
                </div>
            </div>
            <div className='box-shop box-shop-2'>
                <div>
                    <h3>Dilos pillow</h3>
                    <p>our top 3</p>
                    <span>45$</span>
                    <Link to=''>buy</Link>
                </div>
            </div>
            <div className='box-shop box-shop-3'>
                <div>
                    <h3>Dilos pillow</h3>
                    <p>our top 3</p>
                    <span>45$</span>
                    <Link to=''>buy</Link>
                </div>
            </div>
            <div className='box-shop box-shop-4'>
                <div>
                    <h3>Dilos pillow</h3>
                    <p>our top 3</p>
                    <span>45$</span>
                    <Link to=''>buy</Link>
                </div>
            </div>
      </Carousel>
      )
}