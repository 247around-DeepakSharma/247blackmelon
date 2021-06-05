import React from "react";
import { NavLink } from "react-router-dom";
import Formfield from "../Componets/Formfield";
import Fdata from "../Componets/Fdata";
import Card from "../Componets/Card";
import Sdata from "../Componets/Carddata";
const Common = (props) => {
  return (
    <>
      <section id="header" className="">
        <div className="container_fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className= "col-md-6 pt-5 pt-lg-0  order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>{props.name} <strong className="brand-name"
                >Doctor</strong></h1>
                <h2 className="my-3">
                  We are the team of developer
                </h2>
                <div className="mt-3">
                  <NavLink  to={props.visit} className="btn-get-started">
                  {props.btnname}
                  </NavLink>
                </div>

              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.imgsrc} className="img-fluid animated" alt="homepng"/>
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
    </>
  );
};

export default Common;
