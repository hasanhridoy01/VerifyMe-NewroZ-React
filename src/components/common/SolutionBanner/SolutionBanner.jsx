import { Box, Container } from "@mui/system";
import "./SolutionBanner.css";
import { Button, Grid, Typography } from "@mui/material";

const SolutionBanner = () => {
  return (
    <Container sx={{ marginTop: "250px" }}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={5}
        sx={{ sm: { display: 'flex', flexDirection: "row-reverse",} }}
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
          <p style={{ color: "#537163", fontSize: "20px" }}>Solution/</p>
          <Typography
            variant="h3"
            gutterBottom
            mt={1}
            sx={{ color: "#016363" }}
          >
            KYC Compliance Solution
          </Typography>
          <p style={{ color: "#537163", fontSize: "20px", marginTop: "20px" }}>
            Ensure adherence to regulations, effectively handle and minimize
            compliance risks, and optimize the customer onboarding process.
            Benefit from a versatile and customizable solution that aligns with
            your specific requirements.
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
          sx={{display: { xs: "none", md: "block" },}}
        >
          <img
            style={{ width: "100%", display: "block", margin: "auto" }}
            src="../../../../public/images/Kyc-Pages-Images/banner/Right.png"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SolutionBanner;
