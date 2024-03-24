import { Box, Container, Stack } from "@mui/system";
import SolutionBanner from "../../common/SolutionBanner/SolutionBanner";
import { Grid, Typography } from "@mui/material";
import identifyImage from "../../../../public/images/Kyc-Pages-Images/identify-section/Section Header.png";
import "./Solutions.css";
import Footer from "../../common/Footer/Footer";

const Solutions = () => {
  return (
    <div>
      <SolutionBanner></SolutionBanner>

      <Container sx={{ marginTop: "200px", marginBottom: "100px" }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box textAlign="left" justifyContent="left">
              <Typography variant="h4" gutterBottom>
                Identity Verification
              </Typography>
              <p style={{ color: "#537163" }}>
                Employ a secure and adaptable software seamlessly incorporable
                into your operations. Swiftly authenticate user identities and
                documents for efficient customer account initiation and risk
                management. Enhance efficiency, cut down expenses, and ensure a
                streamlined workflow.
              </p>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} mb={5}>
            <Box
              sx={{ width: "100%" }}
              component="img"
              src={identifyImage}
              mt={5}
            />
          </Grid>
        </Grid>
        <Grid
          spacing={2}
          container
          alignItems="center"
          justifyContent="center"
          mt={5}
        >
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box className="IdentityBox">
              <div>
                <img
                  style={{ background: "none" }}
                  src="../../../../public/images/Kyc-Pages-Images/identify-section/Vector 147.png"
                  alt=""
                />
              </div>
              <Stack direction="column" spacing={1}>
                <Typography variant="h6">Document Verification</Typography>
                <p style={{ color: "#537163" }}>
                  Efficiently verify and validate identification documents in
                  real-time on a large scale.
                </p>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box className="IdentityBox">
              <div>
                <img
                  style={{ background: "none" }}
                  src="../../../../public/images/Kyc-Pages-Images/identify-section/Onboarding_automation.png"
                  alt=""
                />
              </div>
              <Stack direction="column" spacing={1}>
                <Typography variant="h6">
                  KYC and Onboarding automation
                </Typography>
                <p style={{ color: "#537163" }}>
                  Reduce costs and time consumption through the automation of
                  the KYC/Identity Verification procedure.
                </p>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box className="IdentityBox">
              <div>
                <img
                  style={{ background: "none" }}
                  src="../../../../public/images/Kyc-Pages-Images/identify-section/Liveness.png"
                  alt=""
                />
              </div>
              <Stack direction="column" spacing={1}>
                <Typography variant="h6">Liveness Detection</Typography>
                <p style={{ color: "#537163" }}>
                  Liveness Detection enhances security by prompting users to
                  complete an on-camera task,
                </p>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box className="IdentityBox">
              <div>
                <img
                  style={{ background: "none" }}
                  src="../../../../public/images/Kyc-Pages-Images/identify-section/img/Liveness.png"
                  alt=""
                />
              </div>
              <Stack direction="column" spacing={1}>
                <Typography variant="h6">Face Matching</Typography>
                <p style={{ color: "#537163" }}>
                  Authenticate identity by comparing the photo on the ID
                  document with a selfie to ensure their correspondence to the
                  same individual.
                </p>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ marginTop: "200px", marginBottom: "100px" }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h4" gutterBottom>
              KYC service
            </Typography>
            <p style={{ color: "#537163" }}>
              An all-encompassing solution that aids in risk management,
              conducts Customer Due Diligence, and adheres to the highest
              security protocols.
            </p>
          </Grid>
        </Grid>
        <Box sx={{ background: "#D8F4F5" }} mt={5}>
          <Grid
            spacing={5}
            mt={2}
            container
            alignItems="center"
            justifyContent="center"
            p={5}
          >
            <Grid item lg={6} md={6} sm={12} xs={12} p={5}>
              <Stack>
                <Typography variant="h5" gutterBottom>
                  Global Coverage
                </Typography>
                <p style={{ color: "#537163" }}>
                  Support for over 100+ document types and coverage of more than
                  30 countries.
                </p>
              </Stack>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12} p={5}>
              <Stack>
                <Typography variant="h5" gutterBottom>
                  Compliance with regulatory requirements
                </Typography>
                <p style={{ color: "#537163" }}>
                  Adhere to worldwide regulatory demands (FATF, FINMA, FCA,
                  CySEC, MAS, FSA) for compliance.
                </p>
              </Stack>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12} p={5}>
              <Stack>
                <Typography variant="h5" gutterBottom>
                  Screening
                </Typography>
                <p style={{ color: "#537163" }}>
                  Monitoring of high-risk clients to ensure thorough customer
                  due diligence.
                </p>
              </Stack>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12} p={5}>
              <Stack>
                <Typography variant="h5" gutterBottom>
                  Process automation
                </Typography>
                <p style={{ color: "#537163" }}>
                  Automate the process to alleviate the workload on your
                  compliance team.
                </p>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container sx={{ marginTop: "100px", marginBottom: "100px", display: { xs: "none", md: "block" } }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box>
              <img
                style={{ width: "100%" }}
                src="../../../../public/images/Kyc-Pages-Images/Section.png"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ marginTop: "100px", marginBottom: "100px" }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h4" gutterBottom>
              Seamless integration with your business ecosystem
            </Typography>
            <p style={{ color: "#537163" }}>
              Various setup and integration choices available to align with your
              UI/UX requirements:
            </p>
          </Grid>
        </Grid>
        <Grid
          spacing={2}
          container
          alignItems="center"
          justifyContent="center"
          mt={3}
        >
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="SeamlessBox">
              <img
                src="../../../../public/images/Kyc-Pages-Images/Seamless/head.png"
                alt=""
              />
              <Stack>
                <Typography variant="h5" gutterBottom>
                  Android SDKs
                </Typography>
                <p style={{ color: "#537163", fontSize: "13px" }}>
                  Tailor-made iOS and Android SDKs developed using native
                  technology for a smooth onboarding process.
                </p>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="SeamlessBox">
              <img
                src="../../../../public/images/Kyc-Pages-Images/Seamless/head5.png"
                alt=""
              />
              <Stack>
                <Typography variant="h5" gutterBottom>
                  IOS APP
                </Typography>
                <p style={{ color: "#537163", fontSize: "13px" }}>
                  Pre-built solutions for effortless automated onboarding, quick
                  setup, and simple configuration.
                </p>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="SeamlessBox">
              <img
                src="../../../../public/images/Kyc-Pages-Images/Seamless/head4.png"
                alt=""
              />
              <Stack>
                <Typography variant="h5" gutterBottom>
                  Web Support
                </Typography>
                <p style={{ color: "#537163", fontSize: "13px" }}>
                  Easily integrate our KYC and customer verification solutions
                  into your system, gather necessary data & access results
                  through API.
                </p>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="SeamlessBox">
              <img
                src="../../../../public/images/Kyc-Pages-Images/Seamless/head3.png"
                alt=""
              />
              <Stack>
                <Typography variant="body1" gutterBottom>
                  Cloud-based verification
                </Typography>
                <p style={{ color: "#537163", fontSize: "13px" }}>
                  Instantly receive verification outcomes by sending a link to
                  customers, accessible either in your Admin Panel or via
                  webhook.
                </p>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="SeamlessBox">
              <img
                src="../../../../public/images/Kyc-Pages-Images/Seamless/head.png"
                alt=""
              />
              <Stack>
                <Typography variant="h5" gutterBottom>
                  Fast Setup
                </Typography>
                <p style={{ color: "#537163", fontSize: "13px" }}>
                  Ready-to-use automated onboarding solutions with swift setup
                  and user-friendly configuration.
                </p>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="SeamlessBoxDifferent">
              <Stack spacing={1} p={5}>
                <Typography variant="h6">
                  Are you ready to get started?
                </Typography>
                <p>Get started</p>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

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

export default Solutions;
