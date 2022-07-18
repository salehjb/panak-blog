import { useQuery } from "@apollo/client";
// graphql
import { GET_BLOGS_INFO } from "../../graphql/queries";
// MUI
import { Grid } from "@mui/material";
// components
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function Blogs() {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);
  console.log(data);
  
  if(loading) return <Loader />;
  
  if(errors) return <h4>Error...</h4>;
  
  return (
    <Grid container spacing={2}>
      {data.posts.map(post => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Blogs