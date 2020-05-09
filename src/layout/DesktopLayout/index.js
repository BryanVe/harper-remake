import React from "react"
import Navbar from "./Navbar"

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div
        style={{
          zIndex: 100,
        }}
      >
        {children}
      </div>
    </React.Fragment>
  )
}

export default MainLayout
