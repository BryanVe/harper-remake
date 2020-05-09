import React from "react"
import { useSelector } from "react-redux"
import Loader from "../../../components/Loader"
import { Typography, makeStyles, Button } from "@material-ui/core"
import getBackgroundColor from "../../../lib/GetBackgrounds"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "fixed",
    top: 0,
    zIndex: 100,
    backgroundColor: ({ backgroundColor }) => backgroundColor,
    width: "100vw",
    height: "calc(100vh - 56px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  margin: {
    width: "calc(100% - 30vw)",
    margin: "0 15vw",
    [theme.breakpoints.down("xs")]: {
      width: "calc(100% - 24vw)",
      margin: "0 12vw",
    },
  },
  title: {
    color: "#FFF",
    fontSize: "6.5vw",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "7.5vw",
    },
  },
  subtitle: {
    color: "#FFF",
    marginTop: "30px",
    fontSize: "3.5vw",
    [theme.breakpoints.down("xs")]: {
      fontSize: "5vw",
    },
  },
  showMoreButtonWrapper: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
  },
  showMoreButton: {
    width: "150px",
    color: "#FFF",
    fontWeight: "bold",
    backgroundColor: "#2F2F30",
    "&:hover": {
      backgroundColor: "#303030",
    },
  },
}))

const InfoArea = () => {
  const { loading, error, data } = useSelector((state) => state.currentArea)
  const backgroundColor = getBackgroundColor(data.name)
  const classes = useStyles({ backgroundColor })
  return loading ? (
    <Loader />
  ) : error !== "" ? (
    <h1>{error}</h1>
  ) : (
    <div className={classes.wrapper}>
      <div className={classes.margin}>
        <Typography variant='h1' className={classes.title}>
          {data.name}
        </Typography>
        <Typography variant='h2' className={classes.subtitle}>
          {data.abstract}
        </Typography>
        <div className={classes.showMoreButtonWrapper}>
          <Button className={classes.showMoreButton}>Ver más...</Button>
        </div>
      </div>
    </div>
  )
}

export default InfoArea
