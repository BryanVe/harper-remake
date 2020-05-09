import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  customColors: {
    upColor: "rgb(0,21,41)",
    middleColor: "rgba(17,93,99,1)",
    bottomColor: "rgba(27,143,133,1)",
    gradient:
      "linear-gradient(180deg, rgba(0,21,41,1) 0%, rgba(17,93,99,1) 50%, rgba(27,143,133,1) 100%)",
  },
  fab: {
    mainColor: "#3D3D3D",
    hoverColor: "#4B4B4B",
    activeColor: "#363636",
    fontColor: "#BCBCBC",
  },
})

export default theme
