import React from "react";
const Formfield = (props) => {
  return (
    <>
    
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                {props.label}
              </label>
              <input

                type={props.type}
                class="form-control"
                id="exampleFormControlInput1"
                name={props.name}
                placeholder={props.placeholder}
                required
              />
            </div>
    </>
  );
};

export default Formfield;
