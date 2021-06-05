import React from "react";
import { NavLink } from "react-router-dom";
import userimg from "../Componets/images/user-svgrepo-com.svg";
const Login = () => {
  return (
    <div className="wrapper fadeInDown">
        <strong><b style={{color:"#ec9993",fontSize:"1.9rem"}}>Appliance Screw</b></strong>
      <div id="formContent">
        <div className="fadeIn first">
          <img
            src={userimg}
            id="icon"
            alt="User Icon"
          />
        </div>

        <form>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
        <NavLink className="underlineHover" to="/register">
            SignUp
          </NavLink>
        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>   
          
          
        </div>
      </div>
    </div>
  );
};
export default Login;
