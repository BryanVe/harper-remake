import React, { useState } from "react"
import { makeStyles, Typography, Button } from "@material-ui/core"

const cardStyles = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  height: "100%",
  userSelect: "none",
}

const useStyles = makeStyles((theme) => ({
  card: {
    ...cardStyles,
    flexGrow: 1,
    transition: "all 0.5s ease-in",
  },
  cardExpand: {
    ...cardStyles,
    flexGrow: 2,
    transition: "all 0.5s ease-out",
  },
  hoverDiv: {
    position: "relative",
    zIndex: 100,
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "2vw 0",
  },
  titleFont: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: "2.5vw",
    textAlign: "end",
  },
  titleWrapper: {
    paddingRight: "2vw",
  },
  subtitleFont: {
    color: "#FFF",
    fontSize: "1.3vw",
    textAlign: "end",
    marginBottom: "50px",
  },
  subtitleWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: "22vw",
    paddingRight: "2vw",
  },
  showMoreButton: {
    width: "200px",
    color: "#FFF",
    fontWeight: "bold",
    backgroundColor: "#2F2F30",
    "&:hover": {
      backgroundColor: "#303030",
    },
  },
}))

const CardArea = ({
  backgroundColor,
  title = "Area name",
  abstract = "Area abstract",
}) => {
  const classes = useStyles()
  const [isHover, setIsHover] = useState(false)

  return (
    <div
      className={isHover ? classes.cardExpand : classes.card}
      style={{
        backgroundColor,
      }}
    >
      <div
        onMouseMove={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={classes.hoverDiv}
      >
        <div
          className={!isHover ? classes.titleWrapper : classes.subtitleWrapper}
        >
          {!isHover ? (
            title.split(" ").map((titlePart) => (
              <Typography
                key={titlePart}
                variant='h2'
                className={classes.titleFont}
              >
                {titlePart}
              </Typography>
            ))
          ) : (
            <React.Fragment>
              <Typography variant='h3' className={classes.subtitleFont}>
                {abstract}
              </Typography>
              <Button variant='contained' className={classes.showMoreButton}>
                Ver más...
              </Button>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardArea
