import React from "react";
import "./tabs1.scss";
import { useWindowSize } from "react-use";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Producttabs1 = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  

  return (
    <>
      <section className="tabs_sec1">
        <div className="my-container">
          <div className="tab_container">
            <Box
              sx={{
                flexGrow: 1,
                maxWidth: { xs: "50%", sm: "50%" },
                bgcolor: "background.paper",
                ".css-1h9z7r5-MuiButtonBase-root-MuiTab-root" : {
                    fontSize: "1.75em",
                    color: "#000",
                    // maxWidth: "100%",
                    maxWidth: "30%",
                    fontFamily: "Poppins",
                  },
                  ".css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected" : {
                    color: "red",
                  },
                  ".css-ptiqhd-MuiSvgIcon-root" : {
                    width: "2em",
                    height: "2em",
                  }
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                aria-label="visible arrows tabs example"
                sx={{
                  [`& .${tabsClasses.scrollButtons}`]: {
                    "&.Mui-disabled": { opacity: 0.3 },
                  },
                }}
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Item Four" />
                <Tab label="Item Five" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div className="list_container">
                <h2 className="subheading">You will learn</h2>
                <ul className="subheading_desc">
                  <li>How to create and nest components</li>
                  <li>How to add markup and styles</li>
                  <li>How to display data</li>
                  <li>How to render conditions and lists</li>
                  <li>How to respond to events and update the screen</li>
                  <li>How to share data between components</li>
                </ul>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <div className="list_container">
                <h2 className="subheading">You will learn</h2>
                <ul className="subheading_desc">
                  <li>How to create and nest components</li>
                  <li>How to add markup and styles</li>
                  <li>How to display data</li>
                  <li>How to render conditions and lists</li>
                  <li>How to respond to events and update the screen</li>
                  <li>How to share data between components</li>
                </ul>
                <h2 className="subheading">You will learn</h2>
                <ul className="subheading_desc">
                  <li>How to create and nest components</li>
                  <li>How to add markup and styles</li>
                  <li>How to display data</li>
                  <li>How to render conditions and lists</li>
                  <li>How to respond to events and update the screen</li>
                  <li>How to share data between components</li>
                </ul>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <div className="list_container">
                <h2 className="subheading">You will learn</h2>
                <ul className="subheading_desc">
                  <li>How to create and nest components</li>
                  <li>How to add markup and styles</li>
                  <li>How to display data</li>
                  <li>How to render conditions and lists</li>
                  <li>How to respond to events and update the screen</li>
                  <li>How to share data between components</li>
                </ul>
                <h2 className="subheading">You will learn</h2>
                <ul className="subheading_desc">
                  <li>How to create and nest components</li>
                  <li>How to add markup and styles</li>
                  <li>How to display data</li>
                  <li>How to render conditions and lists</li>
                  <li>How to respond to events and update the screen</li>
                  <li>How to share data between components</li>
                </ul>
                <h2 className="subheading">You will learn</h2>
                <ul className="subheading_desc">
                  <li>How to create and nest components</li>
                  <li>How to add markup and styles</li>
                  <li>How to display data</li>
                  <li>How to render conditions and lists</li>
                  <li>How to respond to events and update the screen</li>
                  <li>How to share data between components</li>
                </ul>
              </div>
            </CustomTabPanel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Producttabs1;
