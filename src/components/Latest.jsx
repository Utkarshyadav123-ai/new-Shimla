import React from 'react'
import l1 from "../assets/latest1.jpg";
import l2 from "../assets/latest2.jpg";
import l3 from "../assets/latest3.jpg";
import l4 from "../assets/latest4.jpg";
 import l5 from "../assets/latest5.jpg";
 import l6 from "../assets/latest6.jpeg";
 import l7 from "../assets/latest7.jpeg";
  import l8 from "../assets/latest8.jpeg";
 import l9 from "../assets/latest9.jpeg";















function Latest() {
  return (
     <div className="bg-white">
      <h2 className="text-black text-center text-5xl mt-7">
        <strong>Latest Travel</strong></h2>
        <h2 className="text-black text-center text-2xl mt-7">
        <strong>Some good moments captured with our precious clients, .</strong>
        </h2>
        <div className="flex flex-row mt-10 ml-20 p-4">
          <div className="photo">
          <img src={l1} style={{width: "400px",height:"400px"}}/>
          <h2 className="text-xl mt-10 p-5">Shimla travels '  2 days trip to<br/>  Kaprikad,Bhoothnankettu,Munnar
           <br/> @ St.Joseph CGHS, Varapuzha</h2>
          

          </div>
          <div className="photo ml-40">
          <img src={l2} style={{width: "400px",height:"400px"}}/>
          <h2 className="text-xl mt-10 p-5">Shimla travels ' 3 days Chickamangalore <br/>-Belur tour package @ St.xaviers <br/>B.Ed college, Aluva</h2>

          </div>
          <div className="photo ml-40">
          <img src={l3} style={{width: "400px",height:"400px"}}/>
          <h2 className="text-xl p-5 mt-10">Shimla travels ' Goa tour<br/> package @ Group of family From <br/>Holy cross Church, Nettoor</h2>

          </div>

         
        

        </div>
         <div className="flex flex-row mt-10 ml-20 p-4">
          <div className="photo">
          <img src={l4} style={{width: "400px",height:"400px"}}/>
          <h2 className="text-xl p-5 mt-10">Shimla travels ' Ooty tour <br/>package @St.JosephEMHSS, Thrikakkara</h2>
          

          </div>
          <div className="photo ml-40">
          <img src={l5} style={{width: "400px",height:"400px"}}/>
          <h2 className="text-xl p-5 mt-10">Shimla travels 2 days Trivandrum<br/> tour package @St.Marys AIGHS,Fort Kochi</h2>

          </div>
          <div className="photo ml-40">
          <img src={l6} style={{width: "400px",height:"400px"}}/>
          <h2 className="text-xl p-5 mt-10">Shimla travels ' Goa tour <br/> package @St.Antonys H.S.S, Kacheripady</h2>

          </div>

        </div>
         <div className="flex flex-row mt-10 ml-20 p-4">
          <div className="photo">
          <img src={l7} style={{width: "400px",height:"400px"}}/>
          <h2 className="text-xl p-5 mt-10">Singapore Tour Package</h2>
          

          </div>
          <div className="photo ml-40">
          <img src={l8} style={{width: "400px",height:"400px"}}/>
          <h2 className="text-xl p-5 mt-10">Goa Tour Package @Lourdes <br/>  Hospital staff & Family
</h2>

          </div>
          <div className="photo ml-40">
          <img src={l9} style={{width: "400px",height:"400px"}}/>
          <h2 className="text-xl p-5 mt-10">Hyderabad Flight Tour Package</h2>

          </div>

         
        

        </div>
      </div>
  )
}

export default Latest
