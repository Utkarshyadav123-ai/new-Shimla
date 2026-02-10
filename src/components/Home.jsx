import React from "react";
import image from "../assets/kerala-tour-1300x450.jpg";
import image2 from "../assets/shimla1.jpg";
import image3 from "../assets/apple.webp";
import image4 from "../assets/university.jpeg";
import image5 from "../assets/museum.jpg";
function Home() {
  return (
    <>
      <div classname="w-full">
        <h2 className="absolute ml-15 mt-40 text-white text-8xl">
          <strong>Enjoy the beauty of </strong>
        </h2>
        <h2 className="absolute ml-15 mt-65 bold text-white text-8xl">
          <strong>travelling</strong>{" "}
        </h2>
        <h2 className="absolute ml-15 mt-85  text-white py-5 text-2xl">
          Relieve from the stress of finding your perfect travel buddy
        </h2>
        <button className=" absolute ml-15 mt-105 py-5 px-5 text-xl   bg-blue-500 rounded-xl text-white">
          Chat With Us
        </button>
        <img src={image} alt="chef" style={{ width: "100%", height: 800 }} />
      </div>
      <div>
        <h2 className="text-center text-6xl py-4 text-black">
          History of Shimla
        </h2>
        <div className="flex flex-row">
          <h2 className="text-center text-3xl text-black px-7 py-5">
            Shimla, city, capital of Himachal Pradesh state, northwestern India.
            The city lies northeast of Chandigarh on a ridge of the Himalayan
            foothills, at an elevation of about 7,100 feet (2,200 metres).
            Christ Church in Shimla, India Christ Church in Shimla, IndiaChrist
            Church (mid-19th century) in Shimla, Himachal Pradesh, India. Shimla
            was built by the British on land they had retained after the Gurkha
            War of 1814–16 and was used for resting troops. It gained popularity
            as a summer resort because of its cool climate and scenic setting,
            and from 1865 to 1939 it served as India’s summer capital. From 1947
            to 1953 it was headquarters of Punjab state, until the new capital
            city of Chandigarh was completed. Formerly: Simla Besides its
            administrative function, the city is one of India’s most popular
            hill resorts. It is a rail terminus and lies on a main road 175
            miles (280 km) north of Delhi.
          </h2>
          <img
            src={image2}
            className="px-7 py-5"
            alt="chef"
            style={{ width: 600, height: 500 }}
          />
        </div>
      </div>
      <div>
        <h2 className="text-center text-6xl py-4 text-black">
          Apple In Shimla
        </h2>
        <div className="flex flex-row">
          <h2 className="text-center text-3xl text-black px-7 py-5">
            In the state of Himachal apple is mainly cultivated in the district
            of Shimla and Kullu, Chamba, Himachal Pradesh. Mainly in Himachal
            Pradesh has “apple gardens” was first cultivated in Thanedar village
            of Shimla district. Apple is also the main cash crop of the state.
            It constitutes about 48% of the total area under production. The
            apple fruit industry has an economy of about Rs. 4000 crores.
            Himachal Pradesh currently produces an average of over 4 Lacs tonnes
            of apple annually, but the production is much less as compared to
            other countries such as China and the US. Where You Can See In
            Shimla Apple Gardens If you wont to visit an apple garden in short
            so in Mashobra YS Parmar horticulture institute is the best place to
            see. This is a chargeable about 50 rupees per person, inside take a
            picture in nearly. apple gardens start from Fagu valley so also you
            will see their apple trees.
          </h2>
          <img
            src={image3}
            className="px-7 py-5"
            alt="chef"
            style={{ width: 600, height: 500 }}
          />
        </div>
      </div>
      <div>
        <h2 className="text-center text-6xl py-4 text-black">
          Central University of Himachal Pradesh
        </h2>
        <div className="flex flex-row">
          <h2 className="text-center text-3xl text-black px-7 py-5">
            The Prime Minister, in his address to the nation on August 15, 2007,
            announced the establishment of a Central University in each of the
            states that did not have a central university so far. Subsequently,
            11th Plan provided for the establishment of 16 new Central
            Universities. Accordingly, the Central Universities Act 2009 (No. 25
            of 2009) which received Presidential assent on 20th March 2009
            provided for the establishment of Central University of Himachal
            Pradesh amongst others.The Central University of Himachal Pradesh is
            established under the Central Universities Act 2009 (No. 25 of 2009)
            enacted by the Parliament. The University is funded and regulated by
            the University Grants Commission (UGC). The University became
            functional with the assumption of charge by the first Vice
            Chancellor on 20th January 2010.
          </h2>
          <img
            src={image4}
            className="px-7 py-5"
            alt="chef"
            style={{ width: 600, height: 500 }}
          />
        </div>
      </div>
      <div>
        <h2 className="text-center text-6xl py-4 text-black">
          Shimla State Museum
        </h2>
        <div className="flex flex-row">
          <h2 className="text-center text-3xl text-black px-7 py-5">
            Located on Mount Pleasant amidst splendidly manicured lawns, the
            Shimla State Museum, also known as the Himachal State Museum, is a
            must-visit attraction for history and culture enthusiasts. Built as
            a colonial mansion, this architectural gem preserves and showcases
            the rich cultural heritage of Himachal Pradesh. The museum houses an
            extensive collection of handicrafts, coins, miniature paintings,
            ancient weapons, and unique metal idols sourced from various temples
            across the Himalayas
          </h2>
          <img
            src={image5}
            className="px-7 py-5"
            alt="chef"
            style={{ width: 600, height: 500 }}
          />//axios for backened
        </div>
      </div>
    </>
  );
}

export default Home;
