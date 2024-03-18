import "./Home.css";
import HomeBanner from "../../common/HomeBanner/HomeBanner";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { customBox, customButton } from "../../CustomTheme/HomeStyle";

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
            sx={{
              width: "695px",
              height: "486.04px",
              gap: "20px",
              backgroundColor: "#D9f1f1",
            }}
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
            sx={{
              width: "695px",
              height: "486.04px",
              gap: "20px",
              backgroundColor: "#D9f1f1",
            }}
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

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt={5}
        >
          {/* <Grid item lg={3} sm={6} xs={12} sx={{ mb: 4}}>
            <Button sx={customButton.btnStyleOne}>Identity Verification</Button>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} sx={{ mb: 4 }}>
            <Button sx={customButton.btnStyleTwo}>
              Upload Additional Document
            </Button>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} sx={{ mb: 4 }}>
            <Button sx={customButton.btnStyleTwo}>Face Authentication</Button>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} sx={{ mb: 4 }}>
            <Button sx={customButton.btnStyleTwo}>Signature</Button>
          </Grid> */}
          <Grid item lg={12} mb={6} sm={12}>
            <Stack direction="row" spacing={2}>
              <Button sx={customButton.btnStyleOne}>
                Identity Verification
              </Button>
              <Button sx={customButton.btnStyleTwo}>
                Upload Additional Document
              </Button>

              <Button sx={customButton.btnStyleTwo}>Face Authentication</Button>

              <Button sx={customButton.btnStyleTwo}>Signature</Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ marginTop: "100px" }}>
        <Grid container justifyContent="left" lg={12} mb={12} sm={12} xm={12} sx={{marginBottom: '20px'}}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            Any Industry, Anywhere
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: "'Roboto', sans-serif", color: 'gray' }}
          >
            Achieve compliance, reduce fraud and build customer trust across all
            industries around the world.
          </Typography>
        </Grid>

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item lg={3} sm={6} xs={12} sx={{ mb: 4 }}>
            <Box sx={customBox.boxStyleOne}>
              {/* <img className="images" src="../../../../public/images/industry/ICO.png" alt="" />
              <Typography variant="h6" textAlign='left'>Banking</Typography>
              <p>Keep pace and remain compliant with evolving KYC regulations.</p>
              <p>Learn more</p> */}
            </Box>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} sx={{ mb: 4 }}>
            <Box sx={customBox.boxStyleOne}></Box>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} sx={{ mb: 4 }}>
            <Box sx={customBox.boxStyleOne}></Box>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} sx={{ mb: 4 }}>
            <Box sx={customBox.boxStyleOne}></Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{marginTop: '0px'}}>
          <Grid item lg={4} sm={8} xs={12} sx={{ mb: 4 }}>
            <Box sx={customBox.boxStyleTwo}></Box>
          </Grid>
          <Grid item lg={4} sm={8} xs={12} sx={{ mb: 4 }}>
            <Box sx={customBox.boxStyleTwo}></Box>
          </Grid>
          <Grid item lg={4} sm={8} xs={12} sx={{ mb: 4 }}>
            <Box sx={customBox.boxStyleTwo}></Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
