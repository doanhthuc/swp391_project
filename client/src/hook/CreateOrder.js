import { gql, useMutation } from "@apollo/client";

const CREATE_ORDER = gql`
  mutation CreateOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
      user {
        username
      }
      orderDetails {
        quantity
      }
    }
  }
`;

const CreateOrder = () => {
  const [payOrder, { loading, error }] = useMutation(CREATE_ORDER, {
    onCompleted: (data) => {
      console.log(data);
    },
  });

  return {
    payOrder,
    loading,
    error,
  };
};

export default CreateOrder;
