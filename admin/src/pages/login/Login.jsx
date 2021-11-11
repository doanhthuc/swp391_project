import { useMutation } from "@apollo/client";
import { useState } from "react";
import { LoginMutation } from "../../graphql/mutation";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [login] = useMutation(LoginMutation, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.login.getToken);
    },
  });

  const handleInput = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    login({
      variables: {
        username: loginForm.username,
        password: loginForm.password,
      },
    });
    history.push("/");
  };

  // if (!loading) {
  //     console.log(respData);
  // }

  return (
    <div>
      &nbsp;&nbsp;
      <label htmlFor="">Admin</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="text" name="username" onChange={handleInput} value={loginForm.username} />
      <br />
      &nbsp;&nbsp;
      <label htmlFor="">Password</label>&nbsp;&nbsp;&nbsp;
      <input type="password" name="password" onChange={handleInput} value={loginForm.password} />
      <br />
      <button style={{ width: "100px", margin: "10px" }} onClick={handleLoginClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
