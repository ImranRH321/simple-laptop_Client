import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";
import auth from "../../hooks/useFirebase";

const AddReview = () => {
  const [useValue, setUseValue] = useState(0);
  const [user] = useAuthState(auth);

  const ratingChanged = newRating => {
    // console.log(newRating);
    setUseValue(newRating);
  };

  const handleForm = e => {
    e.preventDefault();
    //
    const textInp = e.target.text.value;
    if (!useValue) {
      toast.error("Gave me Star please !!!");
    } else if (!textInp) {
      toast.error("Mama same for text flied ");
      return;
    } else {
      const ratting = {
        stars: useValue,
        text: textInp,
        name: user.displayName,
        email: user.email,
        img: user?.photoURL,
      };
      // console.log(ratting);
      fetch("https://laptop-1997.herokuapp.com/rating", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(ratting),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.insertedId) {
            toast.success("ratting done home page see now");
            e.target.reset();
          }
        });
    }
  };
  return (
    <div className="grid grid-cols-1">
      <h2 className="text-4xl text-center mt-4 font-bold text-purple-600">
        Add review here{" "}
      </h2>
      <div className="text-center w-50 mx-auto my-4">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={60}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
      </div>
      <form onSubmit={handleForm}>
        <div>
          <textarea
            className="border-4 border-emerald-500 p-3"
            placeholder="samting text"
            name="text"
            id=""
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add review{" "}
        </button>
      </form>
    </div>
  );
};

export default AddReview;
