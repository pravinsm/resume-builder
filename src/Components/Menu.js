import React, { useState, useContext, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "react-select";
import { ContextGlobal } from "../context";
import Popover from "@material-ui/core/Popover";
import {
  Check,
  Colorize,
  Dashboard,
  FolderOpen,
  PictureAsPdf,
  Save,
} from "@material-ui/icons";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from "@material-ui/core";
import { useSnackbar } from "notistack";

const useStyles = makeStyles(() => ({
  tool_Conatiner: {
    minWidth: "max-content",
    background: "#252525",
    display: "inline-block",
    borderRadius: "1.5rem",
    boxShadow: "0 0 3rem 0 rgba(0,0,0,.3)",
    color: "#fff",
    position: "absolute",
    transform: "translate(-50%,-20px)",
    "& div:nth-child(1)": {
      borderLeft: "none",
    },
  },
  tool_Option: {
    padding: "1.5rem 1.25rem",
    float: "left",
    borderLeft: ".1rem solid #8080803b",
    textAlign: "center",
    "&:hover": {
      "& > .colorpicker": {
        border: "3px solid #fff !important",
        transition: "border 0.25s linear",
        cursor: "pointer",
      },
    },
  },
  tool_OptionText: {
    margin: "10px 0px 0px 0px",
  },
  tool_OptionFont: {
    color: "black !important",
    width: "150px",
  },
  tool_OptionColorPopup: {
    marginTop: "60px",
  },
  overlay: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 50,
  },
  tool_OptionTextSize: {
    fontFamily: "serif",
    fontWeight: "600",
    textAlign: "center",
    height: "2.5rem",
    lineHeight: "2.5rem",
    color: "grey",
  },
  tool_OptionTextSize_type: {
    display: "inline-block",
    cursor: "pointer",
  },
  tool_OptionSections: {
    fontSize: "35px",
    color: "grey",
    cursor: "pointer",
    "&:hover": {
      color: "white !important",
    },
  },
}));

const options = [
  { value: "Arimo", label: "Arimo" },
  { value: "Libre Baskerville", label: "Libre Baskerville" },
  { value: "Nunito", label: "Nunito" },
  { value: "Poppins", label: "Poppins" },
  { value: "Roboto", label: "Roboto" },
  { value: "Saira Semi Condensed", label: "Saira Semi Condensed" },
  { value: "Tinos", label: "Tinos" },
];
const colors = ["#0773e8", "#f3840b", "#8d8550", "#f2b347", "#000000"];

const sectionGroup1 = [
  {
    title: "PERSONAL INFO",
    child: ["ADDRESS", "NATIONALITY", "MARITAL STATUS"],
  },
  {
    title: "CONTACT",
    child: [
      "PHONE NUMBER",
      "WEBSITE",
      "LINKEDIN",
      "GITHUB",
      "TWITTER",
      "FACEBOOK",
      "INSTAGRAM",
    ],
  },
];

const sectionGroup2 = [
  { title: "SKILLS", child: ["SIMPLE 1", "SIMPLE 2", "CIRCULAR", "STAR"] },
  { title: "ADDITIONAL INFO", child: ["LIST 1", "LIST 2"] },
];

