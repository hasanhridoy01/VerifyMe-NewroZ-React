import { Box, Button, Grid, Typography } from "@mui/material";
import "./HomeBanner.css";
import BannerImage from "../../../../public/images/Banner/kyc-logo-3 1.png";

const HomeBanner = () => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={12} sm={12} container justifyContent="center" sx={{paddingTop: "160px"}}>
        <Box component="img" src={BannerImage} />
        <Typography variant="h4" color="inherit" sx={{textAlign: "center"}}>
          IDENTITY VERIFICATION TO ACCELERATE TRUSTWORLDWIDE
        </Typography>
        <Typography variant="h6" sx={{fontSize: '15px', textAlign: "center", marginTop: '10px',}}>
          Experience KYC - an advanced e-KYC solution for seamless customer
          verification. Utilizing cutting-edge tech, ensure compliance and
          elevate onboarding.
        </Typography>
        <Button variant="contained" size="large" sx={{borderRadius: "20px", background: "#016363", textAlign: "center", marginTop: '20px', padding: '10px 20px 10px 20px'}}>
          Let's Get Your ID
        </Button>
      </Grid>
    </Grid>
  );
};

export default HomeBanner;
