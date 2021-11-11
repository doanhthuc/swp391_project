import { gql, useMutation } from "@apollo/client";
import userStore from "../store/userStore";

const ENTER_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      getToken
      avatarUrl
    }
  }
`;

const LoginUser = () => {
  const { addUser } = userStore();

  const [loginUser, { loading }] = useMutation(ENTER_USER, {
    onCompleted: ({ login }) => {
      console.log(login);
      login.picture = login.avatarUrl;
      addUser(login);
    },
  });

  return {
    loginUser,
    loading,
  };
};

export default LoginUser;
