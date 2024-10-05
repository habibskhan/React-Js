import React from "react";
import "./tabs.scss";
import { useWindowSize } from "react-use";
// import { Box, Tab, Tabs } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Producttabs = () => {
  const { width } = useWindowSize();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <section className="tabs_sec1">
        <div className="my-container">
          <div className="tab_container">
            <Box
              sx={{
                width: "100%",
                borderBottom: "none",
                borderColor: "divider",
                //   ".MuiButtonBase-root-MuiTab-root": {
                //     fontSize: "1.75em",
                //   },
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
              }}
            >
              <Tabs sx={{
                //   borderBottom: "none",
                 ".MuiButtonBase-root-MuiTab-root.Mui-selected" : {
                    color: "#000",
                },
              }}
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="How to create and nest components" {...a11yProps(0)} wrapped/>
                <Tab label="How to add markup and styles" {...a11yProps(1)} />
                <Tab label="How to display data" {...a11yProps(2)} />
                <Tab label="How to display" {...a11yProps(3)} />
                <Tab label="How to display" {...a11yProps(3)} />
                <Tab label="How to display" {...a11yProps(3)} />
                <Tab label="How to display" {...a11yProps(3)} />
                <Tab label="How to display" {...a11yProps(3)} />
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
                  <li>How to create</li>
                  <li>How to add markup</li>
                  <li>How to display data</li>
                  <li>How to render</li>
                  <li>How to respond </li>
                  <li>How to share data </li>
                </ul>
                <h2 className="subheading">You will learn</h2>
                <ul className="subheading_desc">
                  <li>How to create</li>
                  <li>How to add markup</li>
                  <li>How to display data</li>
                  <li>How to render</li>
                  <li>How to respond </li>
                  <li>How to share data </li>
                </ul>
                <h2 className="subheading">You will learn</h2>
                <ul className="subheading_desc">
                  <li>How to create</li>
                  <li>How to add markup</li>
                  <li>How to display data</li>
                  <li>How to render</li>
                  <li>How to respond </li>
                  <li>How to share data </li>
                </ul>
              </div>
            </CustomTabPanel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Producttabs;
