import React from "react"
import { makeStyles, CircularProgress } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  loaderContent: {
    backgroundColor: "#6D6D6D",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    color: "#48D180",
  },
}))

const Loader = () => {
  const classes = useStyles()

  return (
    <div className={classes.loaderContent}>
      <CircularProgress size='50px' className={classes.loader} />
    </div>
  )
}

export default Loader
