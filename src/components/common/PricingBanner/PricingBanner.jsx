import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

const PricingBanner = () => {
  return (
    <Container sx={{ marginTop: "200px", marginBottom: "200px" }}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={5}
        sx={{ sm: { display: "flex", flexDirection: "row-reverse" } }}
      >
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          alignItems="center"
          justifyContent="center"
          spacing={5}
        >
          <Typography
            variant="h2"
            gutterBottom
            mt={1}
            sx={{ color: "#016363" }}
          >
            Pricing
          </Typography>
          <p
            style={{
              color: "#016363",
              fontSize: "20px",
              fontWeight: "700",
              marginTop: "20px",
            }}
          >
            Prepaid and wholesale service agreements are available.
          </p>
          <p
            style={{
              color: "#016363",
              fontSize: "18px",
              fontWeight: "400",
              marginTop: "20px",
              lineHeight: '25px'
            }}
          >
            Contracts for wholesale services are developed specifically for
            clients who require verification services in high volumes or with
            certain configuration requirements. The description and cost of
            prepaid packages are listed below.
          </p>
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: "20px",
              background: "#016363",
              marginTop: "20px",
            }}
          >
            Let's Get Your ID
          </Button>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          alignItems="center"
          justifyContent="center"
          spacing={5}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <img
            style={{ width: "100%", display: "block", margin: "auto" }}
            src="../../../../public/images/Priceing/Right.png"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PricingBanner;
