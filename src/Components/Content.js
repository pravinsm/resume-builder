import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Template1 from "./Templates/Template1";

const useStyles = makeStyles(() => ({
  paper_template: {
    minHeight: "1700px",
    width: "1200px",
    borderRadius: "0 !important",
  },
  content_Conatiner: {
    padding: "75px",
    minHeight: "1700px",
  },
}));

function Content() {
  const classes = useStyles();
  return (
    <Paper elevation={12} className={classes.paper_template}>
      <div className={classes.content_Conatiner}>
        <Template1 />
      </div>
    </Paper>
  );
}

export default Content;
