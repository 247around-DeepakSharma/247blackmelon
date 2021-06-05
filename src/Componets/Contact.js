import React from "react";
import Formfield from "../Componets/Formfield";
import Fdata from "../Componets/Fdata";
const Contact = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
<form>
            {Fdata.map((val, index) => {
              return (
                <Formfield
                  key={index}
                  label={val.label}
                  type={val.type}
                  name={val.name}
                  placeholder={val.placeholder}
                />
              );
            })}
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <input class="btn btn-primary" type="submit" value="Submit"/>
            <input class="btn btn-primary ml-2" type="reset" value="Reset"/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
