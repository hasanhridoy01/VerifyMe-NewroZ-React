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
          spacing={2}
          mt={5}
        >
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="ProtectBox" p={3}>
              <img
                src="../../../../public/images/financial-services/ICO/ICO.png"
                alt=""
              />
              <Stack spacing={2}>
                <Typography variant="h6" gutterBottom mt={5}>
                  Compliance with evolving regulations
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Our solutions are meticulously crafted to ensure your
                  organization's compliance with KYC and AML regulations,
                  allowing you to direct your efforts towards expanding your
                  business.
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="ProtectBox" p={3}>
              <img
                src="../../../../public/images/financial-services/ICO/ICO1.png"
                alt=""
              />
              <Stack spacing={2}>
                <Typography variant="h6" gutterBottom mt={3}>
                  Stop money laundering​
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Financial institutions have faced increasing pressure to
                  enhance their anti-money laundering compliance measures due to
                  more stringent regulations. Traditionally, these organizations
                  have relied on conventional techniques to identify and thwart
                  financial illicit activities.
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="ProtectBox" p={3}>
              <img
                src="../../../../public/images/financial-services/ICO/ICO2.png"
                alt=""
              />
              <Stack spacing={2}>
                <Typography variant="h6" gutterBottom mt={3}>
                  Ease of use for both you and your customers​
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Our user-friendly interface ensures effortless interaction for
                  both you and your customers, eliminating concerns about
                  intricate procedures or technical hitches throughout the
                  process.
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="ProtectBox" p={3}>
              <img
                src="../../../../public/images/financial-services/ICO/Group 13530.png"
                alt=""
              />
              <Stack spacing={2}>
                <Typography variant="h6" gutterBottom mt={3}>
                  Eliminate human errors​​
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Implementing automated verification checks enhances the
                  customer experience, minimizes discrepancies and errors
                  associated with manual processes, and eliminates the risk of
                  human errors.
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="ProtectBox" p={3}>
              <img
                src="../../../../public/images/financial-services/ICO/ICO3.png"
                alt=""
              />
              <Stack spacing={2}>
                <Typography variant="h6" gutterBottom mt={3}>
                  Real-time verification​
                </Typography>
                <Typography variant="body2" gutterBottom>
                  In today's financial services landscape, it's increasingly
                  crucial for businesses to conduct real-time online customer
                  verification with a high level of confidence.
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box className="ProtectBox" p={3}>
              <img
                src="../../../../public/images/financial-services/ICO/ICO4.png"
                alt=""
              />
              <Stack spacing={2}>
                <Typography variant="h6" gutterBottom mt={3}>
                  Increased profit​
                </Typography>
                <Typography variant="body2" gutterBottom>
                  By contributing to the establishment of a more secure banking
                  system, you can enhance trust and safeguard your users'
                  accounts. This results in improved customer retention and
                  increased profitability for your business.
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

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
        <Box sx={{ marginTop: "100px", paddingBottom: "100px" }}>
          <Container>
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
                  Fully-Verified solutions for Financial Institutions
                </Typography>
                <p style={{ textAlign: "center", marginTop: "15px" }}>
                  Our solutions adhere to the highest security standards,
                  ensuring the protection of your clients' personal data against
                  fraudsters and hackers. We also ensure that our solutions are
                  in full compliance with all relevant laws, regulations,
                  policies, and principles. This is of utmost importance in the
                  highly regulated financial services industry.
                </p>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems="center"
              justifyContent="center"
              mt={5}
              spacing={2}
            >
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Box className="VerifiedBox" p={4}>
                  <img
                    src="../../../../public/images/financial-services/industries/ICO1.png"
                    alt=""
                  />
                  <Stack spacing={2}>
                    <Typography variant="h6" gutterBottom>
                      Verify users from all over the world in matter of seconds
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Experience quicker, safer, and more intelligent onboarding
                      through our KYC verification service. Achieve pass rate
                      enhancements of up to 35% and cost reductions of up to
                      60%. Our solution seamlessly integrates in a matter of
                      hours, effectively thwarting even the most sophisticated
                      fraud tactics.
                    </Typography>
                  </Stack>
                </Box>
              </Grid>

              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Box className="VerifiedBox" p={4}>
                  <img
                    src="../../../../public/images/financial-services/industries/ICO2.png"
                    alt=""
                  />
                  <Stack spacing={2}>
                    <Typography variant="h6" gutterBottom>
                      A banking-grade users verification
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Maintain compliance and enhance security with our
                      real-time verification service, powered by advanced
                      technology like document and facial recognition, AI, and
                      Machine Learning. Live-Verify provides adaptable
                      verification scenarios tailored to your specific
                      requirements. Wave goodbye to outdated,
                    </Typography>
                  </Stack>
                </Box>
              </Grid>

              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Box className="VerifiedBox" p={4}>
                  <img
                    src="../../../../public/images/financial-services/industries/ICO3.png"
                    alt=""
                  />
                  <Stack spacing={2}>
                    <Typography variant="h6" gutterBottom>
                      The Ultimate KYC Solution with Full Live Video Recording
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      In contrast to our competitors who utilize incomplete
                      recordings or customer-submitted photos, we provide a
                      real-time video recording of the entire procedure,
                      capturing every phase from initiation to completion. This
                      functionality allows you to observe each stage firsthand
                      and possess.
                    </Typography>
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

      <Container sx={{ marginBottom: "100px", marginTop: "200px" }}>
        <Grid container alignItems='center' justifyContent='center'>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <img style={{width: '100%'}} src="../../../../public/images/financial-services/Section.png" alt="" />
            </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FinancialServices;
