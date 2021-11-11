import { gql } from '@apollo/client';

const LoginMutation = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            id
            username
            getToken
        }
    }
`;

const CreateProductMutation = gql`
    mutation createProduct($input: CreateProductInput!) {
        createProduct(input: $input) {
            name
            price
            oldPrice
            discount
            stock
            sold
            productImages {
                imagePath
            }
            star
            brand
            material
            origin
            sendFrom
            comments {
                comment
            }
            totalRates
            totalComments
            category {
                name
            }
        }
    }
`;

const UpdateProductMutation = gql`
    mutation updateProduct($input: UpdateProductInput!) {
        updateProduct(input: $input) {
            id
            name
            price
            stock
            productImages {
                id
                imagePath
            }
        }
    }
`;

const DeleteProductMutation = gql`
    mutation deleteProduct($id: ID!) {
        deleteProduct(id: $id)
    }
`;

const DeleteCommentMutation = gql`
    mutation deleteComment($id: ID!) {
        deleteComment(id: $id)
    }
`;

export {
    LoginMutation,
    CreateProductMutation,
    DeleteProductMutation,
    DeleteCommentMutation,
    UpdateProductMutation,
};
