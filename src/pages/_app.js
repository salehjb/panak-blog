import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// styles
import "../scss/globals.scss";
// components
import Layout from "../components/layout/Layout";
// MUI
import { ThemeProvider } from "@mui/material";
import theme from "../mui/theme";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const client = new ApolloClient({
  uri: process.env.GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
}

export default MyApp;
