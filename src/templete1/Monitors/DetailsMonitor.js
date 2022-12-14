import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import '../Style/Style.css'

import ConfirmOrderForm from "../Computers/ConfirmOrderForm";

const DetailsMonitor = () => {
  let { toolId } = useParams();
  const [toolDetail, setToolsDetail] = useState({});

  useEffect(() => {
    const url = `https://laptop-1997.herokuapp.com/monitor/${toolId}`;
    // console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log('monitor data', data);
        setToolsDetail(data);
      });
  }, [toolId]);

  return (
    <div className="py-10 cp text-white">
      {/* <h2>Tools here now amn {toolId}</h2> */}
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
          <figure className="w-full">
            <img className="w-3/5 mx-auto" src={toolDetail?.img} alt="Album" />
          </figure>
          <p className="p-10 text-black text-start font-bold">
            {toolDetail.description}
          </p>
          <p className="p-10 text-black text-start font-bold">
            Description Lenovo IdeaPad D330 10IGL Intel CDC N4020 10.1" HD Touch
            Laptop The Ideapad D330 has computing power and all the fun and
            mobility of a lightweight tablet. From multitasking to connecting
            with friends online and streaming shows. This Ideapad D330 featured
            4GB DDR4 RAM, 128GB eMMC and Intel UHD 600 Graphics, and Windows 10
            Home. The Lenovo Ideapad D330 comes with 10.1" (1280 x 800) HD IPS
            WXGA LED Antiscratch Brightness: 300nits, Aspect Ratio: 16:10, Color
            Gamut: 50% NTSC Display. This Lenovo IdeaPad D330 has an abundance
            of ports, including a USB-C 3.1 to help you charge other devices or
            transfer data at speeds up to 10 Gbps. Its display can generate
            lifelike clarity with 2S stereo Speakers Dolby Premium Audio is the
            perfect combination for entertainment. This Lenovo IdeaPad D330
            10IGL comes with 02 years International Limited Warranty (1 year for
            Battery and Adapter, Terms & Conditions Apply As Per Lenovo)
          </p>
          <p className="p-10 text-black text-start font-bold">
            Specification Basic Information Processor Intel Celeron N4020
            Processor (4M Cache,1.10 GHz up to 2.80 GHz) Display 10.1" (1280 x
            800) HD IPS WXGA LED Antiscratch Brightness: 300nits, Aspect Ratio:
            16:10, Color Gamut: 50% NTSC Display Memory 4 GB DDR4 RAM Storage
            128GB eMMC Graphics Intel UHD 600 Graphics Operating System Genuine
            Win 10 home Battery 39Wh, Li-Polymer Adapter 45W AC adapter Audio
            High Definition (HD) Audio, Stereo speakers, 1W x 2, Dolby Audio
            Premium
          </p>
        </div>
        <div class="text-start p-10">
          <div>
            <h2 class="text-2xl font-bold my-4 text-primary">{toolDetail.name}</h2>
            <p className="font-bold">
              Price: <span class="text-2xl font-bold text-primary">{toolDetail.price} ???</span>
            </p>
            <p class="text-lg font-bold my-4 text-primary">
              MinQuantity{toolDetail.minimumQuantity}
            </p>
            <p class="text-lg font-bold my-4 text-primary">
              AvailQuantity{toolDetail.availableQuantity}
            </p>
            {/* <button class="btn btn-primary">Listen</button> */}
          </div>
          <div className="mt-[170px]">
            <ConfirmOrderForm toolDetail={toolDetail}></ConfirmOrderForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsMonitor;
// 