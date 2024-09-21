import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Authors from "../components/Authors/Authors";
import Blogs from "../components/Blog/Blogs";

function HomePage() {
  return (

      <Grid container spacing={2} padding=  {3}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography component="h3" variant="h6" fontWeight={600} mb={2} mt={2}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <Typography component="h3" variant="h6" fontWeight={600} mb={2} mt={2}>
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>

  );
}

export default HomePage;
