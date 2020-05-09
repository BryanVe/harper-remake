import React from "react"
import { makeStyles, Grid, Hidden, Typography } from "@material-ui/core"

import acecomLogo from "../../../static/images/acecomLogo.svg"

const useStyles = makeStyles((theme) => ({
  acecomLogo: {
    width: "100%",
    maxHeight: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "70%",
    },
  },
  fontWrapper: {
    textAlign: "center",
    marginTop: "20px",
  },
  titleMobile: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: "12vw",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15vw",
    },
  },
  subtitleMobile: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: "3vw",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.5vw",
    },
  },
}))

const Logo = ({ isMobile = false }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid
        item
        lg={4}
        md={5}
        sm={12}
        container
        justify={isMobile ? "center" : "flex-start"}
        direction={isMobile ? "column" : "row"}
        alignItems='center'
        style={{ width: "100%", height: "100%" }}
      >
        <img alt='acecomLogo' src={acecomLogo} className={classes.acecomLogo} />
        <Hidden mdUp>
          <div className={classes.fontWrapper}>
            <Typography variant='h1' className={classes.titleMobile}>
              ACECOM
            </Typography>
            <Typography variant='h2' className={classes.subtitleMobile}>
              Asociación Científica Especializada en Computación
            </Typography>
          </div>
        </Hidden>
      </Grid>
    </React.Fragment>
  )
}
export default Logo
