import { gql } from '@apollo/client';

const GetProductsQuery = gql`
    query products($page: Int, $limit: Int, $order: String, $field: String) {
        products(page: $page, limit: $limit, order: $order, field: $field) {
            page
            totalPages
            products {
                id
                name
                stock
                sold
                price
                productImages {
                    imagePath
                }
            }
        }
    }
`;

const GetCategoriesQuery = gql`
    query categories {
        categories {
            id
            name
        }
    }
`;

const GetProductQuery = gql`
    query product($id: ID) {
        product(id: $id) {
            id
            name
            price
            stock
            productImages {
                id
                imagePath
            }
            sold
            brand
            material
            origin
            sendFrom
            comments {
                id
                comment
                user {
                    username
                }
            }
        }
    }
`;

export { GetProductsQuery, GetCategoriesQuery, GetProductQuery };
