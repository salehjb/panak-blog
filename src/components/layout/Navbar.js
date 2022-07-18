import Link from "next/link";
// MUI
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

function Navbar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <Link href="/">
            <a>
              <Typography component="h1" variant="h5" fontWeight="400">
                وبلاگ پاناک
              </Typography>
            </a>
          </Link>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
