import React from "react";
import image from "../assets/8EPkr51Xc7lLPcZh4lFk.jpg.pagespeed.ce.pEe-IrgvC0.jpg";
import image1 from "../assets/nEYuZ8U0cBVolYmrxood.jpg.pagespeed.ce.tK5XR0gfqK.jpg";
import glim1 from "../assets/glim1.jpg";
import glim2 from "../assets/glim2.jpg";
import glim3 from "../assets/glim3.jpg";
import glim4 from "../assets/glim4.jpg";
function About() {
  return (
    <>
      <div className="bg-white">
        <h2 className="text-black text-center text-5xl mt-3">
          <strong>About Us</strong>
        </h2>
        <div className=" mt-10 px-10 flex flex-row  ">
          <h2 className="text-4xl text-black ml-20 mt-5 px-20">
            Shimla Travels is one of the leading travel agencies in Kerala. That
            renders quality travel services to corporate and individual
            customers. We offer a variety of exciting tours and experiences
            across India mainly specialized in South regions. Established in
            2001 and tour packages started in 2009 & are Based in Kerala Kochi
            India. Since then we are the most trusted and respected name in the
            travel industry.
          </h2>
          <img
            src={image}
            alt="about"
            style={{ width: "50%", height: "50%" }}
          />
        </div>
        <div className=" mt-10 px-10 flex flex-row  ">
          <img
            src={image1}
            alt="something"
            className="mt-10 ml-20"
            style={{ width: "45%", height: "50%" }}
          />
          <h2 className="text-4xl text-black ml-10 mt-15 px-20">
            Be it an unexpected business trip or a leisurely getaway, we help
            you handle the hassles of your travel itineraries in the most
            cost-effective and professional manner. From strategic booking to
            hotel reservations and travel insurance, we remain your 'highly
            proficient and reliable travel partner'. 
            units.
          </h2>
        </div>
        <h2 className="text-black text-5xl text-center mt-5"><b>Some glims from "Shimla Travels"</b></h2>
        <div className="flex flex-row mt-15 ml-10">
          <img src={glim1}className="p-10" style={{ width: "25%",height: "35%"}}/>
           <img src={glim2} className="p-10" style={{ width: "25%",height: "35%"}}/>
            <img src={glim3} className="p-10" style={{ width: "25%",height: "35%"}}/>
             <img src={glim4} className="p-10" style={{ width: "25%",height: "35%"}}/>
        </div>
      </div>
    </>
  );
}

export default About;
