import {
  Card,
  Avatar,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function CardEl({ title, slug, coverphoto, author }) {

  const styles = {
    width:"100%"
  };
  
  return (
    <>
      <Card
        sx={{
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ marginLeft: "5px", textAlign: "center" }}>
              <img
                src={author.avatar.url}
                alt={title}
                width="50px"
                height="50px"
              />
            </Avatar>
          }
          title={author.name}
          titleTypographyProps={{ sx: { fontWeight: 600 } }}
        />
        <CardMedia
          component="img"
          height="140"
          image={coverphoto.url}
          alt={title}
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
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Link style={styles} to={`/blogs/${slug}`}>
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
    </>
  );
}

export default CardEl;
