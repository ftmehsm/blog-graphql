import { useNavigate, useParams, Link } from "react-router-dom";
import { GET_AUTHOR } from "../../graphQl/queries";
import { useQuery } from "@apollo/client";
import {
  Avatar,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  CircularProgress
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

function AuthorDetail() {
  const styles = {
    width: "100%",
  };

  const { slug } = useParams();
  const navigate = useNavigate();

  const { data, loading } = useQuery(GET_AUTHOR, {
    variables: { slug },
  });

  if (loading)
    return (
      <Box component="div" sx={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <CircularProgress />
      </Box>
    );

  const {
    author: { name, field, description, post, avatar },
  } = data;
  console.log(name);

  return (
    <Container maxWidth="lg">
      <Grid
        display="flex"
        gap={3}
        flexDirection="column"
        justifyContent="center"
        container
        marginY={5}
      >
        <Grid display="flex" justifyContent="space-between">
          <div>

          <Typography component="h5" variant="h4" fontWeight={700} marginBottom="2px" color='#172554'>
            {name}
          </Typography>
          <Typography fontWeight={400}>{field}</Typography>
          </div>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid alignSelf="center">
          <Avatar src={avatar.url} sx={{ width: 200, height: 200 }} />
        </Grid>
        <div dangerouslySetInnerHTML={{ __html: description.html }}></div>
        <Typography
          component="h5"
          variant="h6"
          fontWeight={600}
          alignSelf="flex-start"
        >
          مقاله های این نویسنده
        </Typography>
        <Grid
          sx={{ width: "100%" }}
          alignSelf="flex-start"
          container
          spacing={2}
        >
          {post.map((blog) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={blog.id}>
              <Card
                sx={{
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={blog.coverphoto.url}
                  alt={blog.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="h5"
                    fontWeight={600}
                    fontSize={15}
                    lineHeight={2}
                  >
                    {blog.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link style={styles} to={`/blogs/${blog.slug}`}>
                    <Button
                      sx={{ width: "100%", borderRadius: 3 }}
                      variant="outlined"
                      size="small"
                      color="primary"
                    >
                      مطالعه مقاله
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorDetail;
