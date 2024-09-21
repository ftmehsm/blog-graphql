import { gql } from "@apollo/client";

const GET_ALL_BLOGS = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
        field
      }
      title
      coverphoto {
        url
      }
      id
      slug
    }
  }
`;

const GET_ALL_AUTHORS = gql`
  query {
    authors {
      slug
      name
      field
      description{text}
      avatar {
        url
      }
      post {
        title
        coverphoto {
          url
        }
      }
    }
  }
`;

const GET_AUTHOR = gql`
query getAuthor($slug: String) {
  author(where: {slug: $slug}){
    avatar{
      url
    }
    field
    name
    description{
      html
    }
    post{
      coverphoto{
        url
      }
      id
      title
      slug
    }
  }
}

`

const GET_BLOG = gql`
query getBlog($slug: String) {
  post(where: {slug: $slug}){
    slug
    title
    datePublished
    coverphoto{
      url
    }
    content{
      html
    }
    author{
      slug
      field
      name
      ,avatar{
        url
      }
    }
  }
}
`
const GET_COMMENTS = gql`
query MyQuery ($slug: String!){
  comments(where: {post: {slug: $slug}}) {
    name
    text
    id
  }
}
`

export { GET_ALL_BLOGS, GET_ALL_AUTHORS,GET_AUTHOR,GET_BLOG,GET_COMMENTS };
