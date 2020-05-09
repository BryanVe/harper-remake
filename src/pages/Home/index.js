import React from "react"
import Particles from "react-particles-js"
import { makeStyles, Grid, useTheme, useMediaQuery } from "@material-ui/core"

import Logo from "./components/Logo"
import Title from "./components/Title"

import particlesConfig from "../../particles-config"

const fullDiv = {
  width: "100%",
  height: "100%",
}

const useStyles = makeStyles((theme) => ({
  particles: {
    ...fullDiv,
    background: theme.customColors.gradient,
    position: "absolute",
    boxSizing: "border-box",
    zIndex: -1,
    overflow: "hidden",
  },
  wrapper: {
    overflow: "hidden",
    position: "absolute",
    zIndex: 40,
    width: "70%",
    height: "75%",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "90%",
    },
  },
}))

const Home = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const classes = useStyles()

  return (
    <React.Fragment>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          userSelect: "none",
          position: "fixed",
        }}
      >
        <Particles className={classes.particles} params={particlesConfig} />
        <div className={classes.wrapper}>
          <Grid container style={fullDiv}>
            <Title isMobile={isMobile} />
            <Logo isMobile={isMobile} />
          </Grid>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
