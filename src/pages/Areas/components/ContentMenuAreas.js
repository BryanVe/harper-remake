import React from "react"
import { useSelector } from "react-redux"
import BottomMenu from "./BottomMenu"
import InfoArea from "./InfoArea"
import Loader from "../../../components/Loader"

const ContentMenuAreas = () => {
  const { loading, error } = useSelector((state) => state.areas)

  return loading ? (
    <Loader />
  ) : error !== "" ? (
    <h1>{error}</h1>
  ) : (
    <React.Fragment>
      <InfoArea />
      <BottomMenu />
    </React.Fragment>
  )
}

export default ContentMenuAreas
