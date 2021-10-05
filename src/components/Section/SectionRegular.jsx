import React from "react";
import { Typography, Button, Grid, Paper, makeStyles } from "@material-ui/core";
import SectionCenter from "./SectionCenter";
import { Link } from "react-router-dom";
import AdaptiveHelper from "../../modules/AdaptiveHelper";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("xs")]: {
      backgroundColor: "#fafafa",
      width: "100vw",
      padding: "0px",
      borderRadius: "0px",
      marginTop: "0px",
      marginBottom: "0px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "99.2vw",
    },
  },
  section: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "space-around",
      height: "auto",
      width: "100%",
      textAlign: "center",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      left: "0px",
    },
  },
  button: {
    [theme.breakpoints.up("xs")]: {
      margin: "10px",
    },
  },
}));

const Section = ({ header, description, image, buttons }) => {
  const classes = useStyles();

  const buttonList = buttons.map((button) => (
    <Button
      className={classes.button}
      key={button.id}
      data-cy={`button_${button.id}`}
      variant="contained"
      color="secondary"
      {...AdaptiveHelper.handleRedirect(button.link)}
    >
      <Typography variant="button">{button.text}</Typography>
    </Button>
  ));

  return (
    <>
      <Paper className={classes.container} elevation={0}>
        <Grid item className={classes.section} data-cy="page-section">
          <SectionCenter
            header={header}
            description={description}
            image={image}
            buttons={buttons}
            buttonList={buttonList}
          />
        </Grid>
      </Paper>
    </>
  );
};

export default Section;
