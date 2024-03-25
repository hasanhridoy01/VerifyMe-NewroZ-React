import { Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import "./Contact.css";
import Footer from "../../common/Footer/Footer";

const Contact = () => {
  return (
    <div>
      <Container sx={{ marginTop: "300px", marginBottom: "100px" }}>
        <Grid spacing={2} container alignItems="center" justifyContent="center">
          <Grid
            sx={{ marginBottom: "50px" }}
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h3" gutterBottom textAlign="center">
              Get in touch
            </Typography>
            <Typography variant="body1" gutterBottom textAlign="center">
              Let Checkin.com solve the toughest challenges related to
              identifying and converting customers globally.
            </Typography>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} mb={5}>
            <Box
              className="ContactBox"
              textAlign="center"
              justifyContent="center"
              alignItems="center"
            >
              <img src="../../../../public/images/ContactUs/Ico.png" alt="" />
              <Stack mt={2}>
                <Typography variant="h4" gutterBottom>
                  Ask a question
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Leave your email and a question. We will contact you soon!
                </Typography>
                <button className="contactBtn">Send message</button>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} mb={5}>
            <Box
              className="ContactBox"
              textAlign="center"
              justifyContent="center"
              alignItems="center"
            >
              <img src="../../../../public/images/ContactUs/head.png" alt="" />
              <Stack mt={2}>
                <Typography variant="h4" gutterBottom>
                  Sales
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Lets connect and have a feedback your messenger.
                </Typography>
                <button className="contactBtn">sales@verifyme.global</button>
              </Stack>
            </Box>
          </Grid>

          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              width="60%"
              variant="body2"
              gutterBottom
              textAlign="center"
              alignItems="center"
              justifyContent="center"
              mt={5}
              sx={{ margin: "auto", marginTop: "20px" }}
            >
              screening trial feature activation is subject for approval from
              VerifyMe representatives. From price applies for automated checks
              only. All prices are displayed exclusive of VAT Tax.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <section
        className="Simple-Easier-Section"
        style={{
          height: {
            xs: "1340px",
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
                variant="h4"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                Anything else on your mind?
              </Typography>
              <p style={{ textAlign: "center" }}>Feel free to reach out</p>
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
                <Box className="ContactInfoBox">
                  <img
                    src="../../../../public/images/ContactUs/Ico (1).png"
                    alt=""
                  />
                  <Typography variant="h6" gutterBottom>
                    Conversion increase guarantee
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Box className="ContactInfoBox">
                  <img
                    src="../../../../public/images/ContactUs/head (000).png"
                    alt=""
                  />
                  <Typography variant="h6" gutterBottom>
                    All KYC solutions in one simple integration
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Box className="ContactInfoBox">
                  <img
                    src="../../../../public/images/ContactUs/head (1).png"
                    alt=""
                  />
                  <Typography variant="h6" gutterBottom>
                    Fast & reliable identity verification
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </section>

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

export default Contact;
