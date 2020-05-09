import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchAreasRequest } from "../../actions"

import ContentCards from "./components/ContentCards"
import { Hidden } from "@material-ui/core"
import ContentMenuAreas from "./components/ContentMenuAreas"

const Areas = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAreasRequest())
  }, [dispatch])

  return (
    <React.Fragment>
      <Hidden smDown>
        <ContentCards />
      </Hidden>
      <Hidden mdUp>
        <ContentMenuAreas />
      </Hidden>
    </React.Fragment>
  )
}

export default Areas
