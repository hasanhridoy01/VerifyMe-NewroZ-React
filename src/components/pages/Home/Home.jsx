import "./Home.css";
import HomeBanner from "../../common/HomeBanner/HomeBanner";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { customBox, customButton } from "../../CustomTheme/HomeStyle";
import EkycWorks from "./EkycWorks";
import FourThinings from "./FourThinings";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  return (
    <div>
      <Container>
        <HomeBanner></HomeBanner>
      </Container>

      <Container sx={{ marginTop: "220px", marginBottom: "0px" }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
              How eKYC Works?
            </Typography>
            <p style={{ textAlign: "center", width: "70%", margin: "auto" }}>
              KYC verification operates through sophisticated technology and
              data analysis, guaranteeing customer identity authentication,
              regulatory adherence, and heightened onboarding process security.
            </p>
          </Grid>
        </Grid>
      </Container>
      <EkycWorks></EkycWorks>

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
              <Typography
                variant="subtitle2"
                display="block"
                gutterBottom
                sx={{ marginTop: "40px" }}
              >
                Learn more
                <IconButton size="small">
                  <ArrowForwardIcon />
                </IconButton>
              </Typography>
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
              <Typography
                variant="subtitle2"
                display="block"
                gutterBottom
                sx={{ marginTop: "20px" }}
              >
                Learn more
                <IconButton size="small">
                  <ArrowForwardIcon />
                </IconButton>
              </Typography>
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
              <Typography
                variant="subtitle2"
                display="block"
                gutterBottom
                sx={{ marginTop: "20px" }}
              >
                Learn more
                <IconButton size="small">
                  <ArrowForwardIcon />
                </IconButton>
              </Typography>
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
              <Typography
                variant="subtitle2"
                display="block"
                gutterBottom
                sx={{ marginTop: "20px" }}
              >
                Learn more
                <IconButton size="small">
                  <ArrowForwardIcon />
                </IconButton>
              </Typography>
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
              <Typography
                variant="subtitle2"
                display="block"
                gutterBottom
                sx={{ marginTop: "20px" }}
              >
                Learn more
                <IconButton size="small">
                  <ArrowForwardIcon />
                </IconButton>
              </Typography>
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
              <Typography
                variant="subtitle2"
                display="block"
                gutterBottom
                sx={{ marginTop: "20px" }}
              >
                Learn more
                <IconButton size="small">
                  <ArrowForwardIcon />
                </IconButton>
              </Typography>
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
              <Typography
                variant="subtitle2"
                display="block"
                gutterBottom
                sx={{ marginTop: "20px" }}
              >
                Learn more
                <IconButton size="small">
                  <ArrowForwardIcon />
                </IconButton>
              </Typography>
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
                fraud while still allowing legitimate.
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

      <FourThinings></FourThinings>

      <Container sx={{ marginTop: "200px", marginBottom: "100px" }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack>
              <Typography variant="h5" gutterBottom>
                Focused on your business growth
              </Typography>
              <p style={{ color: "gray" }}>
                KYC verification operates through sophisticated technology and
                data analysis, guaranteeing customer identity authentication,
                regulatory adherence, and heightened onboarding process
                security.
              </p>
              <Box className="box" sx={{ marginTop: "10px" }}>
                1. Conversion optimised
              </Box>
              <Box className="box">
                2. Compliance with the strictest regulations
              </Box>
              <Box className="box">3. Fully customizable</Box>
              <Box className="box">4. AI-powered fraud prevention</Box>
            </Stack>
            <Stack mt={5}>
              <Typography variant="h5" gutterBottom>
                Focused on your customers satisfaction
              </Typography>
              <p style={{ color: "gray" }}>
                KYC verification operates through sophisticated technology and
                data analysis, guaranteeing customer identity authentication,
                regulatory adherence, and heightened onboarding process
                security.
              </p>
              <Box className="box" sx={{ marginTop: "10px" }}>
                1. Seamless onboarding experience
              </Box>
              <Box className="box">
                2. Availible anytime, anywhere on all devices
              </Box>
              <Box className="box">3. AI-guided verification process</Box>
              <Box className="box">4. Verification in a matter of secods</Box>
            </Stack>
          </Grid>
          <Grid
            sx={{ display: { xs: "none", md: "block" } }}
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
          >
            <Box>
              <img
                style={{ width: "100%" }}
                src="../../../../public/images/focused/Phone.png"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ marginTop: "200px", marginBottom: "100px" }}>
        <Grid spacing={2} container justifyContent="center" alignItems="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Stack>
              <Typography variant="h4" gutterBottom>
                OUR PRODUCTS
              </Typography>
              <p style={{ color: "gray" }}>
                VerifyMe KYC Verification application is a digital tool designed
                to streamline and enhance the customer onboarding process for
                businesses and financial institutions. KYC is a critical
                procedure mandated by regulatory authorities to verify the
                identity and assess the risk associated with potential customers
                or clients before engaging in any business relationship with
                them.
              </p>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="Pbox">
              <div className="pTop-Content">
                <img
                  src="../../../../public/images/OurProduct/Ico.png"
                  alt=""
                />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    marginLeft: "20px",
                    marginBottom: "0px",
                    fontWeight: "700",
                  }}
                >
                  Auto-Verify
                </Typography>
              </div>
              <Stack spacing={3} mt={3} p={2}>
                <Typography variant="h6" gutterBottom>
                  Automatically verify users from all over the world in matter
                  of seconds:
                </Typography>
                <p>
                  Verify identities, conduct risk assessments, and perform due
                  diligence checks in just 10 seconds, while reducing
                  operational expenses by up to 46%.
                </p>
                <Typography variant="subtitle2" display="block" gutterBottom>
                  Learn more
                  <IconButton size="small">
                    <ArrowForwardIcon />
                  </IconButton>
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="Pbox">
              <div className="pTop-Content">
                <img
                  src="../../../../public/images/OurProduct/Ico (1).png"
                  alt=""
                />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    marginLeft: "20px",
                    marginBottom: "0px",
                    fontWeight: "700",
                  }}
                >
                  Self-Verify
                </Typography>
              </div>
              <Stack spacing={3} mt={3} p={2}>
                <Typography variant="h6" gutterBottom>
                  The Ultimate KYC Solution with Full Live Video Recording:
                </Typography>
                <p>
                  Eliminate risk of cybercrimes, financial crimes and money
                  laundering with a Fully-Verified identity verification tools.
                  ​
                </p>
                <Typography variant="subtitle2" display="block" gutterBottom>
                  Learn more
                  <IconButton size="small">
                    <ArrowForwardIcon />
                  </IconButton>
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="Pbox">
              <div className="pTop-Content">
                <img
                  src="../../../../public/images/OurProduct/Ico (2).png"
                  alt=""
                />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    marginLeft: "20px",
                    marginBottom: "0px",
                    fontWeight: "700",
                  }}
                >
                  Live-Verify
                </Typography>
              </div>
              <Stack spacing={3} mt={3} p={2}>
                <Typography variant="h6" gutterBottom>
                  A banking-grade verification with same legal as in person KYC:
                </Typography>
                <p>
                  Live-Verify ensures regulatory compliance, robust
                  banking-grade security, and seamless onboarding with
                  protection against cyber threats and fraud.​
                </p>
                <Typography variant="subtitle2" display="block" gutterBottom>
                  Learn more
                  <IconButton size="small">
                    <ArrowForwardIcon />
                  </IconButton>
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

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

      <Container sx={{ marginTop: "150px", marginBottom: "100px" }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h4" gutterBottom>
              OUR SERVICES
            </Typography>
            <p>
              VerifyMe KYC Verification application is a digital tool designed
              to streamline and enhance the customer onboarding process for
              businesses and financial institutions. KYC is a critical procedure
              mandated by regulatory authorities to verify the identity and
              assess the risk associated with potential customers or clients
              before engaging in any business relationship with them.
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="servicesBox">
              <img
                src="../../../../public/images/OurServices/head.png"
                alt=""
              />
              <Stack spacing={2} mt={3} pr={2}>
                <Typography variant="h6">Age Verification</Typography>
                <p style={{ color: "gray" }}>
                  Prevent underage access to restricted resources and protect
                  your company from non-compliance fines.
                </p>
                <Typography variant="subtitle2" display="block" gutterBottom>
                  Learn more
                  <IconButton size="small">
                    <ArrowForwardIcon />
                  </IconButton>
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="servicesBox">
              <img
                src="../../../../public/images/OurServices/head (1).png"
                alt=""
              />
              <Stack spacing={2} mt={3} pr={2}>
                <Typography variant="h6">KYC Compliance​</Typography>
                <p style={{ color: "gray" }}>
                  Collect data customers. Check authenticity of the documents.
                  Asses risk and avoid financial & reputation loses.
                </p>
                <Typography variant="subtitle2" display="block" gutterBottom>
                  Learn more
                  <IconButton size="small">
                    <ArrowForwardIcon />
                  </IconButton>
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="servicesBox">
              <img
                src="../../../../public/images/OurServices/head (2).png"
                alt=""
              />
              <Stack spacing={2} mt={3} pr={2}>
                <Typography variant="h6">Proof Of Address​</Typography>
                <p style={{ color: "gray" }}>
                  Confirm that the provided address for the verification process
                  is associated with a particular location for the user. ​
                </p>
                <Typography variant="subtitle2" display="block" gutterBottom>
                  Learn more
                  <IconButton size="small">
                    <ArrowForwardIcon />
                  </IconButton>
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="servicesBox">
              <img
                src="../../../../public/images/OurServices/head (3).png"
                alt=""
              />
              <Stack spacing={2} mt={3} pr={2}>
                <Typography variant="h6">Fraud Prevention​​</Typography>
                <p style={{ color: "gray" }}>
                  Determine whether your potential customer is being truthful
                  regarding their identity to eliminate the risk of cybercrime.
                  ​
                </p>
                <Typography variant="subtitle2" display="block" gutterBottom>
                  Learn more
                  <IconButton size="small">
                    <ArrowForwardIcon />
                  </IconButton>
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="servicesBox">
              <img
                src="../../../../public/images/OurServices/head (4).png"
                alt=""
              />
              <Stack spacing={2} mt={3} pr={2}>
                <Typography variant="h6">ID Verification​​</Typography>
                <p style={{ color: "gray" }}>
                  Know if your prospective customer is telling the truth about
                  who they say they are, before granting access to your service.
                  ​​
                </p>
                <Typography variant="subtitle2" display="block" gutterBottom>
                  Learn more
                  <IconButton size="small">
                    <ArrowForwardIcon />
                  </IconButton>
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="servicesBox">
              <img
                src="../../../../public/images/OurServices/head (5).png"
                alt=""
              />
              <Stack spacing={2} mt={3} pr={2}>
                <Typography variant="h6">Identity Verification​</Typography>
                <p style={{ color: "gray" }}>
                  Eliminated risk of cybercrimes, financial crimes and money
                  laundering with a Fully-Verified identity verification tools.
                  ​
                </p>
                <Typography variant="subtitle2" display="block" gutterBottom>
                  Learn more
                  <IconButton size="small">
                    <ArrowForwardIcon />
                  </IconButton>
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <section className="Simple-Easier-Section">
        <img
          style={{ width: "90%", display: 'block', margin: 'auto', paddingTop: '110px' }}
          src="../../../../public/images/SimpleEasyer/Dotted.png"
          alt=""
        />
      </section>
    </div>
  );
};

export default Home;
