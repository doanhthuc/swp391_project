import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";

import RegisterUser from "../../hook/Register";
import { randomImg } from "../../Helper";

const Register = () => {
  const history = useHistory();
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const [fpass, setFpass] = useState();

  const { registerUser, loading } = RegisterUser();

  const registerUserNow = (e) => {
    e.preventDefault();
    if (pass !== fpass) return alert("Incorrect confirm password !");
    registerUser({
      variables: {
        username: name,
        password: pass,
        avatarUrl: randomImg(),
      },
    });
    history.push("/");
  };

  const GoogleLoginSuccess = async ({ profileObj }) => {
    registerUser({
      variables: {
        username: profileObj.familyName,
        password: profileObj.googleId,
        avatarUrl: randomImg(),
      },
    });
    history.push("/");
  };

  const GoogleLoginFailure = () => {
    alert("Login fail cmnr");
  };

  if (loading) return <>Loading...</>;
  return (
    <>
      <div id="container">
        <div id="left1"></div>
        <div id="right" style={{ marginTop: "-30px" }}>
          <h1 id="login">Register</h1>
          <br />
          <input onChange={(e) => setName(e.target.value)} type="email" id="email" className="client-info" />
          <label className="hehelog" htmlFor="email">
            User
          </label>
          <input onChange={(e) => setPass(e.target.value)} type="password" id="password" className="client-info" />
          <label className="hehelog" htmlFor="password">
            Password
          </label>
          <input onChange={(e) => setFpass(e.target.value)} type="password" id="cpassword" className="client-info" />
          <label className="hehelog" htmlFor="cpassword">
            Confirm Password
          </label>
          <input onClick={(e) => registerUserNow(e)} type="submit" id="submit" className="client-info change1" value="Register" />
          <button className="social" id="facebook">
            connect with facebook
          </button>
          <GoogleLogin
            clientId="182080911134-11hvklsfib63ednc46ktqj4vktig240g.apps.googleusercontent.com"
            render={(renderProps) => (
              <button onClick={renderProps.onClick} className="social" id="google">
                connect with google
              </button>
            )}
            buttonText="Login with google"
            onSuccess={GoogleLoginSuccess}
            onFailure={GoogleLoginFailure}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
