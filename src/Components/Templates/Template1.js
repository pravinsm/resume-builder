import React, { useRef, useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  AddAPhoto,
  AddCircleTwoTone,
  CheckCircle,
  Email,
  Facebook,
  GitHub,
  Instagram,
  Language,
  LinkedIn,
  Phone,
  RemoveCircleTwoTone,
  Twitter,
} from "@material-ui/icons";
import { ContextGlobal } from "../../context";
import {
  Rating,
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
import Circular from "../Circular";

const useStyles = makeStyles(() => ({
  Template1_Left: {
    width: "25%",
  },
  Template1_Right: {
    width: "75%",
    paddingLeft: "40px",
  },
  Template1_Profile: {
    width: "100%",
    borderRadius: "50%",
    background: "grey",
    height: "0",
    paddingBottom: "100%",
    overflow: "hidden",
    backgroundPosition: "50% 50% !important",
    backgroundSize: "cover !important",
    cursor: "pointer",
    position: "relative",
    "&:hover > div": {
      opacity: "1 !important",
      background: "rgba(128,128,128,0.5) !important",
    },
  },
  Template1_ProfileInsert: {
    fontSize: "11px !important",
    fontWeight: "900",
    fontFamily: "poppins !important",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "white",
    transition: "opacity .2s ease",
    display: "flex",
    flexDirection: "column",
    placeItems: "center",
    padding: "100% 0 100% 0",
    width: "100%",
  },
  Template1_Input: {
    width: "100%",
    border: "none",
    fontFamily: "inherit",
    fontWeight: "600",
    borderRadius: "5px",
    paddingLeft: "5px",
    resize: "none",
    "&:focus": {
      background: "#eeeeee",
    },
  },
  Template1_Input_editable: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    cursor: "text",
    userSelect: "text",
    minWidth: "50px",
    borderRadius: "5px",
    padding: "5px 1px",
    margin: "5px",
    "&:focus": {
      background: "#eeeeee",
    },
  },
  simpleList: {
    position: "relative",
    padding: "5px",
    display: "inline-table",
    border: "2px dashed transparent",
    "&:hover": {
      border: "2px dashed rgba(0, 0, 0, 0.4)",
    },
    "&:hover .listAddIcon": {
      display: "block !important",
      cursor: "pointer",
    },
    "&:hover .listRemoveIcon": {
      display: "block !important",
      cursor: "pointer",
    },
  },
  simpleListField: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    cursor: "text",
    userSelect: "text",
    minWidth: "50px",
    background: "#f5f5f5",
    borderRadius: "5px",
    padding: "5px 10px",
    margin: "5px",
  },
}));

const leftPart = [
  {
    titleid: "aboutTitle",
    sectionid: "about",
    subdiv: [
      {
        titleid: "",
        desid: "aboutDes",
        des: "Describe about yourself",
        sectionid: "",
      },
    ],
  },
  {
    titleid: "personalTitle",
    sectionid: "",
    subdiv: [
      {
        titleid: "birthdateTitle",
        desid: "birthdateDes",
        des: "Enter your birth date",
        sectionid: "",
      },
      {
        titleid: "nationalityTitle",
        desid: "nationalityDes",
        des: "Enter your nationality",
        sectionid: "nationality",
      },
      {
        titleid: "addressTitle",
        desid: "addressDes",
        des: "Enter your address",
        sectionid: "address",
      },
      {
        titleid: "maritalTitle",
        desid: "maritalDes",
        des: "Enter your status",
        sectionid: "maritalstatus",
      },
    ],
  },
];

