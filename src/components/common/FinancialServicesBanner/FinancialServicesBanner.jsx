import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

const FinancialServicesBanner = () => {
  return (
    <Container sx={{ marginTop: "250px" }}>
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
          <p style={{ color: "#537163", fontSize: "20px" }}>Industries/</p>
          <Typography
            variant="h2"
            gutterBottom
            mt={1}
            sx={{ color: "#016363" }}
          >
            Financial Services
          </Typography>
          <p style={{ color: "#016363", fontSize: "20px", fontWeight: '700', marginTop: "20px" }}>
            Simplified and secure financial and banking solutions
          </p>
          <p style={{ color: "#016363", fontSize: "22px", fontWeight: '400', marginTop: "20px" }}>Elevate Your Business with the Expertise of Fully-Verifier</p>
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
            src="../../../../public/images/financial-services/Right.png"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default FinancialServicesBanner;
