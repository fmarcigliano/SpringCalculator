export const tabsStyles = {
  width: "100%",
  background: "#607D8B",
  boxShadow: "0px 3px 15px rgba(34, 35, 58, 0.5)",
  ".MuiTabs-indicator": {
    display: "none",
  },
  ".MuiTabs-centered": {
    alignItems: "center",
    justifyContent: "center",
  },
};

export const tabItemStyles = {
  position: "relative",
  display: "flex",
  borderRadius: "30px",
  textAlign: "center",
  transition: "all .5s",
  padding: "1px 15px",
  color: "#ffffff",
  height: "auto",
  opacity: "1",
  margin: "10px 0",
  float: "none",
  "& + button": {
    margin: "10px 0",
  },
  "&.Mui-selected": {
    "&, &:hover": {
      color: "#FFFFFF",
      backgroundColor: "#b5aeac",
      boxShadow: "0 7px 10px -5px rgba(76, 175, 80, 0.4)",
    },
  },
};
