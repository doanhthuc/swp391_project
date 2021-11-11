import { gql, useMutation } from "@apollo/client";
import userStore from "../store/userStore";

const CREATE_USER = gql`
  mutation CreateUser($username: String!, $password: String!, $avatarUrl: String!) {
    createUser(input: { username: $username, password: $password, roleNames: "USER", avatarUrl: $avatarUrl }) {
      username
      getToken
      avatarUrl
    }
  }
`;

const RegisterUser = () => {
  const { addUser } = userStore();

  const [registerUser, { loading }] = useMutation(CREATE_USER, {
    onCompleted: ({ createUser: data }) => {
      data.picture = data.avatarUrl;
      addUser(data);
    },
  });

  return {
    registerUser,
    loading,
  };
};

export default RegisterUser;
