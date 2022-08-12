import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import ReactStars from "react-rating-stars-component";

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  // get

  const {
    data: rattings,
    isLoading,
    refetch,
  } = useQuery(["ratting"], () =>
    fetch("https://laptop-1997.herokuapp.com/ratting").then(res => res.json())
  );

  if (isLoading) return "Loading...";

  // console.log(rattings);

  return (
    <div className="py-10 bg-black text-white">
      <div>
        <div>
          {/* <h2>Auto Play</h2> */}
          <Slider
            {...settings}
            className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 justify-items-center "
          >
            {rattings?.slice(-5).map(r => (
              <div className="text-center">
                <h3>{r.text}</h3>
                <div className="w-[96px] mx-auto">
                  <img class="mask mask-circle" src={r.img} alt="" />
                </div>
                <div className="w-[220px] mx-auto">
                  <ReactStars
                    count={r.stars}
                    // classNames="ms-32"
                    size={50}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    color="#ffd700"
                  />
                </div>

                {/* <h3>name {r.email}</h3> */}
                <h3 className="mt-3">name {r.name}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
