import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Container, Stack } from "@mui/system";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const FourThinings = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ marginTop: "150px", marginBottom: "100px" }}>
      <Grid spacing={0} container justifyContent="center" alignItems="center">
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <Stack>
            <Typography variant="h5" gutterBottom>
              4 things that makes us stand out:
            </Typography>
            <p style={{ color: "gray", width: '90%'}}>
              KYC verification operates through sophisticated technology and
              data analysis, guaranteeing customer identity authentication,
              regulatory adherence, and heightened onboarding process security.
            </p>

            <Box
              sx={{
                // background: "#D9F1F1",
                margin: "20px 0px 10px 0px",
                padding: "10px 0px 10px 0px",
                width: '100%',
              }}
            >
              <Tabs
                orientation="vertical"
                // variant="contained"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "left",
                  alignItems: "center",
                  "& .MuiTabs-indicator": {
                    display: "none",
                  },
                }}
              >
                <Tab
                  sx={{
                    margin: "5px 5px 5px 5px",
                    padding: "10px 100px 10px 19px",
                    color: "#000",
                    marginLeft: "0px",
                    marginRight: "200px",
                    width: '100%',
                    textAlign: "left",
                    border: '1px dotted gray',
                    position: "relative",
                    "& .MuiTabs-indicator": {
                      display: "none",
                    },
                    "&.Mui-selected": {
                      background: "#d9f1f1",
                      color: "#000",
                      borderRadius: "10px",
                      width: '100%'
                    },
                  }}
                  label="1. An Exceptional Customer Care"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    margin: "5px 0px 0px 0px",
                    padding: "10px 120px 10px 0px",
                    color: "#000",
                    marginLeft: "0px",
                    marginRight: "218px",
                    textAlign: "left",
                    border: '1px dotted gray',
                    width: '100%',
                    position: "relative",
                    "&.Mui-selected": {
                      background: "#d9f1f1",
                      color: "#000",
                      borderRadius: "10px",
                    },
                    "& .MuiTabs-indicator": {
                      display: "none",
                    },
                  }}
                  label="2. Startup-friendly pricing"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{
                    margin: "5px 0px 0px 0px",
                    padding: "10px 180px 10px 0px",
                    color: "#000",
                    marginLeft: "0px",
                    marginRight: "220px",
                    textAlign: "left",
                    border: '1px dotted gray',
                    width: '100%',
                    position: "relative",
                    "& .MuiTabs-indicator": {
                      display: "none",
                    },
                    "&.Mui-selected": {
                      background: "#d9f1f1",
                      color: "#000",
                      borderRadius: "10px",
                    },
                  }}
                  label="3. Highest security"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{
                    margin: "5px 0px 0px 0px",
                    padding: "10px 100px 10px 0px",
                    color: "#000",
                    marginLeft: "0px",
                    marginRight: "226px",
                    border: '1px dotted gray',
                    textAlign: "left",
                    width: '100%',
                    position: "relative",
                    "& .MuiTabs-indicator": {
                      display: "none",
                    },
                    "&.Mui-selected": {
                      background: "#d9f1f1",
                      color: "#000",
                      borderRadius: "10px",
                    },
                  }}
                  label="4. User-friendly verification"
                  {...a11yProps(3)}
                />
              </Tabs>
            </Box>
          </Stack>
        </Grid>
        <Grid item lg={7} md={7} sm={12} xs={12} sx={{ marginTop: "90px" }}>
          <Stack>
            <TabPanel value={value} index={0}>
              <Typography
                variant="h6"
                gutterBottom
                textAlign="left"
                width="80%"
              >
                Experience excellence with 4.5 Customer Satisfaction Score.​
              </Typography>
              <Typography textAlign="left">
                Our commitment to quality and compliance allows our clients to
                run their businesses confidently. With a 4.5 customer
                satisfaction score, verifications double-check process,
                30-second response time, and significant pass rate improvements,
                Fully-Verified is the trusted partner for businesses seeking
                exceptional KYC.
              </Typography>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Typography
                variant="h6"
                gutterBottom
                textAlign="left"
                width="80%"
              >
                Experience top-level KYC verification services with
                startup-friendly pricing
              </Typography>
              <Typography textAlign="left">
                With our cost-effective KYC verification services, you can
                ensure your business is protected from fraudulent
                activities.Maximize your savings while getting the best in KYC
                verification services.
              </Typography>
            </TabPanel>

            <TabPanel value={value} index={2}>
              <Typography
                variant="h6"
                gutterBottom
                textAlign="left"
                width="80%"
              >
                Safeguard your business with AI-powered fraud prevention
                technology
              </Typography>
              <Typography textAlign="left">
                VerifyMe solution ensures that all KYC processes are fully
                compliant with the latest regulations in your country, while
                preventing the most advanced fraud attempts.
              </Typography>
            </TabPanel>

            <TabPanel value={value} index={3}>
              <Typography
                variant="h6"
                gutterBottom
                textAlign="left"
                width="80%"
              >
                Streamline user onboarding with AI-powered real-time feedback
              </Typography>
              <Typography textAlign="left">
                VerifyMe provides real-time feedback during user onboarding,
                enabling you to simplify the process and verify users in less
                than 10 seconds.
              </Typography>
            </TabPanel>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FourThinings;
