import { gql, useQuery } from "@apollo/client";

const LIST_PRODUCT_PAGE = gql`
  query getListProduct($page: Int!) {
    products(page: $page, limit: 100, order: "") {
      totalPages
      products {
        id
        name
        category {
          name
        }
        price
        oldPrice
        discount
        sold
        star
        productImages {
          imagePath
        }
      }
    }
  }
`;

const GetListProductByPage = () => {
  return useQuery(LIST_PRODUCT_PAGE, {
    variables: { page: 1 },
  });
};

export default GetListProductByPage;
