import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, Stack, ThemeProvider } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";

const AdminLogin = () => {
  return (
    <div>
      <Container sx={{ marginTop: "130px" }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            alignItems="center"
            justifyContent="center"
          >
            <Card
              alignItems="center"
              justifyContent="center"
              sx={{
                display: "flex",
                paddingTop: "40px",
                paddingBottom: "40px",
              }}
            >
              <CardContent sx={{ margin: "auto", textAlign: "center" }}>
                <img src="../../../../public/images/header/Logo.png" alt="" />
                <Typography variant="h5" gutterBottom mt={3} mb={5}>
                  Sign-In to continue
                </Typography>
                <Box mb={2}>
                  <TextField
                    required
                    id="standard-required"
                    label="Email"
                    sx={{ width: "350px" }}
                    InputProps={{
                      startAdornment: (
                        <Box sx={{ marginRight: 1 }}>
                          <EmailIcon />
                        </Box>
                      ),
                    }}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    sx={{ width: "350px" }}
                    InputProps={{
                      startAdornment: (
                        <Box sx={{ marginRight: 1 }}>
                          <HttpsIcon />
                        </Box>
                      ),
                    }}
                  />
                </Box>
                <Box mb={2}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "350px",
                      padding: "15px",
                      backgroundColor: "#00A1A1",
                    }}
                  >
                    CONTINUE
                  </Button>
                </Box>
                <Box mb={5}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Remember me"
                    />
                  </FormGroup>
                </Box>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <div className="Footer-Bottom" style={{marginTop: '50px'}}>
        <Stack direction="row" spacing={2}>
          <Typography variant="body1" gutterBottom>Privacy policy</Typography>
          <Typography variant="body1" gutterBottom>Sitemap</Typography>
          <Typography variant="body1" gutterBottom>Terms of Use</Typography>
        </Stack>
        <Stack>
            <Typography variant="body1" gutterBottom>© 2003-2024, All Rights Reserved</Typography>
        </Stack>
      </div>
    </div>
  );
};

export default AdminLogin;
