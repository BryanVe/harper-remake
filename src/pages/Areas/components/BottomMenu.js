import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import FavoriteIcon from "@material-ui/icons/Favorite"
import "./BottomMenu.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchOneAreaRequest } from "../../../actions"

const useStyles = makeStyles((theme) => ({
  menu: {
    position: "fixed",
    zIndex: 200,
    backgroundColor: theme.fab.mainColor,
    bottom: 0,
    width: "100vw",
  },
  menuButton: {
    overflow: "hidden",
  },
}))

const getArea = (code) => {
  switch (code) {
    case 1:
      return {
        label: "IA",
        value: "ai",
        icon: <FavoriteIcon />,
      }
    case 2:
      return {
        label: "DW",
        value: "wd",
        icon: <FavoriteIcon />,
      }
    case 3:
      return {
        label: "SI",
        value: "is",
        icon: <FavoriteIcon />,
      }
    case 4:
      return {
        label: "DV",
        value: "vd",
        icon: <FavoriteIcon />,
      }
    default:
      return {
        label: "NV",
        value: "no_val",
        icon: <FavoriteIcon />,
      }
  }
}

const BottomMenu = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const {
    areas: { data },
    currentArea: { name },
  } = useSelector((state) => state)
  const [value, setValue] = React.useState("ai")
  const [areaName, setAreaName] = useState(name)

  useEffect(() => {
    dispatch(fetchOneAreaRequest(areaName))
  }, [dispatch, areaName])

  return (
    <BottomNavigation
      value={value}
      onChange={(e, newValue) => setValue(newValue)}
      className={classes.menu}
    >
      {data.map(({ code, name }) => {
        const { label, value, icon } = getArea(code)
        return (
          <BottomNavigationAction
            onClick={() => setAreaName(name)}
            className={classes.menuButton}
            key={label}
            label={label}
            value={value}
            icon={icon}
          />
        )
      })}
    </BottomNavigation>
  )
}

export default BottomMenu
