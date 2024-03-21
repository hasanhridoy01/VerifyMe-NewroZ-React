import { Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import './Footer.css'

const Footer = () => {
  return (
    <div className="">
      <Container sx={{ marginTop: "150px", marginBottom: "100px" }}>
        <Grid container alignItems="center" justifyContent="center" mb={5}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box>
              <img
                style={{ width: "100%" }}
                src="../../../../public/images/FooterSection/contact-card.png"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center" mt={5}>
          <Box>
            <img
              style={{ width: "100%", marginTop: "50px" }}
              src="../../../../public/images/FooterSection/Menus.png"
              alt=""
            />
          </Box>
        </Grid>
      </Container>
      <div className="Footer-Bottom">
        <Stack direction="row" spacing={2}>
          <Typography variant="body1" gutterBottom>Privacy policy</Typography>
          <Typography variant="body1" gutterBottom>Sitemap</Typography>
          <Typography variant="body1" gutterBottom>Terms of Use</Typography>
        </Stack>
        <Stack>
            <Typography variant="body1" gutterBottom>© 2003-2024, All Rights Reserved</Typography>
        </Stack>
      </div>
    </div>
  );
};

export default Footer;
