import { useQuery } from "@apollo/client";
import { GET_ALL_AUTHORS } from "../../graphQl/queries";
import { Link } from "react-router-dom";
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function Authors() {
  const { data, loading } = useQuery(GET_ALL_AUTHORS);

  if (loading) return <p>loading...</p>;

  const { authors } = data;


  return (
    <>
      <List
        component="nav"
        sx={{
          boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
          backgroundColor: "#ffffff",
          borderRadius: 4,
        }}
      >
        {authors.map((author) => (
          <Link to={`/authors/${author.slug}`} key={author.slug}>
            <ListItemButton  >
              <ListItemAvatar>
                <Avatar>
                  <img
                    src={author.avatar.url}
                    alt={author.name}
                    width="50px"
                    height="50px"
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={author.name}
                primaryTypographyProps={{ sx: { fontWeight: 600 } }}
              />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </>
  );
}

export default Authors;
