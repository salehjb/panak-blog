import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import sanitizeHtml from "sanitize-html"
// MUI
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
// graphql
import { GET_BLOG_INFO } from "../../graphql/queries";
// components
import Loader from "../../components/shared/Loader";
import CommentForm from "../../components/comment/CommentForm";
import Comments from "../../components/comment/Comments";

function BlogDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const { loading, data, errors } = useQuery(GET_BLOG_INFO, {
    variables: { slug }
  });

  if (loading) return <Loader />;

  if (errors) return <h4>Error...</h4>;

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" alignItems="center" justifyContent="space-between"> 
          <Typography component="h2" variant="h4" color="primary" fontWeight={400}>
            {data.post.title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => router.back()} />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img src={data.post.cover_photo.url} alt={data.post.slug} width="100%" height="800px" style={{ borderRadius: "15px" }} />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar src={data.post.author.avatar.url} sx={{ width: "80px", height: "80px", marginLeft: 2 }} />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={400}>{data.post.author.name}</Typography>
            <Typography component="p" variant="p" color="text.secondary">{data.post.author.field}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div dangerouslySetInnerHTML={{__html: sanitizeHtml(data.post.content.html)}}></div>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default BlogDetails