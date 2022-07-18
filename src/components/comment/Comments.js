import { useQuery } from "@apollo/client";
// graphql
import { GET_POST_COMMENTS } from "../../graphql/queries";
// MUI
import { Avatar, Box, Grid, Typography } from "@mui/material";
// components
import Loader from "../shared/Loader";

function Comments({ slug }) {
  const { loading, data, errors } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });

  if (loading) return <Loader />;

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={400} color="primary">
          کامنت ها
        </Typography>
        {data.comments.map((comment) => (
          <Grid
            item
            xs={12}
            key={comment.id}
            m={2}
            p={2}
            border="1px solid silver"
            borderRadius={1}
          >
            <Box component="div" display="flex" alignItems="center" mb={3}>
              <Avatar sx={{ marginRight: 2 }}>{comment.name[0]}</Avatar>
              <Typography component="span" variant="p" fontWeight={400}>
                {comment.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p" >{comment.text}</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Comments;
