import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from '../../../../public/banner/banner1.png'
import image2 from '../../../../public/banner/banner2.png'
import image3 from '../../../../public/banner/banner3.png'
const Banner = () => {
  return (
    <div>
      <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}  useKeyboardArrows={true}>
        <div>
          <img src={image1} alt="Description 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={image2} alt="Description 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={image3} alt="Description 2" />
          <p className="legend">Legend 2</p>
        </div>
        {/* Add more items as needed */}
      </Carousel>
    </div>
  );
};

export default Banner;
