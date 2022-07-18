import { Fragment } from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
// MUI
import { Avatar, Divider, Grid, Typography } from "@mui/material";
// graphql
import { GET_AUTHORS_INFO } from "../../graphql/queries";
// components
import Loader from "../shared/Loader";

function Authors() {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader />;

  if (errors) return <h4>Error...</h4>;

  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {data.authors.map((author, index) => (
        <Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <Link href={`/authors/${author.slug}`}>
              <a style={{ display: "flex", alignItems: "center" }}>
                <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
                <Typography component="p" variant="p" color="text.secondary">
                  {author.name}
                </Typography>
              </a>
            </Link>
          </Grid>
          {index !== data.authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
