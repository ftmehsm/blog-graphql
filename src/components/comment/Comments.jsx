import { useQuery } from "@apollo/client";
import { GET_COMMENTS } from "../../graphQl/queries";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Avatar } from "@mui/material";
import { useEffect, useState } from "react";

function Comments({ slug }) {
    const[comments,setComments] = useState([]);
  const { data, loading,refetch } = useQuery(GET_COMMENTS, { variables: { slug } });

 useEffect(()=>{
    if(data){
        setComments(data.comments)
    }

    const interval = setInterval(()=>{
        refetch();
    },5000)

    return () => clearInterval(interval); // پاک‌سازی تایمر
 },[data,refetch])
  



  
  return (
    <>
      <Grid
        container
        bgcolor="#fff"
        borderRadius={4}
        padding={3}
        flexDirection="column"
        gap={2}
        sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px" }}
      >
        <Typography fontWeight={600} color="#172554">
          کامنت ها
        </Typography>
        {comments.map((item) => (
          <Grid
            key={item.id}
            padding={2}
            borderRadius={3}
            sx={{ border: "1px solid #d1d5db" }}
          >
            <Box
              component="div"
              display="flex"
              alignItems="center"
              gap={1}
              mb={2}
            >
              <Avatar>{item.name[0]}</Avatar>
              <Typography component="h5" variant="h6">
                {item.name}
              </Typography>
            </Box>

            <Typography component="p" variant="p">
              {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Comments;
