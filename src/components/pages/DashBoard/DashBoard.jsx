import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SinglePost from "./SinglePost";
import { useNavigate, useParams } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const drawerWidth = 250;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const [posts, setPosts] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const [openBack, setOpenBack] = React.useState(false);
  const handleCloseBackDrop = () => {
    setOpenBack(false);
  };

  const handlePostView = (id) => {
    setOpenBack(true);
    navigate(`/singlePost/${id}`);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    justifyContent: "center",
    alignItem: "center",
    margin: "auto",
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {["SuperAdmin", "Admin", "User", "Product"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#00a1a1",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            AdminDashBoard
          </Typography>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Grid container alignItem="center" justifyContent="center">
          <Grid item lg={12} md={12} xs={12}>
            <Card sx={{ Width: "100%" }}>
              <Button
                onClick={handleOpen}
                variant="contained"
                sx={{ marginTop: "20px", marginLeft: "17px" }}
              >
                Add
              </Button>
              <CardContent>
                <div style={{ height: 400, width: "100%", overflowX: "auto" }}>
                  <TableContainer component={Paper}>
                    <Table
                      sx={{ width: "90%", margin: "auto" }}
                      aria-label="simple table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell align="right">Title</TableCell>
                          <TableCell align="right">Body</TableCell>
                          <TableCell align="right">Age</TableCell>
                          <TableCell align="right">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {posts.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                              {row.id}
                            </TableCell>
                            <TableCell align="right">
                              {row.title.length > 30
                                ? row.title.substring(0, 20) + "..."
                                : row.title}
                            </TableCell>
                            <TableCell align="right">
                              {row.body.length > 30
                                ? row.body.substring(0, 20) + "..."
                                : row.body}
                            </TableCell>
                            <TableCell align="right">{row.userId}</TableCell>
                            <TableCell>
                              <Button
                                size="small"
                                variant="contained"
                                color="success"
                                sx={{ marginRight: "5px" }}
                                onClick={() => {
                                  handlePostView(row.id);
                                }}
                              >
                                View
                              </Button>
                              <Button
                                size="small"
                                variant="contained"
                                color="warning"
                                sx={{ marginRight: "5px" }}
                              >
                                Edit
                              </Button>
                              <Button
                                size="small"
                                variant="contained"
                                color="info"
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </CardContent>
            </Card>
          </Grid>

          {/* modal */}
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Add New User
                </Typography>
                <TextField
                  sx={{ marginTop: "16px", width: "100%" }}
                  id="outlined-basic"
                  label="Enter Your Name"
                  variant="outlined"
                />
                <TextField
                  sx={{ marginTop: "16px", width: "100%" }}
                  id="outlined-basic"
                  label="Enter Your Email"
                  variant="outlined"
                />
                <TextField
                  sx={{ marginTop: "16px", width: "100%" }}
                  id="outlined-basic"
                  type="password"
                  label="Enter Your Password"
                  variant="outlined"
                />
                <TextField
                  sx={{ marginTop: "16px", width: "100%" }}
                  id="outlined-basic"
                  type="password"
                  label="Enter Your Confirm Password"
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  sx={{ marginTop: "10px", backgroundColor: "#00a1a1" }}
                >
                  Add
                </Button>
              </Box>
            </Modal>
          </div>
          {/* modal */}

          {/* BackDrop */}
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openBack}
            onClick={handleCloseBackDrop}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          {/* BackDrop */}
        </Grid>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
