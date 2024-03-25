import { Box, Container, Stack } from "@mui/system";
import PricingBanner from "../../common/PricingBanner/PricingBanner";
import { Button, Divider, Grid, IconButton, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Footer from "../../common/Footer/Footer";

const Pricing = () => {
  return (
    <div>
      <PricingBanner></PricingBanner>

      <section
        className="Simple-Easier-Section"
        style={{
          height: {
            xs: "1340px", // Height for extra small screens and above
          },
          background: "#d9f1f1",
          gap: "10px",
          opacity: "0px",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        {/* <img
          style={{ width: "90%", display: 'block', margin: 'auto', paddingTop: '110px' }}
          src="../../../../public/images/SimpleEasyer/Dotted.png"
          alt=""
        /> */}
        <Box sx={{ marginTop: "100px", paddingBottom: "100px" }}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              sx={{ marginTop: "100px" }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                Simple, easy pricing
              </Typography>
              <p style={{ textAlign: "center", marginTop: "15px" }}>
                Select a plan suited to your business/individual needs. Get a
                perfect mix of high pass rates,
              </p>
              <p style={{ textAlign: "center" }}>
                fraud protection, and global compliance.
              </p>
            </Grid>
          </Grid>
          <Container>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              mt={5}
              spacing={2}
            >
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Box className="Simple-Box">
                  <Typography variant="h6" gutterBottom>
                    Personal
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Typography variant="h2" gutterBottom mt={2}>
                      $16
                    </Typography>
                    <p style={{ marginTop: "32px" }}>/ month</p>
                  </Stack>
                  <p
                    style={{
                      fontSize: "14px",
                      marginTop: "30px",
                      color: "gray",
                    }}
                  >
                    All the basic features to boost your freelance career
                  </p>
                  <Divider
                    sx={{ marginTop: "30px", marginBottom: "30px" }}
                  ></Divider>
                  <Stack spacing={0}>
                    <Typography variant="body2" gutterBottom>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      Full Access to Account management
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      512 MB Free Storage
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      Unlimited Visitors
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      1 Agents
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      Verify Personal Information, Address, DOB
                    </Typography>
                    <Typography variant="body2" gutterBottom mb={3}>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      Publish and Share *
                    </Typography>
                    <Button
                      mt={5}
                      sx={{
                        height: "55px",
                        padding: "15px 16px 15px 16px",
                        gap: "10px",
                        borderRadius: "30px 30px 30px 30px",
                        opacity: "0px",
                        background: "#FFFFFF",
                        color: "gray",
                        border: "1px solid #037777",
                      }}
                    >
                      Get 7 Days Free Trial
                    </Button>
                  </Stack>
                </Box>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Box
                  className="Simple-Box"
                  sx={{ border: "2px solid #5EC2C2" }}
                >
                  <Typography variant="h6" gutterBottom>
                    Professional
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Typography variant="h2" gutterBottom mt={2}>
                      $49
                    </Typography>
                    <p style={{ marginTop: "32px" }}>/ month</p>
                  </Stack>
                  <p
                    style={{
                      fontSize: "14px",
                      marginTop: "30px",
                      color: "gray",
                    }}
                  >
                    All the basic features to boost your freelance career
                  </p>
                  <Divider
                    sx={{ marginTop: "30px", marginBottom: "30px" }}
                  ></Divider>
                  <Stack spacing={0}>
                    <Typography variant="body2" gutterBottom>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      Full Access to Account management
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      1024 MB Free Storage
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      Unlimited Visitors
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      1 Agents
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      Verify all documentation
                    </Typography>
                    <Typography variant="body2" gutterBottom mb={3}>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      Live Chat Support
                    </Typography>
                    <Button
                      mt={5}
                      sx={{
                        height: "55px",
                        padding: "15px 16px 15px 16px",
                        gap: "10px",
                        borderRadius: "30px 30px 30px 30px",
                        opacity: "0px",
                        background: "#5EC2C2",
                        color: "#ffffff",
                        border: "1px solid #ffffff",
                        "&:hover": {
                          background: "#4CA6A6", // Change background color on hover
                          color: "#ffffff", // Change text color on hover
                        },
                      }}
                    >
                      Get 14 Days Free Trial
                    </Button>
                  </Stack>
                </Box>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Box className="Simple-Box">
                  <Typography variant="h6" gutterBottom>
                    Customize
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Typography variant="h2" gutterBottom mt={2}>
                      $***
                    </Typography>
                    <p style={{ marginTop: "32px" }}>/ month-year</p>
                  </Stack>
                  <p
                    style={{
                      fontSize: "14px",
                      marginTop: "30px",
                      color: "gray",
                    }}
                  >
                    All the basic features to boost your freelance career
                  </p>
                  <Divider
                    sx={{ marginTop: "30px", marginBottom: "30px" }}
                  ></Divider>
                  <Stack spacing={0}>
                    <Typography variant="body2" gutterBottom>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      Full Access to Account management
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      unlimited Storage
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      Unlimited Visitors
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      Customize Agents
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      Verify all documentation
                    </Typography>
                    <Typography variant="body2" gutterBottom mb={3}>
                      <IconButton sx={{ color: "#5EC2C2", paddingLeft: "0px" }}>
                        <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                      </IconButton>
                      24/7 Support
                    </Typography>
                    <Button
                      mt={5}
                      sx={{
                        height: "55px",
                        padding: "15px 16px 15px 16px",
                        gap: "10px",
                        borderRadius: "30px 30px 30px 30px",
                        opacity: "0px",
                        background: "#FFFFFF",
                        color: "gray",
                        border: "1px solid #037777",
                      }}
                    >
                      Lets start
                    </Button>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </section>

      <Container
        sx={{
          marginTop: "150px",
          marginBottom: "100px",
          display: { xs: "none", md: "block" },
        }}
      >
        <Grid container alignItems="center" justifyContent="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box>
              <img
                style={{ width: "100%" }}
                src="../../../../public/images/no-code-intrigration/Board.png"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Grid container alignItems="center" justifyContent="center" sx={{ marginBottom: "100px", marginTop: "200px" }}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <img
            style={{ width: "100%" }}
            src="../../../../public/images/financial-services/Section.png"
            alt=""
          />
        </Grid>
      </Grid>

      <Container sx={{ marginTop: "150px", marginBottom: "100px" }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item lg={6} md={6} sm={12} xs={12} alignItems='center' justifyContent='center'>
            <Box>
              <img
                style={{ width: "100%" }}
                src="../../../../public/images/Don'tHaveAccount/Left (1).png"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} alignItems='center' justifyContent='center'>
            <Box>
              <img
                style={{ width: "100%" }}
                src="../../../../public/images/Don'tHaveAccount/Section Header (1).png"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Pricing;
