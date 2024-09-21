import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
  mutation sendComment($text: String! , $slug: String!  , $name: String! , $email: String!) {
  createComment(
    data: {name: $name, email: $email, text: $text, post: {connect: {slug: $slug}}}
  ) {
    id
  }
}
`;
export { SEND_COMMENT };
