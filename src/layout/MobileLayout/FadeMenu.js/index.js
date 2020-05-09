import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { makeStyles, Typography, Fade } from "@material-ui/core"

import { handleMenuMobile } from "../../../actions"
import routes from "../../../routes"

const menuFabStyles = {
  position: "fixed",
  zIndex: 200,
  width: "100%",
  height: "100%",
}

const useStyles = makeStyles((theme) => ({
  menuFab: {
    ...menuFabStyles,
    backgroundColor: theme.customColors.upColor,
  },
  menuOption: {
    width: "100%",
    height: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    "&:hover": {
      color: theme.customColors.bottomColor,
    },
  },
  menuOptionFont: {
    fontSize: "9vw",
    fontWeight: "bold",
  },
}))

const FadeMenu = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const openFab = useSelector((state) => state.handleMenuMobile)

  return (
    <Fade in={openFab}>
      <div className={classes.menuFab}>
        {routes.map(({ label, path }) => (
          <div
            key={label}
            className={classes.menuOption}
            onClick={() => {
              history.push(path)
              dispatch(handleMenuMobile())
            }}
          >
            <Typography variant='h2' className={classes.menuOptionFont}>
              {label}
            </Typography>
          </div>
        ))}
      </div>
    </Fade>
  )
}

export default FadeMenu
