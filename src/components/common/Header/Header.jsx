import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "./Header.css";
import { useMediaQuery } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Link } from "react-router-dom";

const Header = () => {
  const pages = ["Solutions", "Industries", "Pricing", "Contact Us"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isXs = useMediaQuery("(max-width:600px)");

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, backgroundColor: "#E7FFFD" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {["Home", "Solutions", "Industries", "Pricing", "Contact Us"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Tooltip title="Open settings">
        <Button
          variant="outlined"
          size="large"
          onClick={handleOpenUserMenu}
          startIcon={<PermIdentityIcon />}
          sx={{
            background: "#F7FFFD",
            marginBottom: "10px",
            color: "#2d6363",
            marginTop: "20px",
            marginLeft: "20px",
          }}
        >
          Account
        </Button>
      </Tooltip>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      style={{ padding: "15px 10px 10px 10px", background: "none" }}
    >
      <Container maxWidth="xl" className="navbar">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src="../../../../public/images/header/Logo.png"
              alt=""
              className="logoImage"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="black"
            >
              <MenuIcon />
            </IconButton>

            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src="../../../../public/images/header/Logo.png"
              alt=""
              className="logoImageSmall"
            />
          </Typography>

          <Box sx={{ m: "auto", display: { xs: "none", md: "flex" } }}>
            <Link to="/">
              <img
                src="../../../../public/images/header/group.png"
                alt=""
                className="menuImage"
              />
            </Link>
            <Button
              onClick={handleClick}
              sx={{
                my: 2,
                mx: 2,
                color: "#000",
                padding: "10px",
                fontWeight: 700,
                display: "block",
                ":hover": {
                  color: "#000",
                  backgroundColor: "#ffffff",
                  borderRadius: "19px",
                },
                "&.Mui-selected": {
                  background: "#ffffff",
                  color: "#000",
                },
              }}
            >
              Solutions
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: 400,
                  width: 210,
                  borderRadius: "10px",
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleCloseNavMenu();
                }}
              >
                <Link
                  to="/solution"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  KYC Compliance
                </Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleCloseNavMenu();
                }}
              >
                ID Document Verification
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleCloseNavMenu();
                }}
              >
                Customer Onboarding
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleCloseNavMenu();
                }}
              >
                KYC Flow Builder
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleCloseNavMenu();
                }}
              >
                Proof of Address
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleCloseNavMenu();
                }}
              >
                Age Verification
              </MenuItem>
            </Menu>

            <Button
              aria-controls="menu2"
              aria-haspopup="true"
              onClick={handleClick2}
              sx={{
                my: 2,
                mx: 2,
                color: "#000",
                padding: "10px",
                fontWeight: 700,
                display: "block",
                ":hover": {
                  color: "#000",
                  backgroundColor: "#ffffff",
                  borderRadius: "19px",
                },
              }}
            >
              Industries
            </Button>

            <Menu
              id="menu2"
              anchorEl={anchorEl2}
              open={Boolean(anchorEl2)}
              onClose={handleClose2}
              PaperProps={{
                style: {
                  maxHeight: 400,
                  width: 210,
                  borderRadius: "10px",
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose2();
                  handleCloseNavMenu();
                }}
              >
                <Link
                  to="/Financial-Services"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Financial Services
                </Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose2();
                  handleCloseNavMenu();
                }}
              >
                Crypto
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose2();
                  handleCloseNavMenu();
                }}
              >
                Gaming and E-sports
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose2();
                  handleCloseNavMenu();
                }}
              >
                Legal Industry
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose2();
                  handleCloseNavMenu();
                }}
              >
                Healthcare
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose2();
                  handleCloseNavMenu();
                }}
              >
                Marketplaces
              </MenuItem>
            </Menu>

            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mx: 2,
                color: "#000",
                padding: "10px",
                fontWeight: 700,
                display: "block",
                ":hover": {
                  color: "#000",
                  backgroundColor: "#ffffff",
                  borderRadius: "19px",
                },
              }}
            >
              Pricing
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mx: 2,
                color: "#000",
                padding: "10px",
                fontWeight: 700,
                display: "block",
                ":hover": {
                  color: "#000",
                  backgroundColor: "#ffffff",
                  borderRadius: "19px",
                },
              }}
            >
              Contact Us
            </Button>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 2,
                  color: "#000",
                  padding: "10px",
                  fontWeight: 700,
                  display: "block",
                  ":hover": {
                    color: "#000",
                    backgroundColor: "#ffffff",
                    borderRadius: "19px",
                  },
                }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, background: "#ffffff" }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="../../../../public/images/header/Frame 48095401.png"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
