import React, { useEffect, useRef, useState } from "react";
import { useUpdateProfile, useAuthState } from "react-firebase-hooks/auth";
import auth from "../../hooks/useFirebase";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [agree, setAgree] = useState(false);
  const [upload, setUpload] = useState({});
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState(user?.photoURL);
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  if (loading) {
    <Loading></Loading>;
  }
  

  // ================Send-server==============
  const imgStoreKey = "428322d13b73eac9cb47c3c4911691c0";
  const onSubmit = data => {
    // console.log(data);
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStoreKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(async result => {
        if (result.success) {
          const img = result.data.url;
          // console.log(img);
          const Profile = {
            name: user?.displayName,
            email: user?.email,
            img: img,
            address: data.address,
            phone: data.phone,
            education: data.education,
          };
          //
          setImages(img);
          // send data server
          fetch(`https://laptop-1997.herokuapp.com/profile/${user?.email}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(Profile),
          })
            .then(res => res.json())
            .then(async data => {
              // console.log("server response", data);
              await updateProfile({ photoURL: img });
              toast.success("successfully updated");
              //
              reset();
              window.location.reload();
              setLoading(false);
            });
        }
      });
  };
  //=============== load upload data==============
  useEffect(() => {
    fetch(`https://laptop-1997.herokuapp.com/profile?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        // console.log("load data", data);
        setUpload(data);
      });
  }, []);

  // console.log(upload);

  return (
    <div className="my-4">
      <div className="flex justify-around">
        <h1 className="font-bold text-3xl">MyProfile </h1>
        {/* icon here */}
        <button onClick={() => setAgree(true)} className="btn text-error">
          Edit
        </button>
      </div>
      <div class="divider"></div>

      {/* new code  */}
      
      {!agree ? (
        <div className="grid grid-cols-2 md-grid cols-2">
          <div>
            
            <img
              class="mask mask-circle w-[200px] mx-auto my-5"
              // src={user?.photoURL}
              src={user.photoURL}
              alt=""
            />
          </div>
          <div>
            
            <label className="text-start px-2 input-bordered w-full max-w-xs font-bold text-sm">
              Full Name
            </label>
            <br />
            <input
              class="input input-bordered w-full max-w-xs font-bold text-lg"
              type="text"
              value={user?.displayName}
              disabled
            />
            {/*  */}
            <br />
            <label className="text-start px-2 input-bordered w-full max-w-xs font-bold text-sm">
              Email
            </label>
            <br />
            <input
              class="input input-bordered w-full max-w-xs font-bold text-lg"
              value={user?.email}
              disabled
            />
            {/*  */}
            <br />
            <label className="text-start px-2 input-bordered w-full max-w-xs font-bold text-sm">
              Address
            </label>
            <br />
            <input
              class="input input-bordered w-full max-w-xs font-bold text-lg"
              value={upload?.address}
              disabled
            />
            {/*  */}
            <br />
            <label className="text-start px-2 input-bordered w-full max-w-xs font-bold text-sm">
              Education
            </label>
            <br />
            <input
              class="input input-bordered w-full max-w-xs font-bold text-lg"
              value={upload?.education}
              disabled
            />
            {/*  */}
            <br />
            <label className="text-start px-2 input-bordered w-full max-w-xs font-bold text-sm">
              Phone Number
            </label>
            <br />
            <input
              class="input input-bordered w-full max-w-xs font-bold text-lg"
              value={upload?.phone}
              disabled
            />
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 md-grid cols-2"
        >
          <div>
            <img
              class="mask mask-circle w-[200px] mx-auto"
              src={user?.photoURL}
              // src={upload.img}
              alt=""
            />

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                name="name"
                type="file"
                className="input input-bordered w-full max-w-xs"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          {/* ================= */}
          <div>
            <div>
              <label className="text-start px-2 input-bordered w-full max-w-xs font-bold text-sm">
                Full Name
              </label>
              <br />
              <input
                class="input input-bordered w-full max-w-xs font-bold text-lg"
                type="text"
                value={user?.displayName}
                disabled
              />
              {/*  */}
              <br />
              <label className="text-start px-2 input-bordered w-full max-w-xs font-bold text-sm">
                Email
              </label>
              <br />
              <input
                class="input input-bordered w-full max-w-xs font-bold text-lg"
                placeholder="Your email"
                type="email"
                value={user?.email}
                disabled
              />
            </div>
            {/* address */}
            <div>
              <label className="text-start px-2 input-bordered w-full max-w-xs font-bold text-sm">
                Address
              </label>
              <br />
              <input
                class="input input-bordered w-full max-w-xs"
                placeholder="Your address"
                type="text"
                {...register("address")}
                required
              />
            </div>
            {/* address */}

            {/*phone  */}
            <div>
              <label className="text-start px-2 input-bordered w-full max-w-xs font-bold text-sm">
                Phone Number
              </label>
              <br />
              <input
                class="input input-bordered w-full max-w-xs"
                placeholder="Phone Number.."
                type="number"
                {...register("phone")}
                required
              />
            </div>
            {/* phone */}
            {/* education */}
            <div>
              <label className="text-start px-2 input-bordered w-full max-w-xs font-bold text-sm">
                Education
              </label>
              <br />
              <input
                {...register("education")}
                type="text"
                min="20"
                max="200"
                placeholder="Education here."
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* education */}
            <input
              type="submit"
              onClick={() => setAgree(true)}
              value="Save Change"
              class="input btn-secondary mt-5 text-white font-bold text-2xl input-bordered w-full max-w-xs"
            />
          </div>
          {/* ===================== */}
        </form>
      )}
    </div>
  );
};

export default MyProfile;
