import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  bottom: {
    opacity: "0.35",
  },
  top: {
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

function FacebookCircularProgress(props) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={50}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={50}
        thickness={4}
        {...props}
      />
    </div>
  );
}
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "relative",
    width: "max-content",
    "&:hover": {
      cursor: "pointer",
      opacity: "0.7",
    },
  },
  percentage: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: "12px",
  },
});

function Circular({ value }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FacebookCircularProgress
        color="primary"
        variant="determinate"
        value={value}
      />
      <div className={classes.percentage}>{`${value}%`}</div>
    </div>
  );
}

export default Circular;
