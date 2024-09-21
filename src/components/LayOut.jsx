import { Container, Typography, Toolbar, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";

function LayOut({ children }) {
  return (
    <>
      <AppBar position="sticky" sx={{ background: "#172554" }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
              بلاگ برنامه نویسان
            </Typography>
            <Button href="/Home" variant="text">
              <Typography
                component="h1"
                variant="h6"
                fontWeight="600"
                flex={1}
                color="#ffffff"
              >
                صفحه اصلی
              </Typography>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
      <footer>
        <Typography
          component="p"
          variant="p"
          textAlign="center"
          bgcolor="#172554"
          color="#ffffff"
          padding={1}
        >
          پروژه ی تمرینی GraphQl دوره ریکت
        </Typography>
      </footer>
    </>
  );
}

export default LayOut;
