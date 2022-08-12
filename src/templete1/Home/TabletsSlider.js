import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const TabletsSlider = () => {
  const [tablets, setTablets] = useState([]);

  // slider
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  // load data Tablets
  useEffect(() => {
    fetch("https://laptop-1997.herokuapp.com/tablet")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTablets(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-center my-5 font-bold  p-2">
        Tablets <span className="text-primary"> Service</span>{" "}
      </h1>
      <div class="divider">OR</div>
      <div>
        {/* <h2>Auto Play</h2> */}
        <Slider
          {...settings}
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 justify-items-center "
        >
          {tablets?.slice(-5).map(r => (
            <div class="card w-96 bg-base-100 shadow-xl mx-auto m-5 py-10">
              <div className="text-center">
                <div className="w-9/12 text-center mx-auto">
                  <img class="w-full" src={r.img} alt="" />
                </div>
                <h3 className="text-grey font-bold text-start px-9">
                  {r.name?.slice(0, 20)}
                </h3>
                <h3 className="text-grey font-bold text-start px-9">
                  {r.Features}
                </h3>
                <h3 className="text-grey font-bold text-start px-9">
                  {r.display?.slice(0, 40)}
                </h3>
                <h3 className="text-grey font-bold text-start px-9">
                  {r.ports}
                </h3>
                <h3 className="text-grey font-bold text-start px-9">
                  {r.resolution?.slice(0, 40)}
                </h3>
                <h3 className="text-grey font-bold text-start px-9">
                  Price: <span className="text-primary">{r.price}</span> <span className="text-3xl font-bold text-black">৳</span>
                </h3>
                <h3>
                  <Link
                    className="btn btn-sm btn-success mx-4 font-bold"
                    to="/tablets"
                  >
                    BayNow
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TabletsSlider;
