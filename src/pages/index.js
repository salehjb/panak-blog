// MUI
import { Container, Grid, Typography } from "@mui/material";
// components
import Authors from "../components/author/Authors";
import Blogs from "../components/blog/Blogs";

function Home() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={400}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={400}>
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
