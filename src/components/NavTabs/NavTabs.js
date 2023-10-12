import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { tabsStyles, tabItemStyles } from "./NavTabs.style";
import { Avatar } from "@mui/material";
import CompressionSpring from '../../assets/compression-spring.png'
import TensionSpring from '../../assets/tension-spring.png'
import example from '../../assets/example.png'

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };


  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        sx={tabsStyles}
        value={value}
        onChange={handleChange}
        aria-label="nav tabs"
      >
        <LinkTab sx={tabItemStyles} href="/drafts" icon={ <Avatar src={CompressionSpring}/>} />
        <LinkTab sx={tabItemStyles} href="/trash" icon={ <Avatar src={TensionSpring}/>} />
        <LinkTab sx={tabItemStyles} href="/spam"  icon={ <Avatar src={example}/>}/>
      </Tabs>
    </Box>
  );
}
