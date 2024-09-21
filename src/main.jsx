import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import theme from "./mui/theme.jsx";
import { ThemeProvider } from "@emotion/react";


import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./styles/index.css";
import "./styles/fonts.css";
import { BrowserRouter } from "react-router-dom";


const client = new ApolloClient({
  uri: import.meta.env.VITE_TEST_GRAPHQL_URI,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
