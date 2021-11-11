import { gql, useQuery } from "@apollo/client";

const LIST_ORDER = gql`
  query {
    orderHistory {
      orderDate
      orderDetails {
        quantity
        price
        product {
          name
          productImages {
            imagePath
          }
          category {
            name
          }
        }
      }
    }
  }
`;

const GetListProductByHistory = () => {
  return useQuery(LIST_ORDER);
};

export default GetListProductByHistory;
