import { Box, Container, Grid, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ p: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We want to help those who give their whole heart to their club,
              Thousands of clubs have joined us on this mission, and together,
              {"we're"} changing the way clubs work, once and for all
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Somewhere in the best country in the world Luxembourg
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@clubee.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +352 691 50 50 52
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Curious to learn more? {"Don't"} hesitate to reach out to us,
              {"we'll"} gladly answer your questions or show you around:
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://clubee.com/">
              Clubee
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
