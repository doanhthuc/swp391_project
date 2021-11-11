import { gql, useMutation } from "@apollo/client";

const ADD_COMMENT = gql`
  mutation AddComment($input: CreateProductCommentInput!) {
    comment(input: $input }) {
      comment
    }
  }
`;

const AddCommentProduct = () => {
  const [addComment, { loading, error }] = useMutation(ADD_COMMENT, {
    onCompleted: (data) => {
      console.log(data);
    },
  });

  return {
    addComment,
    loading,
    error,
  };
};

export default AddCommentProduct;
