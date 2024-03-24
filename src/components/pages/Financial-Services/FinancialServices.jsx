import { Box, Container, Stack } from "@mui/system";
import FinancialServicesBanner from "../../common/FinancialServicesBanner/FinancialServicesBanner";
import { Grid, Typography } from "@mui/material";
import "./FinancialServices.css";

const FinancialServices = () => {
  return (
    <div>
      <FinancialServicesBanner></FinancialServicesBanner>

      <Container sx={{ marginBottom: "100px", marginTop: "200px" }}>
        <Grid container alignItems="center" justifyContent="center" spacing={5}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography variant="h3" gutterBottom>
              How can we protect your business?
            </Typography>
            <Typography variant="body1" gutterBottom>
              The financial services sector is undergoing a significant
              transformation. In today's competitive landscape, your digital
              platforms must be both rapid and secure. Conventional
              authentication methods no longer suffice for the demands of
              contemporary banking systems or the continually evolving threat
              landscape.
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img
              style={{ width: "100%", display: { sm: 'padding: "10px"' } }}
              src="../../../../public/images/financial-services/Phone.png"
              alt=""
            />
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={5}
          mt={5}
        >
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="ProtectBox" p={3}>
              <img
                src="../../../../public/images/financial-services/ICO/ICO.png"
                alt=""
              />
              <Stack spacing={3}>
                <Typography variant="body1" gutterBottom>Compliance with evolving regulations</Typography>
                <Typography variant="body2" gutterBottom>Our solutions are meticulously crafted to ensure your organization's compliance with KYC and AML regulations, allowing you to direct your efforts towards expanding your business.</Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FinancialServices;
