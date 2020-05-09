import React from "react"
import { makeStyles, Fab } from "@material-ui/core"
import MenuRoundedIcon from "@material-ui/icons/MenuRounded"
import CloseRoundedIcon from "@material-ui/icons/CloseRounded"
import { useDispatch, useSelector } from "react-redux"
import { handleMenuMobile } from "../../../actions"

const useStyles = makeStyles((theme) => ({
  fab: {
    backgroundColor: theme.fab.mainColor,
    position: "fixed",
    color: theme.fab.fontColor,
    zIndex: 300,
    top: 0,
    right: 0,
    marginRight: "15px",
    marginTop: "15px",
    "&:hover": {
      backgroundColor: theme.fab.hoverColor,
    },
    "&:active": {
      backgroundColor: theme.fab.activeColor,
    },
  },
}))

const FabMobile = () => {
  const classes = useStyles()
  const openFab = useSelector((state) => state.handleMenuMobile)
  const dispatch = useDispatch()

  return (
    <Fab
      onClick={() => dispatch(handleMenuMobile())}
      color='primary'
      className={classes.fab}
      size='large'
    >
      {openFab ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
    </Fab>
  )
}

export default FabMobile
