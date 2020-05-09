import React from "react"
import { makeStyles, Typography, Grid } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: "8.5vw",
    [theme.breakpoints.down("md")]: {
      fontSize: "10vw",
    },
  },
  subtitle: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: "1.8vw",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.8vw",
    },
  },
}))

const Title = ({ isMobile = false }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      {!isMobile && (
        <Grid
          item
          lg={8}
          md={7}
          container
          justify='center'
          alignItems='center'
          style={{ width: "100%", height: "100%" }}
        >
          <div style={{ textAlign: "center" }}>
            <Typography variant='h1' className={classes.title}>
              ACECOM
            </Typography>
            <Typography variant='h2' className={classes.subtitle}>
              Asociación Científica Especializada en Computación
            </Typography>
          </div>
        </Grid>
      )}
    </React.Fragment>
  )
}

export default Title
