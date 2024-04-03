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
import "./AdminLogin.css";
import { Form, Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../Firebase/firebase.init";

const handleSignInSubmit = (e) => {
  e.preventDefault();
  
  //get value for form.......!
  const email = e.target.email.value;
  const password = e.target.password.value;
  
  //Sign Up with a new user...................!
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}

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

                <Form onSubmit={handleSignInSubmit}>
                  <Box mb={3}>
                    <div className="inputContainer">
                      <EmailIcon className="icon" />
                      <input
                        className="inputStyle"
                        type="email"
                        name="email"
                        required
                        placeholder="Enter Your Email Address"
                      />
                    </div>
                  </Box>

                  <Box mb={3}>
                    <div className="inputContainer">
                      <HttpsIcon className="icon" />
                      <input
                        className="inputStyleTwo"
                        type="password"
                        required
                        name="password"
                        placeholder="Enter Your Password"
                      />
                    </div>
                  </Box>

                  <Box mb={3}>
                    <Button
                      variant="contained"
                      sx={{
                        width: "350px",
                        padding: "15px",
                        backgroundColor: "#00A1A1",
                      }}
                      // component={Link}
                      // to="/dashboard"
                      type="submit"
                    >
                      CONTINUE
                    </Button>
                  </Box>
                </Form>

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

      <div className="Footer-Bottom" style={{ marginTop: "50px" }}>
        <Stack direction="row" spacing={2}>
          <Typography variant="body1" gutterBottom>
            Privacy policy
          </Typography>
          <Typography variant="body1" gutterBottom>
            Sitemap
          </Typography>
          <Typography variant="body1" gutterBottom>
            Terms of Use
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="body1" gutterBottom>
            © 2003-2024, All Rights Reserved
          </Typography>
        </Stack>
      </div>
    </div>
  );
};

export default AdminLogin;
