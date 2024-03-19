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
        <Grid
          container
          justifyContent="left"
          lg={12}
          mb={12}
          sm={12}
          xm={12}
          sx={{ marginBottom: "20px" }}
        >
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
            sx={{ fontFamily: "'Roboto', sans-serif", color: "gray" }}
          >
            Achieve compliance, reduce fraud and build customer trust across all
            industries around the world.
          </Typography>
        </Grid>

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid spacing={0} item lg={3} sm={6} xs={12}>
            <Box sx={customBox.boxStyleOne}>
              <img
                className="images"
                src="../../../../public/images/industry/ICO.png"
                alt=""
              />
              <Typography
                variant="h6"
                textAlign="left"
                sx={{ marginTop: "10px" }}
              >
                Banking
              </Typography>
              <p style={{ marginTop: "10px" }}>
                Keep pace and remain compliant with evolving KYC regulations.
              </p>
              <p style={{ marginTop: "34px" }}>Learn more</p>
            </Box>
          </Grid>
          <Grid spacing={0} item lg={3} sm={6} xs={12}>
            <Box sx={customBox.boxStyleOne}>
              <img
                className="images"
                src="../../../../public/images/industry/ICO (1).png"
                alt=""
              />
              <Typography
                variant="h6"
                textAlign="left"
                sx={{ marginTop: "10px" }}
              >
                Cryptocurrency
              </Typography>
              <p style={{ marginTop: "10px" }}>
                Meet customer expectations for fast, secure onboarding in a
                rapidly changing industry.
              </p>
              <p style={{ marginTop: "20px" }}>Learn more</p>
            </Box>
          </Grid>
          <Grid spacing={0} item lg={3} sm={6} xs={12}>
            <Box sx={customBox.boxStyleOne}>
              <img
                className="images"
                src="../../../../public/images/industry/ICO (2).png"
                alt=""
              />
              <Typography
                variant="h6"
                textAlign="left"
                sx={{ marginTop: "10px" }}
              >
                Foreign Exchange
              </Typography>
              <p style={{ marginTop: "10px" }}>
                Achieve KYC compliance that transcends borders and helps you
                defend.
              </p>
              <p style={{ marginTop: "20px" }}>Learn more</p>
            </Box>
          </Grid>
          <Grid spacing={0} item lg={3} sm={6} xs={12}>
            <Box sx={customBox.boxStyleOne}>
              <img
                className="images"
                src="../../../../public/images/industry/ICO (3).png"
                alt=""
              />
              <Typography
                variant="h6"
                textAlign="left"
                sx={{ marginTop: "10px" }}
              >
                Marketplaces
              </Typography>
              <p style={{ marginTop: "10px" }}>
                Create a trusted ecosystem with verified vendors and customers
                to gain a competitive advantage.
              </p>
              <p style={{ marginTop: "20px" }}>Learn more</p>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "0px" }}
        >
          <Grid item lg={4} sm={8} xs={12} sx={{ mb: 4 }}>
            <Box sx={customBox.boxStyleTwo}>
              <img
                className="images"
                src="../../../../public/images/industry/Group 13410.png"
                alt=""
              />
              <Typography
                variant="h6"
                textAlign="left"
                sx={{ marginTop: "20px" }}
              >
                Online Trading
              </Typography>
              <p style={{ marginTop: "10px" }}>
                Provide a fast, smooth customer experience while meeting
                extensive compliance obligations worldwide.
              </p>
              <p style={{ marginTop: "20px" }}>Learn more</p>
            </Box>
          </Grid>
          <Grid item lg={4} sm={8} xs={12} sx={{ mb: 4 }}>
            <Box sx={customBox.boxStyleTwo}>
              <img
                className="images"
                src="../../../../public/images/industry/db.png"
                alt=""
              />
              <Typography
                variant="h6"
                textAlign="left"
                sx={{ marginTop: "10px" }}
              >
                Payment Service Providers
              </Typography>
              <p style={{ marginTop: "10px" }}>
                Deliver comprehensive identity verification that protects your
                payments business and customers.
              </p>
              <p style={{ marginTop: "20px" }}>Learn more</p>
            </Box>
          </Grid>
          <Grid item lg={4} sm={8} xs={12} sx={{ mb: 4 }}>
            <Box sx={customBox.boxStyleTwo}>
              <img
                className="images"
                src="../../../../public/images/industry/Group 13417.png"
                alt=""
              />
              <Typography
                variant="h6"
                textAlign="left"
                sx={{ marginTop: "10px" }}
              >
                Wealth Management
              </Typography>
              <p style={{ marginTop: "10px" }}>
                Keep pace and remain compliant with evolving KYC regulations.
              </p>
              <p style={{ marginTop: "20px" }}>Learn more</p>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ marginTop: "150px" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          A True Impact of Fully-Verified KYC platform
        </Typography>
        <p
          style={{
            color: "gray",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          The KYC platform revolutionizes customer verification with
          cutting-edge technology, ensuring seamless, secure, and compliant
          processes. Eliminating manual checks, it enables remote verification,
          boosts operational efficiency, and builds trust. This innovative
          platform sets a new standard, transforming businesses for a
          streamlined and secure future.
        </p>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          p={5}
          sx={{ background: "#d9f1f1", marginBottom: "100px" }}
        >
          <Grid item lg={4} md={6} sm={12} xs={12} p={5}>
            <Box>
              <Typography
                variant="h2"
                gutterBottom
                sx={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                26%
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontFamily: '"Roboto", sans-serif' }}
              >
                Pass Rate Improvement
              </Typography>
              <p style={{ color: "gray", fontFamily: '"Roboto", sans-serif' }}>
                We ensure a higher customer onboarding rate by 26% with minimum
                false positives. Our solution helps companies identify potential
                fraud while still allowing legitimate customers to be onboarded
                quickly & easily.
              </p>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12} p={5}>
            <Box>
              <Typography
                variant="h2"
                gutterBottom
                sx={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                46%
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontFamily: '"Roboto", sans-serif' }}
              >
                Audited Cost Reduction
              </Typography>
              <p style={{ color: "gray", fontFamily: '"Roboto", sans-serif' }}>
                Fully-Verified reduces the cost of each verification by an
                impressive 46%, helping businesses save money while maintaining
                the highest standards of identity verification.
              </p>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12} p={5}>
            <Box>
              <Typography
                variant="h2"
                gutterBottom
                sx={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                76%
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontFamily: '"Roboto", sans-serif' }}
              >
                Onboarding speed improvement
              </Typography>
              <p style={{ color: "gray", fontFamily: '"Roboto", sans-serif' }}>
                Whether you're a business seeking to streamline customer
                registration or an individual eager to join a platform
                hassle-free, our solution ensures a seamless and efficient
                experience.
              </p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