function Template1() {
  const classes = useStyles();
  const profileRef = useRef(null);
  const { data, setData } = useContext(ContextGlobal);
  const [L, M, S] =
    data.size === "medium"
      ? ["60px", "18px", "16px"]
      : data.size === "large"
      ? ["70px", "20px", "18px"]
      : ["50px", "16px", "14px"];

  const StyledRating = withStyles({
    iconFilled: {
      color: data.bgcolor,
    },
    iconHover: {
      opacity: "0.8",
    },
  })(Rating);

  const contact = [
    {
      icon: (
        <Email
          style={{ fontSize: M, marginBottom: "2px", color: data.bgcolor }}
        />
      ),
      placeholder: "Enter your email",
      id: "emailDes",
      checked: "",
    },
    {
      icon: (
        <Phone
          style={{ fontSize: M, marginBottom: "2px", color: data.bgcolor }}
        />
      ),
      placeholder: "Enter your phone no.",
      id: "phonenumberDes",
      checked: "phonenumber",
    },
    {
      icon: (
        <Language
          style={{ fontSize: M, marginBottom: "2px", color: data.bgcolor }}
        />
      ),
      placeholder: "Enter your website url",
      id: "websiteDes",
      checked: "website",
    },
    {
      icon: (
        <LinkedIn
          style={{ fontSize: M, marginBottom: "2px", color: data.bgcolor }}
        />
      ),
      placeholder: "Enter your username",
      id: "linkedinDes",
      checked: "linkedin",
    },
    {
      icon: (
        <GitHub
          style={{ fontSize: M, marginBottom: "2px", color: data.bgcolor }}
        />
      ),
      placeholder: "Enter your username",
      id: "githubDes",
      checked: "github",
    },
    {
      icon: (
        <Twitter
          style={{ fontSize: M, marginBottom: "2px", color: data.bgcolor }}
        />
      ),
      placeholder: "Enter your username",
      id: "twitterDes",
      checked: "twitter",
    },
    {
      icon: (
        <Facebook
          style={{ fontSize: M, marginBottom: "2px", color: data.bgcolor }}
        />
      ),
      placeholder: "Enter your username",
      id: "facebookDes",
      checked: "facebook",
    },
    {
      icon: (
        <Instagram
          style={{ fontSize: M, marginBottom: "2px", color: data.bgcolor }}
        />
      ),
      placeholder: "Enter your username",
      id: "instagramDes",
      checked: "instagram",
    },
  ];

  const SimpleList = [
    {
      titleId: "simple1Title",
      listId: "simple1List",
      checked: data.sections.simple1,
    },
    {
      titleId: "simple2Title",
      listId: "simple2List",
      checked: data.sections.simple2,
    },
  ];

  const readURL = (e) => {
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          var avatarImg = new Image();
          var src = reader.result;
          avatarImg.src = src;
          setData((prevState) => ({
            ...prevState,
            profile: src,
          }));
        },
        false
      );

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const updateInputField = (e) => {
    var id = e.target.id;
    var value = e.target.value;
    setData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const updateInputFieldEXP = (e, i) => {
    const values = [...data.experienceDes];
    var id = e.target.id;
    values[i][id] = e.target.value;
    setData((prevState) => ({
      ...prevState,
      experienceDes: values,
    }));
  };

  const updateInputFieldEDU = (e, i) => {
    const values = [...data.educationDes];
    var id = e.target.id;
    values[i][id] = e.target.value;
    setData((prevState) => ({
      ...prevState,
      educationDes: values,
    }));
  };

  const textAreaAutoGrow = (e, size) => {
    size = parseInt(size.replace("px", ""));
    e.target.style.height = size * 1.2 + "px";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  // console.log("data_______", data);

  return (
    <>
      <div style={{ display: "flex", placeItems: "center" }}>
        <div
          className={classes.Template1_Left}
          style={{
            display: `${data.sections.picture ? "block" : "none"}`,
          }}
        >
          <div
            className={classes.Template1_Profile}
            style={{
              background: `${
                data.profile !== ""
                  ? "rgba(0,0,0,0) url('" +
                    data.profile +
                    "') repeat scroll 0% 0%"
                  : ""
              }`,
            }}
            onClick={() => {
              profileRef.current.click();
            }}
          >
            <div
              className={classes.Template1_ProfileInsert}
              style={{ opacity: `${data.profile !== "" ? "0" : "0.5"}` }}
            >
              <AddAPhoto style={{ fontSize: "40px", margin: "2px" }} />
              SELECT YOUR PICTURE
            </div>
          </div>
          <input
            ref={profileRef}
            type="file"
            style={{ display: "none" }}
            accept="image/*"
            onChange={readURL}
          />
        </div>
        <div className={data.sections.picture ? classes.Template1_Right : " "}>
          <textarea
            style={{
              color: data.bgcolor,
              fontSize: L,
              height: `calc(${L}*1.2)`,
            }}
            placeholder="YOUR NAME"
            id="yourName"
            className={classes.Template1_Input}
            onChange={updateInputField}
            onInput={(e) => textAreaAutoGrow(e, L)}
          />
          <textarea
            style={{
              fontSize: M,
              height: `calc(${M}*1.2)`,
              textTransform: "uppercase",
              display: `${data.sections.profession ? "block" : "none"}`,
            }}
            placeholder="YOUR PROFESSION OR SPECIALITY"
            id="yourProfession"
            className={classes.Template1_Input}
            onChange={updateInputField}
            onInput={(e) => textAreaAutoGrow(e, M)}
          />
        </div>
      </div>
      {/* -------------------------------------------------------------------- */}
      <div
        style={{
          display: "flex",
        }}
      >
        {/* Left side */}
        <div className={classes.Template1_Left}>
          {leftPart.map((x) => (
            <div
              style={{
                marginTop: "25px",
                display: `${
                  x.sectionid === ""
                    ? ""
                    : data.sections[x.sectionid]
                    ? "block"
                    : "none"
                }`,
              }}
            >
              <textarea
                style={{
                  fontSize: M,
                  height: `calc(${M}*1.2)`,
                  textTransform: "uppercase",
                }}
                value={data[x.titleid]}
                id={x.titleid}
                className={classes.Template1_Input}
                onChange={updateInputField}
                onInput={(e) => textAreaAutoGrow(e, M)}
              />

              {x.subdiv.map((y) => (
                <>
                  {y.titleid !== "" ? (
                    <textarea
                      style={{
                        fontSize: M,
                        marginTop: "5px",
                        display: `${
                          y.sectionid === ""
                            ? ""
                            : data.sections[y.sectionid]
                            ? "block"
                            : "none"
                        }`,
                        height: `calc(${M}*1.2)`,
                        color: data.bgcolor,
                      }}
                      value={data[y.titleid]}
                      id={y.titleid}
                      className={classes.Template1_Input}
                      onChange={updateInputField}
                      onInput={(e) => textAreaAutoGrow(e, M)}
                    />
                  ) : (
                    ""
                  )}

                  <textarea
                    style={{
                      fontSize: S,
                      fontWeight: "400",
                      marginTop: "5px",
                      display: `${
                        y.sectionid === ""
                          ? ""
                          : data.sections[y.sectionid]
                          ? "block"
                          : "none"
                      }`,
                      height: `calc(${S}*1.2)`,
                    }}
                    placeholder={y.des}
                    id={y.desid}
                    className={classes.Template1_Input}
                    onChange={updateInputField}
                    onInput={(e) => textAreaAutoGrow(e, S)}
                  />
                </>
              ))}
            </div>
          ))}
          <div style={{ marginTop: "25px" }}>
            <textarea
              style={{
                fontSize: M,
                height: `calc(${M}*1.2)`,
                textTransform: "uppercase",
              }}
              value={data.contactTitle}
              id="contactTitle"
              className={classes.Template1_Input}
              onChange={updateInputField}
              onInput={(e) => textAreaAutoGrow(e, M)}
            />
            {contact.map((x) => (
              <div
                style={{
                  margin: `${
                    x.id === "emailDes" ? "10px 0 0 5px" : "15px 0 0 5px"
                  }`,
                  display: `${
                    x.checked === ""
                      ? "flex"
                      : data.sections[x.checked]
                      ? "flex"
                      : "none"
                  }`,
                  placeItems: "center",
                }}
              >
                {x.icon}
                <textarea
                  style={{
                    fontSize: S,
                    fontWeight: "400",
                    height: `calc(${S}*1.2)`,
                  }}
                  placeholder={x.placeholder}
                  id={x.id}
                  className={classes.Template1_Input}
                  onChange={updateInputField}
                  onInput={(e) => textAreaAutoGrow(e, S)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Right side */}
        <div className={classes.Template1_Right}>
          <div
            style={{
              marginTop: "25px",
              display: `${data.sections.experience ? "block" : "none"}`,
            }}
          >
            <textarea
              style={{
                fontSize: M,
                height: `calc(${M}*1.2)`,
                textTransform: "uppercase",
              }}
              value={data.experienceTitle}
              id="experienceTitle"
              className={classes.Template1_Input}
              onChange={updateInputField}
              onInput={(e) => textAreaAutoGrow(e, M)}
            />
            <Timeline>
              {data.experienceDes.map((x, i) => (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    {i === data.experienceDes.length - 1 ? (
                      ""
                    ) : (
                      <TimelineConnector />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <textarea
                      style={{
                        fontSize: M,
                        height: `calc(${M}*1.2)`,
                        color: data.bgcolor,
                      }}
                      placeholder="Position"
                      id="positionDes"
                      className={classes.Template1_Input}
                      onChange={(e) => updateInputFieldEXP(e, i)}
                      onInput={(e) => textAreaAutoGrow(e, M)}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        suppressContentEditableWarning
                        placeholder="Organization"
                        contentEditable="true"
                        className={classes.Template1_Input_editable}
                        style={{
                          fontSize: S,
                          fontWeight: "600",
                          textTransform: "uppercase",
                        }}
                        id="organization"
                        onBlur={(e) => {
                          const values = [...data.experienceDes];
                          var id = e.target.id;
                          values[i][id] = e.target.innerText;
                          setData((prevState) => ({
                            ...prevState,
                            experienceDes: values,
                          }));
                        }}
                      >
                        {x.organization}
                      </p>
                      <p
                        suppressContentEditableWarning
                        placeholder="From - Until"
                        contentEditable="true"
                        className={classes.Template1_Input_editable}
                        style={{
                          fontSize: S,
                          direction: "rtl",
                        }}
                        id="duration"
                        onBlur={(e) => {
                          const values = [...data.experienceDes];
                          var id = e.target.id;
                          values[i][id] = e.target.innerText;
                          setData((prevState) => ({
                            ...prevState,
                            experienceDes: values,
                          }));
                        }}
                      >
                        {x.duration}
                      </p>
                    </div>
                    <textarea
                      style={{
                        fontSize: S,
                        height: `calc(${S}*1.2)`,
                        fontWeight: "400",
                      }}
                      placeholder="In this field you can describe about your duties,responsibilities,etc."
                      id="detailedDes"
                      className={classes.Template1_Input}
                      onChange={(e) => updateInputFieldEXP(e, i)}
                      onInput={(e) => textAreaAutoGrow(e, S)}
                    />
                  </TimelineContent>
                </TimelineItem>
              ))}
              <AddCircleTwoTone
                className="expAddIcon"
                color="primary"
                fontSize="large"
                style={{ display: "none" }}
                onClick={() => {
                  const values = [...data.experienceDes];
                  values.push({
                    positionDes: "",
                    organization: "",
                    duration: "",
                    detailedDes: "",
                  });
                  setData((prevState) => ({
                    ...prevState,
                    experienceDes: values,
                  }));
                }}
              />
              {data.experienceDes.length > 1 ? (
                <RemoveCircleTwoTone
                  className="expRemoveIcon"
                  color="primary"
                  fontSize="large"
                  style={{ display: "none" }}
                  onClick={() => {
                    const values = [...data.experienceDes];
                    values.pop();
                    setData((prevState) => ({
                      ...prevState,
                      experienceDes: values,
                    }));
                  }}
                />
              ) : (
                ""
              )}
            </Timeline>
          </div>
          <div
            style={{
              marginTop: "25px",
            }}
          >
            <textarea
              style={{
                fontSize: M,
                height: `calc(${M}*1.2)`,
                textTransform: "uppercase",
              }}
              value={data.educationTitle}
              id="educationTitle"
              className={classes.Template1_Input}
              onChange={updateInputField}
              onInput={(e) => textAreaAutoGrow(e, M)}
            />
            <Timeline>
              {data.educationDes.map((x, i) => (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    {i === data.educationDes.length - 1 ? (
                      ""
                    ) : (
                      <TimelineConnector />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <textarea
                      style={{
                        fontSize: M,
                        color: data.bgcolor,
                        height: `calc(${M}*1.2)`,
                      }}
                      placeholder="Degree"
                      id="degreeDes"
                      className={classes.Template1_Input}
                      onChange={(e) => updateInputFieldEDU(e, i)}
                      onInput={(e) => textAreaAutoGrow(e, M)}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        suppressContentEditableWarning
                        placeholder="SCHOOL"
                        contentEditable="true"
                        className={classes.Template1_Input_editable}
                        style={{
                          fontSize: S,
                          fontWeight: "600",
                          textTransform: "uppercase",
                        }}
                        id="school"
                        onBlur={(e) => {
                          const values = [...data.educationDes];
                          var id = e.target.id;
                          values[i][id] = e.target.innerText;
                          setData((prevState) => ({
                            ...prevState,
                            educationDes: values,
                          }));
                        }}
                      >
                        {x.school}
                      </p>
                      <p
                        suppressContentEditableWarning
                        placeholder="From - Until"
                        contentEditable="true"
                        className={classes.Template1_Input_editable}
                        style={{
                          fontSize: S,
                          direction: "rtl",
                        }}
                        id="eduduration"
                        onBlur={(e) => {
                          const values = [...data.educationDes];
                          var id = e.target.id;
                          values[i][id] = e.target.innerText;
                          setData((prevState) => ({
                            ...prevState,
                            educationDes: values,
                          }));
                        }}
                      >
                        {x.eduduration}
                      </p>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              ))}
              <AddCircleTwoTone
                className="expAddIcon"
                color="primary"
                fontSize="large"
                style={{ display: "none" }}
                onClick={() => {
                  const values = [...data.educationDes];
                  values.push({ degreeDes: "", school: "", eduduration: "" });
                  setData((prevState) => ({
                    ...prevState,
                    educationDes: values,
                  }));
                }}
              />
              {data.educationDes.length > 1 ? (
                <RemoveCircleTwoTone
                  className="expRemoveIcon"
                  color="primary"
                  fontSize="large"
                  style={{ display: "none" }}
                  onClick={() => {
                    const values = [...data.educationDes];
                    values.pop();
                    setData((prevState) => ({
                      ...prevState,
                      educationDes: values,
                    }));
                  }}
                />
              ) : (
                ""
              )}
            </Timeline>
          </div>
          {SimpleList.map((x) => (
            <div
              style={{
                marginTop: "25px",
                display: `${x.checked ? "block" : "none"}`,
              }}
            >
              <textarea
                style={{
                  fontSize: M,
                  height: `calc(${M}*1.2)`,
                  textTransform: "uppercase",
                }}
                placeholder="CUSTOM TITLE"
                id={x.titleId}
                className={classes.Template1_Input}
                onChange={updateInputField}
                onInput={(e) => textAreaAutoGrow(e, M)}
              />
              <div>
                {data[x.listId].map((y, i) => (
                  <div
                    className={classes.simpleList}
                    key={`${Object.keys(y).toString()}-${i}`}
                    id={`${Object.keys(y).toString()}-${i}`}
                  >
                    <p
                      suppressContentEditableWarning
                      placeholder="Enter skill"
                      contentEditable="true"
                      className={classes.simpleListField}
                      style={{ fontSize: S }}
                      id={Object.keys(y).toString()}
                      onBlur={(e) => {
                        const values = [...data[x.listId]];
                        var id = e.target.id;
                        values[i][id] = e.target.innerText;
                        setData((prevState) => ({
                          ...prevState,
                          [x.listId]: values,
                        }));
                      }}
                    >
                      {y[Object.keys(y).toString()]}
                    </p>
                    <AddCircleTwoTone
                      className="listAddIcon"
                      color="primary"
                      style={{ display: "none" }}
                      onClick={() => {
                        const values = [...data[x.listId]];
                        values.push({ [Object.keys(y).toString()]: "" });
                        setData((prevState) => ({
                          ...prevState,
                          [x.listId]: values,
                        }));
                      }}
                    />
                    {data[x.listId].length > 1 ? (
                      <RemoveCircleTwoTone
                        className="listRemoveIcon"
                        color="primary"
                        style={{ display: "none" }}
                        onClick={() => {
                          const values = [...data[x.listId]];
                          values.splice(i, 1);
                          setData((prevState) => ({
                            ...prevState,
                            [x.listId]: values,
                          }));
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div
            style={{
              marginTop: "25px",
              display: `${data.sections.circular ? "block" : "none"}`,
            }}
          >
            <textarea
              style={{
                fontSize: M,
                height: `calc(${M}*1.2)`,
                textTransform: "uppercase",
              }}
              placeholder="CUSTOM TITLE"
              id="circularTitle"
              className={classes.Template1_Input}
              onChange={updateInputField}
              onInput={(e) => textAreaAutoGrow(e, M)}
            />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {data.circularList.map((x, i) => (
                <div
                  className={classes.simpleList}
                  style={{
                    padding: "10px 0 10px 5px",
                    width: "32.147%",
                    // flexGrow: "1",
                    display: "flex",
                    placeItems: "center",
                  }}
                >
                  <div
                    style={{ width: "max-content" }}
                    onClick={() => {
                      const values = [...data.circularList];
                      var id = "cirValue";
                      var value = parseInt(values[i][id]);
                      value += 25;
                      if (value === 125) {
                        value = 25;
                      }
                      values[i][id] = value;
                      setData((prevState) => ({
                        ...prevState,
                        circularList: values,
                      }));
                    }}
                  >
                    <Circular value={x.cirValue} />
                  </div>
                  <textarea
                    style={{
                      fontSize: S,
                      height: `calc(${S}*1.2)`,
                      fontWeight: "400",
                      marginLeft: "5px",
                    }}
                    placeholder="Enter skill"
                    id="cirText"
                    value={x.cirText}
                    className={classes.Template1_Input}
                    onChange={(e) => {
                      const values = [...data.circularList];
                      var id = e.target.id;
                      values[i][id] = e.target.value;
                      setData((prevState) => ({
                        ...prevState,
                        circularList: values,
                      }));
                    }}
                    onInput={(e) => textAreaAutoGrow(e, S)}
                  />
                  <AddCircleTwoTone
                    className="listAddIcon"
                    color="primary"
                    style={{ display: "none", top: "-16px", right: "-16px" }}
                    onClick={() => {
                      const values = [...data.circularList];
                      values.push({ cirValue: "25", cirText: "" });
                      setData((prevState) => ({
                        ...prevState,
                        circularList: values,
                      }));
                    }}
                  />
                  {data.circularList.length > 1 ? (
                    <RemoveCircleTwoTone
                      className="listRemoveIcon"
                      color="primary"
                      style={{ display: "none", top: "-16px", right: "14px" }}
                      onClick={() => {
                        const values = [...data.circularList];
                        values.splice(i, 1);
                        setData((prevState) => ({
                          ...prevState,
                          circularList: values,
                        }));
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              marginTop: "25px",
              display: `${data.sections.star ? "block" : "none"}`,
            }}
          >
            <textarea
              style={{
                fontSize: M,
                height: `calc(${M}*1.2)`,
                textTransform: "uppercase",
              }}
              placeholder="CUSTOM TITLE"
              id="starTitle"
              className={classes.Template1_Input}
              onChange={updateInputField}
              onInput={(e) => textAreaAutoGrow(e, M)}
            />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {data.starList.map((x, i) => (
                <div
                  className={classes.simpleList}
                  style={{
                    padding: "5px 0px 5px 5px",
                    // flexGrow: "1",
                    width: "48.812%",
                    display: "flex",
                    placeItems: "center",
                  }}
                >
                  <StyledRating
                    value={x.strValue}
                    color="priimary"
                    precision={0.5}
                    onChange={(event, newValue) => {
                      const values = [...data.starList];
                      values[i]["strValue"] = newValue;
                      setData((prevState) => ({
                        ...prevState,
                        starList: values,
                      }));
                    }}
                  />
                  <textarea
                    style={{
                      fontSize: S,
                      height: `calc(${S}*1.2)`,
                      fontWeight: "400",
                      marginLeft: "5px",
                    }}
                    placeholder="Enter skill"
                    id="strText"
                    value={x.strText}
                    className={classes.Template1_Input}
                    onChange={(e) => {
                      const values = [...data.starList];
                      var id = e.target.id;
                      values[i][id] = e.target.value;
                      setData((prevState) => ({
                        ...prevState,
                        starList: values,
                      }));
                    }}
                    onInput={(e) => textAreaAutoGrow(e, S)}
                  />
                  <AddCircleTwoTone
                    className="listAddIcon"
                    color="primary"
                    style={{ display: "none", top: "-16px", right: "-16px" }}
                    onClick={() => {
                      const values = [...data.starList];
                      values.push({ strValue: "2", strText: "" });
                      setData((prevState) => ({
                        ...prevState,
                        starList: values,
                      }));
                    }}
                  />
                  {data.starList.length > 1 ? (
                    <RemoveCircleTwoTone
                      className="listRemoveIcon"
                      color="primary"
                      style={{ display: "none", top: "-16px", right: "14px" }}
                      onClick={() => {
                        const values = [...data.starList];
                        values.splice(i, 1);
                        setData((prevState) => ({
                          ...prevState,
                          starList: values,
                        }));
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              marginTop: "25px",
              display: "flex",
            }}
          >
            {[
              {
                titleID: "list1Title",
                listID: "list1List",
                checked: data.sections.list1,
              },
              {
                titleID: "list2Title",
                listID: "list2List",
                checked: data.sections.list2,
              },
            ].map((x) => (
              <div
                style={{
                  flex: "0.5",
                  display: `${x.checked ? "block" : "none"}`,
                }}
              >
                <textarea
                  style={{
                    fontSize: M,
                    height: `calc(${M}*1.2)`,
                    textTransform: "uppercase",
                  }}
                  placeholder="CUSTOM TITLE"
                  id={x.titleID}
                  className={classes.Template1_Input}
                  onChange={updateInputField}
                  onInput={(e) => textAreaAutoGrow(e, M)}
                />
                {data[x.listID].map((y, i) => (
                  <div
                    className={classes.simpleList}
                    style={{
                      display: "flex",
                      placeItems: "center",
                    }}
                    key={`${Object.keys(y).toString()}-${i}`}
                    id={`${Object.keys(y).toString()}-${i}`}
                  >
                    <CheckCircle color="primary" />
                    <textarea
                      style={{
                        fontSize: S,
                        fontWeight: "400",
                        paddingLeft: "10px",
                        height: `calc(${S}*1.2)`,
                      }}
                      placeholder="Enter skill"
                      id={Object.keys(y).toString()}
                      value={y[Object.keys(y).toString()]}
                      className={classes.Template1_Input}
                      onChange={(e) => {
                        const values = [...data[x.listID]];
                        var id = e.target.id;
                        values[i][id] = e.target.value;
                        setData((prevState) => ({
                          ...prevState,
                          [x.listID]: values,
                        }));
                      }}
                      onInput={(e) => textAreaAutoGrow(e, S)}
                    />
                    <AddCircleTwoTone
                      className="listAddIcon"
                      color="primary"
                      style={{ display: "none", top: "-16px", right: "-16px" }}
                      onClick={() => {
                        const values = [...data[x.listID]];
                        values.push({ [Object.keys(y).toString()]: "" });
                        setData((prevState) => ({
                          ...prevState,
                          [x.listID]: values,
                        }));
                      }}
                    />
                    {data[x.listID].length > 1 ? (
                      <RemoveCircleTwoTone
                        className="listRemoveIcon"
                        color="primary"
                        style={{
                          display: "none",
                          top: "-16px",
                          right: "14px",
                        }}
                        onClick={() => {
                          const values = [...data[x.listID]];
                          values.splice(i, 1);
                          setData((prevState) => ({
                            ...prevState,
                            [x.listID]: values,
                          }));
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Template1;
