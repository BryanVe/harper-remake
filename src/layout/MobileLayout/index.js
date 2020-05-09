import React from "react"
import { makeStyles } from "@material-ui/core"
import FabMobile from "./FabMobile"
import FadeMenu from "./FadeMenu.js"

const useStyles = makeStyles(() => ({
  content: {
    position: "absolute",
    zIndex: 100,
  },
}))

const MobileLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.content}>{children}</div>
      <FadeMenu />
      <FabMobile />
    </React.Fragment>
  )
}

export default MobileLayout
