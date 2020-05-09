import React from "react"
import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core"
import CardArea from "./CardArea"
import getBackgroundColor from "../../../lib/GetBackgrounds"
import Loader from "../../../components/Loader"

const useStyles = makeStyles((theme) => ({
  cardContent: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  progressContainer: {
    backgroundColor: "transparent",
    width: "100%",
    height: "auto",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

const ContentCards = () => {
  const classes = useStyles()
  const { data, loading, error } = useSelector((state) => state.areas)

  return (
    <div className={classes.cardContent}>
      {loading ? (
        <Loader />
      ) : error !== "" ? (
        <h1>{error}</h1>
      ) : (
        data.map(({ name, abstract }) => (
          <CardArea
            key={name}
            title={name}
            abstract={abstract}
            backgroundColor={getBackgroundColor(name)}
          />
        ))
      )}
    </div>
  )
}

export default ContentCards
