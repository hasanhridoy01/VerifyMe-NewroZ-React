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
import { Form, useNavigate, useParams } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ReactPaginate from "react-paginate";
import { LoadingButton } from "@mui/lab";
import axios from "axios";

const drawerWidth = 250;

const postsPerPage = 5;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [viewPost, setViewPost] = React.useState({});

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
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handlePostView = (id) => {
    setOpenBack(true);
    navigate(`/singlePost/${id}`);
  };

  const [pageNumber, setPageNumber] = React.useState(0);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const pageCount = Math.ceil(posts.length / postsPerPage);
  const displayedPosts = posts.slice(
    pageNumber * postsPerPage,
    (pageNumber + 1) * postsPerPage
  );

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

  //add post modal................!
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //update post modal................!
  const [Update, setUpdate] = React.useState(false);
  const handleOpenUpdate = () => setUpdate(true);
  const handleCloseUpdate = () => setUpdate(false);
  const [loading, setLoading] = React.useState(false);

  //Handle add post Form Submit..................!
  const handleForm = (e) => {
    //validation with form...............!
    if (!e.target.title.value) {
      alert("Please fill in the title field...!");
    } else if (!e.target.body.value) {
      alert("Please fill in the body field...!");
    } else if (!e.target.id.value) {
      alert("Please fill in the id field...!");
    }
    //get value with form...............!
    const title = e.target.title.value;
    const body = e.target.body.value;
    const id = e.target.id.value;

    //user data....................!
    const post = [title, body, id];

    try {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", post, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => {
          console.log(response.data);
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setOpen(false);
            setOpenBack(true);
          }, 2000);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //Handle Update Post find by Id...............!
  const handleUpdatePost = (id) => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (!response.status === 200) {
          throw new Error("Failed to fetch post");
        }
        const singlePost = response.data;
        setViewPost(singlePost);
        console.log(singlePost);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  };

  const [viewUpdatePost, setViewUpdatePost] = React.useState({
    title: "",
    body: "",
    id: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setViewUpdatePost({ ...viewUpdatePost, [name]: value });
  };

  //Handle Update a Post..............!
  const handleUpdateForm = async (e) => {
    console.log("Updated post:", viewUpdatePost);
    try {
      const response = await axios.patch(
        `https://jsonplaceholder.typicode.com/posts/${viewUpdatePost.id}`,
        viewUpdatePost,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Post updated successfully");
      } else {
        console.error("Failed to update post");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
    setUpdate(false);
  };

  //Handle Post Deleted..............!
  const handlePostDelete = async (id) => {
    try {
      if (id) {
        alert("Are you sure you want to delete this post?");
      }

      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      if (response.status === 200) {
        console.log("Post deleted successfully");
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
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

  const [openBack, setOpenBack] = React.useState(false);

  const handleCloseBackDrop = () => {
    setOpenBack(false);
  };

  React.useEffect(() => {
    let timer;
    if (openBack) {
      timer = setTimeout(() => {
        setOpenBack(false);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [openBack]);

  const handleOpenBackDrop = () => {};

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
                          <TableCell align="center">Title</TableCell>
                          <TableCell align="center">Body</TableCell>
                          <TableCell align="center">Age</TableCell>
                          <TableCell align="center">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {posts.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                              {row.id}
                            </TableCell>
                            <TableCell align="center">
                              {row.title.length > 30
                                ? row.title.substring(0, 20) + "..."
                                : row.title}
                            </TableCell>
                            <TableCell align="center">
                              {row.body.length > 30
                                ? row.body.substring(0, 20) + "..."
                                : row.body}
                            </TableCell>
                            <TableCell align="center">{row.userId}</TableCell>
                            <TableCell align="center">
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
                                onClick={() => {
                                  handleOpenUpdate(), handleUpdatePost(row.id);
                                }}
                              >
                                Edit
                              </Button>
                              <Button
                                onClick={() => {
                                  handlePostDelete(row.id);
                                }}
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
                  <ReactPaginate
                    pageCount={pageCount}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>

          {/* add post modal */}
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Add New Post
                </Typography>
                <Form onSubmit={handleForm}>
                  <TextField
                    sx={{ marginTop: "16px", width: "100%" }}
                    id="outlined-basic"
                    label="Enter Your Name"
                    name="title"
                    variant="outlined"
                  />
                  <TextField
                    sx={{ marginTop: "16px", width: "100%" }}
                    id="outlined-basic"
                    label="Enter Your body"
                    name="body"
                    variant="outlined"
                  />
                  <TextField
                    sx={{ marginTop: "16px", width: "100%" }}
                    id="outlined-basic"
                    type="number"
                    name="id"
                    label="Enter Your ID"
                    variant="outlined"
                  />
                  <LoadingButton
                    onClick={handleOpenBackDrop}
                    variant="contained"
                    type="submit"
                    sx={{ marginTop: "10px", backgroundColor: "#00a1a1" }}
                    loading={loading}
                    loadingIndicator={<CircularProgress size={24} />}
                  >
                    Add
                  </LoadingButton>
                </Form>
              </Box>
            </Modal>
          </div>
          {/* add post modal */}

          {/* update post modal */}
          <div>
            <Modal
              open={Update}
              onClose={handleCloseUpdate}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Update A Post
                </Typography>
                <Form onSubmit={handleUpdateForm}>
                  <TextField
                    sx={{ marginTop: "16px", width: "100%" }}
                    id="outlined-basic"
                    label=""
                    name="title"
                    variant="outlined"
                    value={viewUpdatePost.title}
                    onChange={handleChange}
                  />
                  <TextField
                    sx={{ marginTop: "16px", width: "100%" }}
                    id="outlined-basic"
                    label=""
                    name="body"
                    variant="outlined"
                    value={viewUpdatePost.body}
                    onChange={handleChange}
                  />
                  <TextField
                    sx={{ marginTop: "16px", width: "100%" }}
                    id="outlined-basic"
                    type="number"
                    name="id"
                    label=""
                    variant="outlined"
                    value={viewUpdatePost.id}
                    onChange={handleChange}
                  />
                  <Button
                    onClick={() => {
                      handleOpenBackDrop();
                    }}
                    variant="contained"
                    type="submit"
                    sx={{ marginTop: "10px", backgroundColor: "#00a1a1" }}
                  >
                    Update
                  </Button>
                </Form>
              </Box>
            </Modal>
          </div>
          {/* update post modal */}

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
