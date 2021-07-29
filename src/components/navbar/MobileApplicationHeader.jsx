import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  IconButton,
  Drawer,
  Tab,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as Logo } from "../../assets/LogoCHWLHorisontal.svg";
import AppData from "../../modules/AppData";

const useStyles = makeStyles((theme) => ({
  nav: {
    [theme.breakpoints.up("xs")]: {
      marginLeft: "80%",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "15%",
      marginLeft: "20%",
    },
  },
}));

const MobileApplicationHeader = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [parent, setParent] = useState("/home");
  const landingPage = useRouteMatch("/home");
  const { appData, appDataFetched } = useSelector((state) => state);
  const { main_tabs, secondary_tabs } = appData.navigation;

  useEffect(() => {
    const fetchApplicationData = async () => {
      if (!appDataFetched) {
        await AppData.read();
      }
    };
    fetchApplicationData();
  }, [appDataFetched]);

  const toKebabCase = (string) =>
    string.replace(/\s+/g, "-").replace("&", "and").toLowerCase();

  const mainTabs = main_tabs.map((tab, index) => (
    <Tab
      key={`main-tab-${index}`}
      style={styles.tabText}
      data-cy={`${toKebabCase(tab.label)}-tab`}
      label={tab.label}
      component={Link}
      to={tab.link}
      onClick={() => handleDrawerClose()}
    />
  ));

  // const secondaryTabs = secondary_tabs
  //   .filter((tab) => tab.parent === parent)
  //   .map((tab, index) => (
  //     <Tab
  //       key={`secondary-tab-${index}`}
  //       style={styles.secondaryTabText}
  //       data-cy={`${toKebabCase(tab.label)}-sub-tab`}
  //       label={tab.label}
  //       component={Link}
  //       to={tab.link}
  //     />
  //   ));

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar data-cy="application-header" elevation={0} style={styles.nav}>
          <Toolbar style={styles.nav} className={classes.nav}>
            {!landingPage && (
              <Logo
                data-cy="header-logo"
                style={styles.headerLogo}
                alt="Community Health West London"
              />
            )}
            <IconButton
              {...{
                edge: "end",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon fontSize="large" style={styles.burger} />
            </IconButton>
            <Drawer
              {...{
                anchor: "top",
                open: drawerOpen,
                onClose: handleDrawerClose,
              }}
            ><Box>{mainTabs}</Box></Drawer>
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
};

export default MobileApplicationHeader;

const styles = {
  nav: {
    width: "100%",
  },
  tabText: {
    display: "block"
  }
};