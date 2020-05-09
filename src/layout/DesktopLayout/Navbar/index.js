import React from "react"
import { useHistory } from "react-router-dom"

import { AppBar, Toolbar, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import routes from "../../../routes"

const useStyles = makeStyles(() => ({
  appbar: {
    width: "100vw !important",
    backgroundColor: "transparent",
    boxShadow: "none",
    zIndex: 200,
  },
  toolbar: {
    width: "100vw !important",
    display: "flex",
    padding: 0,
    justifyContent: "flex-end",
  },
  appbarButton: {
    color: "#FFF",
    padding: "10px 20px",
    "&:hover": {
      fontWeight: "1000",
    },
  },
}))

const Navbar = () => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <React.Fragment>
      <AppBar position='fixed' className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          {routes.map(({ label, path }) => (
            <Button
              key={path}
              className={classes.appbarButton}
              variant='text'
              onClick={() => history.push(path)}
            >
              {label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Navbar
