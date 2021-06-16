import React, { useState, useEffect, createContext } from "react";

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  const colors = ["#0773e8", "#f3840b", "#8d8550", "#f2b347", "#000000"];
  const [data, setData] = useState({
    bgcolor: "",
    font: "Arimo",
    size: "medium",
    profile: "",
    yourName: "",
    yourProfession: "",
    aboutTitle: "ABOUT",
    aboutDes: "",
    personalTitle: "PERSONAL DETAILS",
    birthdateTitle: "Birth date",
    birthdateDes: "",
    nationalityTitle: "Nationality",
    nationalityDes: "",
    addressTitle: "Address",
    addressDes: "",
    maritalTitle: "Marital status",
    maritalDes: "",
    contactTitle: "CONTACT",
    emailDes: "",
    phonenumberDes: "",
    websiteDes: "",
    linkedinDes: "",
    githubDes: "",
    twitterDes: "",
    facebookDes: "",
    instagramDes: "",
    experienceTitle: "WORK EXPERIENCE",
    experienceDes: [
      { positionDes: "", organization: "", duration: "", detailedDes: "" },
    ],
    educationTitle: "EDUCATION",
    educationDes: [{ degreeDes: "", school: "", eduduration: "" }],
    simple1Title: "",
    simple1List: [{ list1Value: "" }],
    simple2Title: "",
    simple2List: [{ list2Value: "" }],
    circularTitle: "",
    circularList: [{ cirValue: "25", cirText: "" }],
    starTitle: "",
    starList: [{ strValue: "2", strText: "" }],
    list1Title: "",
    list1List: [{ list1Val: "" }],
    list2Title: "",
    list2List: [{ list2Val: "" }],

    sections: {
      picture: true,
      about: true,
      profession: true,
      experience: true,
      address: true,
      nationality: false,
      maritalstatus: false,
      phonenumber: true,
      website: false,
      linkedin: false,
      github: false,
      twitter: false,
      facebook: false,
      instagram: false,
      simple1: false,
      simple2: false,
      circular: false,
      star: false,
      list1: false,
      list2: false,
    },
  });

  useEffect(() => {
    setData((prevState) => ({
      ...prevState,
      bgcolor: colors[Math.floor(Math.random() * colors.length)],
    }));

    return () => {};
  }, []);

  return (
    <ContextGlobal.Provider value={{ data, setData }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
