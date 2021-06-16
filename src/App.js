import React, { useEffect, useContext, useRef } from "react";
import { ContextGlobal } from "./context";
import Menu from "./Components/Menu";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Template1 from "./Components/Templates/Template1";
// import domtoimage from "dom-to-image";
// import { jsPDF } from "../node_modules/jspdf/dist/jspdf.es";

const useStyles = makeStyles(() => ({
  ContentWrapper: {
    width: "1200px",
    margin: "0 auto",
    padding: "30px",
  },
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

function App() {
  const { data } = useContext(ContextGlobal);
  const classes = useStyles();
  const fontRef = useRef(null);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: `${data.bgcolor ? data.bgcolor : "#252525"}`,
      },
      // secondary: {
      //   light: "#ff7961",
      //   main: "#f44336",
      //   dark: "#ba000d",
      //   contrastText: "#000",
      // },
    },
  });

  useEffect(() => {
    document.body.style.backgroundColor =
      data.bgcolor === "#000000" ? "#cecece" : data.bgcolor;
    fontRef.current.style.fontFamily = data.font;
    return () => {};
  }, [data]);

  // const printDocument = () => {
  //   const input = document.getElementById("divToOfferInfo");
  //   const pdf = new jsPDF();
  //   if (pdf) {
  //     domtoimage.toPng(input).then((imgData) => {
  //       pdf.addImage(imgData, "PNG", 0, 0);
  //       pdf.save("download.pdf");
  //     });
  //   }
  // };

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ margin: "2.5rem 0" }}>
        <Menu />
        {/* <button onClick={printDocument}>Print</button> */}
        <div className={classes.ContentWrapper} ref={fontRef}>
          <Paper
            id="divToOfferInfo"
            elevation={12}
            className={classes.paper_template}
          >
            <div className={classes.content_Conatiner}>
              <Template1 />
            </div>
          </Paper>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
