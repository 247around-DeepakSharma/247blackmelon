import React from "react";
import Formfield from "../Componets/Formfield";
import Fdata from "../Componets/Fdata";
const Register = () => {
  return (
    <>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <strong><b style={{color:"#ec9993",fontSize:"1.9rem",marginLeft:"200px"}}>Appliance Screw</b></strong>
            <form>
              {Fdata.map((val, index) => {
                return (
                  <Formfield
                    key={index}
                    label={val.label}
                    type={val.type}
                    name={val.name}
                    placeholder={val.placeholder}
                    required="true"
                  />
                );
              })}
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  About Your Self
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <input class="btn btn-primary" type="submit" value="Submit" />
              <input class="btn btn-primary ml-2" type="reset" value="Reset" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