function Menu(props) {
  const classes = useStyles();
  const { data, setData } = useContext(ContextGlobal);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [overlay, setOverlay] = useState("none");
  const [selectedfont, setSelectedFont] = useState({
    value: "Arimo",
    label: "Arimo",
  });

  const colorRef = useRef(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? "simple-popover" : undefined;

  const handleChange = (selectedfont) => {
    setSelectedFont(selectedfont);
    setData((prevState) => ({
      ...prevState,
      font: selectedfont.value,
    }));
  };

  const handleSwitch = (event) => {
    setData((prevState) => ({
      ...prevState,
      sections: {
        ...prevState.sections,
        [event.target.name]: event.target.checked,
      },
    }));
  };

  useEffect(() => {
    enqueueSnackbar(
      'Click "Section" and customize your "Resume" \n for adding skills, additional info, etc',
      {
        variant: "info",
        autoHideDuration: 5000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "left",
        },
      }
    );
    return () => {};
  }, []);

  return (
    <>
      <div className="tool_Wrapper">
        <div className={classes.tool_Conatiner}>
          <div className={classes.tool_Option}>
            <div
              style={{
                background: data.bgcolor,
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: `3px solid ${data.bgcolor}`,
              }}
              className="colorpicker"
              onClick={(e) => {
                setAnchorEl(e.currentTarget);
                setOverlay("block");
              }}
            ></div>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={() => {
                setAnchorEl(null);
                setOverlay("none");
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              className={classes.tool_OptionColorPopup}
            >
              <div>
                {colors.map((color) => (
                  <div
                    style={{
                      background: `${color}`,
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: `3px solid ${color}`,
                      margin: "10px",
                      textAlign: "center",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setData((prevState) => ({
                        ...prevState,
                        bgcolor: color,
                      }));
                    }}
                  >
                    {color === data.bgcolor ? (
                      <Check style={{ margin: "3px" }} />
                    ) : (
                      ""
                    )}
                  </div>
                ))}
                <div
                  style={{
                    background: `#808080`,
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: `3px solid #808080`,
                    margin: "10px",
                    textAlign: "center",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    colorRef.current.click();
                  }}
                >
                  <Colorize style={{ margin: "3px" }} />
                </div>
              </div>
            </Popover>
            <h6 className={classes.tool_OptionText}>COLOR</h6>
          </div>
          <div className={classes.tool_Option}>
            <Select
              value={selectedfont}
              onChange={handleChange}
              options={options}
              className={classes.tool_OptionFont}
            />
            <h6 className={classes.tool_OptionText}>TYPEFACE</h6>
          </div>
          <div className={classes.tool_Option}>
            <div className={classes.tool_OptionTextSize}>
              <div
                className={classes.tool_OptionTextSize_type}
                style={{
                  fontSize: "17px",
                  marginRight: "10px",
                  color: `${data.size === "small" ? data.bgcolor : ""}`,
                }}
                onClick={() => {
                  setData((prevState) => ({
                    ...prevState,
                    size: "small",
                  }));
                }}
              >
                A
              </div>
              <div
                className={classes.tool_OptionTextSize_type}
                style={{
                  fontSize: "35px",
                  marginRight: "10px",
                  color: `${data.size === "medium" ? data.bgcolor : ""}`,
                }}
                onClick={() => {
                  setData((prevState) => ({
                    ...prevState,
                    size: "medium",
                  }));
                }}
              >
                A
              </div>
              <div
                className={classes.tool_OptionTextSize_type}
                style={{
                  fontSize: "52px",
                  color: `${data.size === "large" ? data.bgcolor : ""}`,
                }}
                onClick={() => {
                  setData((prevState) => ({
                    ...prevState,
                    size: "large",
                  }));
                }}
              >
                A
              </div>
            </div>
            <h6 className={classes.tool_OptionText}>TEXT SIZE</h6>
          </div>
          <div className={classes.tool_Option}>
            <Dashboard
              className={classes.tool_OptionSections}
              onClick={(e) => {
                setAnchorEl1(e.currentTarget);
                setOverlay("block");
              }}
            />
            <Popover
              id={id1}
              open={open1}
              anchorEl={anchorEl1}
              onClose={() => {
                setAnchorEl1(null);
                setOverlay("none");
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              className={classes.tool_OptionColorPopup}
            >
              <div
                style={{ padding: "20px", display: "flex", overflow: "auto" }}
              >
                <div
                  style={{
                    marginRight: "50px ",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Switch
                        checked={data.sections.picture}
                        onChange={handleSwitch}
                        name="picture"
                        color="primary"
                      />
                    }
                    label="PICTURE"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={data.sections.about}
                        onChange={handleSwitch}
                        name="about"
                        color="primary"
                      />
                    }
                    label="ABOUT"
                  />
                  {sectionGroup1.map((x) => (
                    <FormControl
                      component="fieldset"
                      style={{ marginTop: "15px" }}
                    >
                      <FormLabel component="legend">{x.title}</FormLabel>
                      <FormGroup>
                        {x.child.map((y) => {
                          var name = y.replace(/ +/g, "").toLowerCase();
                          return (
                            <FormControlLabel
                              control={
                                <Switch
                                  checked={data.sections[name]}
                                  onChange={handleSwitch}
                                  name={name}
                                  color="primary"
                                />
                              }
                              label={y}
                            />
                          );
                        })}
                      </FormGroup>
                    </FormControl>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={data.sections.profession}
                        onChange={handleSwitch}
                        name="profession"
                        color="primary"
                      />
                    }
                    label="PROFESSION"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={data.sections.experience}
                        onChange={handleSwitch}
                        name="experience"
                        color="primary"
                      />
                    }
                    label="WORK EXPERIENCE"
                  />
                  {sectionGroup2.map((x) => (
                    <FormControl
                      component="fieldset"
                      style={{ marginTop: "15px" }}
                    >
                      <FormLabel component="legend">{x.title}</FormLabel>
                      <FormGroup>
                        {x.child.map((y) => {
                          var name = y.replace(/ +/g, "").toLowerCase();
                          return (
                            <FormControlLabel
                              control={
                                <Switch
                                  checked={data.sections[name]}
                                  onChange={handleSwitch}
                                  name={name}
                                  color="primary"
                                />
                              }
                              label={y}
                            />
                          );
                        })}
                      </FormGroup>
                    </FormControl>
                  ))}
                </div>
              </div>
            </Popover>
            <h6 className={classes.tool_OptionText}>SECTIONS</h6>
          </div>
          <div className={classes.tool_Option}>
            <Save
              className={classes.tool_OptionSections}
              onClick={props.save}
            />
            <h6 className={classes.tool_OptionText}>SAVE</h6>
          </div>
          <div className={classes.tool_Option}>
            <FolderOpen
              className={classes.tool_OptionSections}
              onClick={props.load}
            />
            <h6 className={classes.tool_OptionText}>LOAD</h6>
          </div>
          <div className={classes.tool_Option}>
            <PictureAsPdf
              className={classes.tool_OptionSections}
              onClick={props.print}
            />
            <h6 className={classes.tool_OptionText}>DOWNLOAD PDF</h6>
          </div>
        </div>
      </div>
      <div className={classes.overlay} style={{ display: overlay }}></div>
      <input
        style={{ display: "none" }}
        ref={colorRef}
        type="color"
        id="colorpicker"
        value="#0000ff"
        onChange={() => {
          setData((prevState) => ({
            ...prevState,
            bgcolor: colorRef.current.value,
          }));
        }}
      />
    </>
  );
}

export default Menu;
