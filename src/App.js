import React, { useEffect, useContext, useRef } from "react";
import { ContextGlobal } from "./context";
import Menu from "./Components/Menu";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Template1 from "./Components/Templates/Template1";
import domtoimage from "dom-to-image";
import { jsPDF } from "../node_modules/jspdf/dist/jspdf.es";
import FileSaver from "file-saver";

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
  const { data, setData } = useContext(ContextGlobal);
  const classes = useStyles();
  const fontRef = useRef(null);
  const loadRef = useRef(null);

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

  const printDocument = () => {
    const input = document.getElementById("divToOfferInfo");
    const pdf = new jsPDF("p", "mm", [317.5, 449.79166667]);
    if (pdf) {
      domtoimage.toPng(input).then((imgData) => {
        pdf.addImage(imgData, "PNG", 0, 0);
        pdf.save(
          `${data.yourName ? data.yourName + "-CV" : "Resume Builder"}.pdf`
        );
      });
    }
  };
  const saveDocument = () => {
    var blob = new Blob([JSON.stringify(data)], {
      type: "text/plain;charset=utf-8",
    });
    FileSaver.saveAs(
      blob,
      `${
        data.yourName
          ? data.yourName + " - offline"
          : "Resume Builder - offline"
      }.txt`
    );
  };

  const loadDocument = () => {
    loadRef.current.click();
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ margin: "2.5rem 0" }}>
        <Menu print={printDocument} load={loadDocument} save={saveDocument} />

        <div className={classes.ContentWrapper}>
          <Paper
            id="divToOfferInfo"
            elevation={12}
            className={classes.paper_template}
          >
            <div ref={fontRef} className={classes.content_Conatiner}>
              <Template1 />
            </div>
          </Paper>
        </div>

        <input
          type="file"
          ref={loadRef}
          style={{ display: "none" }}
          name="inputfile"
          id="inputfile"
          accept="text/plain"
          onChange={(e) => {
            if (e.target.files[0].name.includes("- offline")) {
              var fr = new FileReader();
              fr.onload = function () {
                var result = JSON.parse(fr.result);
                const values = { ...data };
                Object.assign(values, result);
                setData(values);
              };

              fr.readAsText(e.target.files[0]);
            } else {
              alert("Load the proper text file!");
            }
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
