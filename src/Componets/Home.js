import React from "react";
import web from "../Componets/images/img.jpg";
import { NavLink } from "react-router-dom";
import Card from "../Componets/Card";
import Sdata from "../Componets/Carddata";
const Home = () => {
  return(
    <section id="header" className="">
    <div className="container_fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
          <div className= "col-md-6 pt-5 pt-lg-0  order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h1>Appliance Services <strong className="brand-name"
            >For Customer</strong></h1>
            <h2 className="my-3">
              We are provide you good services at the same time of booking with lowest cost..
            </h2>
            <div className="mt-3">
              <NavLink  to="/" className="btn-get-started">
               Get Started
              </NavLink>
            </div>

          </div>
          <div className="col-lg-6 order-1 order-lg-2 header-img">
            <img src={web} className="img-fluid animated" alt="homepng"/>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-10 mx-auto">
        <div className="row gy-4">{/*for vertical and horizontal(gx) */}
          {
            Sdata.map((val,index)=>{
              return <Card key={index} 
              imgsrc={val.imgsrc}
              title={val.title}
              />
            })
          }
        </div>
      </div>
    </div>
  </section> 
     
      
  )
};

export default Home;
