import React from "react";
import p1 from "../assets/package1.jpg";
import p2 from "../assets/package2.jpg";
import p3 from "../assets/package3.jpg";
import p4 from "../assets/package4.jpg";
import p5 from "../assets/package5.jpg";
import s1 from "../assets/shimla1.avif";
import s2 from "../assets/ahimla2.avif";
import s3 from "../assets/shimla4.webp";
import s4 from "../assets/shimla6.avif";
import s5 from "../assets/shimla7.avif";
import s6 from "../assets/OIP.webp";
 import s7 from "../assets/OIP (1).webp";
import s8 from "../assets/OIP (2).webp";







function Package() {
  return (
    <div className="bg-white">
      <h2 className="text-black text-center text-5xl mt-7">
        <strong>Best Tour Packages</strong>
        <marquee
          className="bg-cyan-400 text-2xl mt-7 p-4 w-[90%]"
          behavior=""
          direction="right to left"
        >
          Conducting tours to Velankanny every Friday
        </marquee>
      </h2>
      <div className="holy flex flex-row ml-20 mt-5">
        <img src={p1} alt="about" style={{ width: "20%", height: "20%" }} />
        <div className="holy-text bg-purple-100 mr-17">
          <h2 className="text-6xl text-black ml-20">
            <b>Holy Land Pilgrimage</b>
          </h2>{" "}
          <br />
          <h2 className="text-2xl text-black ml-5 p-4">
            The Catholic Pilgrimage is an opportunity to explore the spiritual
            underpinnings of the Holy Land, including how geography, history,
            and culture have shaped individual and theological understandings.
          </h2>
        </div>
      </div>
      <div className="sing mt-3 flex flex-row ml-20 ">
        <img src={p2} alt="about" style={{ width: "20%", height: "20%" }} />
        <div className="holy-text bg-purple-100 mr-17">
          <h2 className="text-6xl text-black ml-20">
            <b>Singapore</b>
          </h2>{" "}
          <br />
          <h2 className="text-2xl text-black ml-5 p-4">
            Singapore is a sunny, tropical island in South-east Asia, off the
            southern tip of the Malay Peninsula. The city-state is 710 square
            kilometers .
          </h2>
        </div>
      </div>
      <div className="thailand mt-3 flex flex-row ml-20 ">
        <img src={p3} alt="about" style={{ width: "20%", height: "20%" }} />
        <div className="holy-text bg-purple-100 mr-17">
          <h2 className="text-6xl text-black ml-20">
            <b>Thailand</b>
          </h2>{" "}
          <br />
          <h2 className="text-2xl text-black ml-5 p-4">
            Located in the heart of mainland Southeast Asia, Thailand is a
            country of mountains, hills, plains and a long coastline along the
            Gulf of Thailand (1,875 km)
          </h2>
        </div>
      </div>
      <div className="malasiya mt-3 flex flex-row ml-20 ">
        <img src={p4} alt="about" style={{ width: "20%", height: "20%" }} />
        <div className="holy-text bg-purple-100 mr-17">
          <h2 className="text-6xl text-black ml-20">
            <b>Malasiya</b>
          </h2>{" "}
          <br />
          <h2 className="text-2xl text-black ml-5 p-4">
            Malaysia is a multi-ethnic and multi-religious country in Southeast
            Asia and one of the wealthiest and most developed countries,
            outranked in GNP only by Singapore and oil-rich Brunei.
          </h2>
        </div>
      </div>
      <div className="kerala mt-3 flex flex-row ml-20 ">
        <img src={p5} alt="about" style={{ width: "20%", height: "20%" }} />
        <div className="holy-text bg-purple-100 mr-17">
          <h2 className="text-6xl text-black ml-20">
            <b>6 days Kerala tour package</b>
          </h2>{" "}
          <br />
          <h2 className="text-2xl text-black ml-5 p-4">
            6 days Kerala tour package covers Kochi, Munnar, Thekkady, Alleppey, Trivandrum.The kerala is beautiful city of India
          </h2>
          <button className="bg-blue-300 text-black ml-250 p-3 text-xl">View More Packages</button>
        </div>
      </div>
      <div className="bg-white">
      <h2 className="text-black text-center text-5xl mt-7">
        <strong>Some Photos Of Our Best Tourists Destination</strong>
        </h2>
        <div className="flex flex-row mt-10 ml-10 mr-10 p-10">
          <img src={s1} style={{width:"325px",height:"350px"}}/>
          <img src={s2} className="ml-20"style={{width:"325px",height:"350px"}}/>
           <img src={s3} className="ml-20"style={{width:"325px",height:"350px"}}/>
            <img src={s4} className="ml-20"style={{width:"325px",height:"350px"}}/>
           
        </div>
        <div className="flex flex-row mt-5 ml-10 mr-10 p-10">
            <img src={s5} className=""style={{width:"325px",height:"350px"}}/>
               <img src={s6} className="ml-20"style={{width:"325px",height:"350px"}}/>
                 <img src={s7} className="ml-20"style={{width:"325px",height:"350px"}}/>
                   <img src={s8} className="ml-20"style={{width:"325px",height:"350px"}}/>
        </div>
        </div>
    </div>
  );
}

export default Package;
