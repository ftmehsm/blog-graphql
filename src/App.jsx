import HomePage from "./pages/HomePage";
import LayOut from "./components/LayOut";
import ScrollToTop from "./helpers/ScrollTop"
import AuthorDetail from "./components/Authors/AuthorDetail";
import BlogDetail from "./components/Blog/BlogDetail"
import { Route, Routes,Navigate } from "react-router-dom";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <LayOut>
        <Container maxWidth="lg">
          <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Navigate to="./Home" />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/authors/:slug" element={<AuthorDetail />} />
        </Routes>
        </Container>
      </LayOut>
    </>
  );
}

export default App;
