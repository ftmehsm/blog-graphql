import Grid from "@mui/material/Grid2";
import { useQuery } from "@apollo/client";
import { GET_ALL_BLOGS } from "../../graphQl/queries";
import CardEl from "../shared/CardEl";
import { CircularProgress } from "@mui/material";

function Blogs() {
  const { data, loading} = useQuery(GET_ALL_BLOGS);

  if (loading) return <CircularProgress />;

  const { posts } = data;

  return (
    <>
      <Grid container spacing={2}>
        {posts.map((blog) => (
          <Grid key={blog.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <CardEl {...blog} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Blogs;
