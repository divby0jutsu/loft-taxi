import React from "react";
import { Grid, AppBar, Toolbar, Link } from "@material-ui/core";
import { ReactComponent as LogoIcon } from "../../img/logoicon.svg";
import { ReactComponent as LogoText } from "../../img/lofttaxi.svg";
import Nav from "../Nav";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MapIcon from "@material-ui/icons/Map";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PaymentIcon from "@material-ui/icons/Payment";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { logout } from "../../actions";

export const Header = ({ useDispatchHook = useDispatch }, props) => {
  const theme = useTheme();
  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    logoIcon: {
      maxHeight: "60px",
      maxWidth: "60px",
      marginRight: "16px",
    },
    logoText: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
  }));

  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const dispatch = useDispatchHook();

  const drawer = (
    <div>
      <Divider />
      <List>
        {[
          { text: "Map", url: "/map", icon: <MapIcon /> },
          { text: "Account", url: "./account", icon: <PaymentIcon /> },
        ].map((item, index) => (
          <Link key={item.text} href={item.url}>
            <ListItem button key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
        <Link
          key="logout"
          onClick={() => {
            dispatch(logout());
          }}
        >
          <ListItem button key="Log Out">
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <AppBar position="fixed" color="secondary">
        <Toolbar variant="dense" style={{ justifyContent: "space-between" }}>
          <Grid container item direction="row" alignItems="center" sm={4}>
            <LogoIcon className={classes.logoIcon} />
            <LogoText className={classes.logoText} />
          </Grid>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Hidden xsDown implementation="css">
            <Nav />
          </Hidden>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};
