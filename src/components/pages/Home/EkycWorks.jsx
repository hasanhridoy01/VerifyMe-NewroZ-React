import { Button, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { customButton } from "../../CustomTheme/HomeStyle";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const EkycWorks = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container sx={{ marginTop: "200px" }}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Stack alignItems="center">
              <TabPanel value="1">Identity Verification</TabPanel>
              <TabPanel value="2">Upload Additional Document</TabPanel>
              <TabPanel value="3">Face Authentication</TabPanel>
              <TabPanel value="4">Signature</TabPanel>
            </Stack>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item lg={3} md={6} sm={12} xs={12}>
                <Box>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      label="Identity Verification"
                      value="1"
                      sx={customButton.btnStyleOne}
                    />
                  </TabList>
                </Box>
              </Grid>

              <Grid item lg={3} md={6} sm={12} xs={12}>
                <Box>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      label="Upload Additional Document"
                      value="2"
                      sx={customButton.btnStyleTwo}
                    />
                  </TabList>
                </Box>
              </Grid>

              <Grid item lg={3} md={6} sm={12} xs={12}>
                <Box>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      label="Face Authentication"
                      value="3"
                      sx={customButton.btnStyleTwo}
                    />
                  </TabList>
                </Box>
              </Grid>

              <Grid item lg={3} md={6} sm={12} xs={12}>
                <Box>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      label="Signature"
                      value="4"
                      sx={customButton.btnStyleTwo}
                    />
                  </TabList>
                </Box>
              </Grid>
            </Grid>
          </TabContext>
        </Box>

        {/* <Grid
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
        </Grid> */}
      </Container>
    </div>
  );
};

export default EkycWorks;
