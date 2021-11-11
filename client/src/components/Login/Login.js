import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import LoginUser from "../../hook/Login";

const Login = () => {
  const history = useHistory();
  const { loginUser, loading } = LoginUser();

  const [name, setName] = useState();
  const [pass, setPass] = useState();

  const loginUserNow = () => {
    loginUser({
      variables: {
        username: name,
        password: pass,
      },
    });
    history.push("/");
  };

  const GoogleLoginSuccess = async ({ profileObj }) => {
    loginUser({
      variables: {
        username: profileObj.familyName,
        password: profileObj.googleId,
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
        <div id="left2"></div>
        <div id="right">
          <h1 id="login">LogIn</h1>
          <br />
          <input onChange={(e) => setName(e.target.value)} type="email" id="email" className="client-info" />
          <label className="hehelog" htmlFor="email">
            User
          </label>
          <input onChange={(e) => setPass(e.target.value)} type="password" id="password" className="client-info" />
          <label className="hehelog" htmlFor="password">
            Password
          </label>
          <input onClick={() => loginUserNow()} type="Login" id="submit" className="client-info change1" defaultValue="Login" />
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

export default Login;
