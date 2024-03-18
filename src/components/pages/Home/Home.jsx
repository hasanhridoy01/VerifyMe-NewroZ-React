import "./Home.css";
import HomeBanner from "../../common/HomeBanner/HomeBanner";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { customButton } from "../../CustomTheme/HomeStyle";

const Home = () => {
  return (
    <div>
      <Container>
        <HomeBanner></HomeBanner>
      </Container>

      <Container sx={{ marginTop: "200px" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={12} mb={12} sm={12} xs={12}>
            <Box textAlign="center">
              <Typography className="eKYC" sx={{ fontSize: "32px" }}>
                How eKYC Works?
              </Typography>
              <Typography
                className="KYC-Description"
                sx={{ marginTop: "10px" }}
              >
                KYC verification operates through sophisticated technology and
                data analysis, guaranteeing customer identity authentication,
                regulatory adherence, and heightened onboarding process
                security.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            lg={6}
            mb={6}
            sm={12}
            xs={12}
            sx={{ width: "695px", height: "486.04px", gap: "20px", backgroundColor: '#D9f1f1' }}
          >
            <Box sx={{ width: "444px", height: "197px", gap: "12px" }}>
              <img src="../../../../public/images/identify/Left.png" alt="" />
            </Box>
          </Grid>
          <Grid
            item
            lg={6}
            mb={6}
            sm={12}
            xs={12}
            sx={{ width: "695px", height: "486.04px", gap: "20px", backgroundColor: '#D9f1f1' }}
          >
            <Box sx={{ width: "444px", height: "197px", gap: "12px" }}>
              <img
                src="../../../../public/images/identify/Section Header.png"
                alt=""
                className="KYC-Image-Right"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='center' alignItems='center' mt={5}>
          <Grid item lg={12} mb={12} sm={6} xs={6}>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent='center'>
              <Button sx={customButton.btnStyleOne}>Identity Verification</Button>

              <Button sx={customButton.btnStyleTwo}>Upload Additional Document</Button>

              <Button sx={customButton.btnStyleTwo}>Face Authentication</Button>

              <Button sx={customButton.btnStyleTwo}>Signature</Button>
            </Stack>
          </Grid>
        </Grid>

      </Container>

      <Container>
        
      </Container>
    </div>
  );
};

export default Home;
