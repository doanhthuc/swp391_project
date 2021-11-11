import { gql, useQuery } from "@apollo/client";

const PRODUCT_BY_ID = gql`
  query getProductById($id: ID) {
    product(id: $id) {
      id
      name
      stock
      price
      oldPrice
      discount
      sold
      star
      productImages {
        imagePath
      }
      category {
        name
      }
    }
  }
`;

const GetProductById = (productId) => {
  return useQuery(PRODUCT_BY_ID, {
    variables: { id: productId },
    onCompleted: (data) => {
      console.log(data);
    },
  });
};

export default GetProductById;
