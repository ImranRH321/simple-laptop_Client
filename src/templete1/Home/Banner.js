import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src="https://i.pinimg.com/originals/a9/aa/fa/a9aafa325ea3b4c4f8330a9b30fdf3cb.gif" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://img.freepik.com/free-photo/laptop-with-white-screen-isolated-white-wall_231208-8592.jpg?size=626&ext=jpg&ga=GA1.2.328685985.1649179852" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://img.freepik.com/free-photo/laptop-with-white-screen-isolated-white-wall_231208-8594.jpg?size=626&ext=jpg&ga=GA1.2.328685985.1649179852" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://img.freepik.com/free-psd/modern-concept-devices-screen-mockup-scene_358694-5417.jpg?size=626&ext=jpg&ga=GA1.2.328685985.1649179852" />
        <p className="legend">Legend 3</p>
      </div>
      {/* <div>
            <img src="https://img.freepik.com/free-vector/laptop-turquoise-background_1045-419.jpg?size=338&ext=jpg&ga=GA1.2.328685985.1649179852" />
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img src="https://img.freepik.com/free-psd/modern-concept-laptop-screen-mockup_358694-5377.jpg?size=626&ext=jpg&ga=GA1.2.328685985.1649179852" />
            <p className="legend">Legend 5</p>
        </div> */}
    </Carousel>
  );
};

export default Banner;
