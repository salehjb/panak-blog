import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import sanitizeHtml from "sanitize-html";
// graphql
import { GET_AUTHOR_INFO } from "../../graphql/queries";
// MUI
import { Avatar, Container, Grid, Typography } from "@mui/material";
// components
import CardEL from "../../components/shared/CardEL";
import Loader from "../../components/shared/Loader";

function AuthorDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  console.log(data);


  if (loading) return <Loader />;

  if (errors) return <h4>Error...</h4>;

  return (
    <Container maxWidth="xl">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            src={data.author.avatar.url}
            sx={{ width: 250, height: 250 }}
          />
          <Typography component="h3" variant="h5" fontWeight={400} mt={4}>
            {data.author.name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {data.author.field}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={8}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.author.description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={8}>
          <Typography component="h3" variant="h5" fontWeight={400}>
            مقالات {data.author.name}
          </Typography>
          <Grid container spacing={2} mt={6}>
            {data.author.post.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL
                  title={post.title}
                  slug={post.slug}
                  cover_photo={post.cover_photo}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorDetails;
