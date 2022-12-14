import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="bg-grey">
      <Carousel>
        <div className="h[200px]">
          <img
            src="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/135038i27C06478AF01E2F1?v=v2"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-50"
            src="https://cdn.dribbble.com/users/1711831/screenshots/3720649/dribble.gif"
            alt=""
          />
          <p className="legend"> Laptop product 2</p>
        </div>
        <div>
          <img
            className="h-50"
            src="https://img.freepik.com/free-psd/modern-concept-devices-screen-mockup-scene_358694-5417.jpg?size=626&ext=jpg&ga=GA1.2.328685985.1649179852"
            alt=""
          />
          <p className="legend"> Laptop product 3</p>
        </div>

        <div>
          <img
            src="https://cdn.dribbble.com/users/1894420/screenshots/11563516/untitled-5.gif"
            alt=""
          />
          <p className="legend"> Laptop product 4</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
