import React from "react";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";

import { GET_BLOG } from "../../graphQl/queries";
import Comments from "../comment/Comments";
import CommentForm from "../comment/CommentForm";

import { Avatar, Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { CircularProgress } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data, loading } = useQuery(GET_BLOG, {
    variables: { slug },
  });

  if (loading)
    return (
      <Box component="div" sx={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <CircularProgress />
      </Box>
    );

  const {
    post: { author, content, coverphoto, datePublished, title },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid container display="flex" gap={3} flexDirection="column" marginY={5}>
        <Grid display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            component="h2"
            variant="h4"
            fontWeight={700}
            alignSelf="flex-start"
            color="#172554"
          >
            {title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid>
          <img
            src={coverphoto.url}
            alt={slug}
            width="100%"
            style={{ borderRadius: "15px" }}
          />
        </Grid>
        <Grid display="flex" gap={2} alignItems="center">
          <Avatar src={author.avatar.url} sx={{ width: 80, height: 80 }} />
          <div
            onClick={() => navigate(`/authors/${author.slug}`)}
            style={{ cursor: "pointer" }}
          >
            <Typography component="h2" variant="h6" fontWeight={600}>
              {author.name}
            </Typography>
            <Typography fontWeight={400}>{author.field}</Typography>
          </div>
        </Grid>
        <Grid>
          <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
        </Grid>
        <Grid>
          <CommentForm slug={slug} />
        </Grid>
        <Grid>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogDetail;
