import React from "react"
import { Switch, Route } from "react-router-dom"
import { useTheme, useMediaQuery } from "@material-ui/core"
import { DesktopLayout, MobileLayout } from "./layout"
import routes from "./routes"

const App = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  let Layout
  if (isMobile) Layout = MobileLayout
  else Layout = DesktopLayout

  return (
    <Layout>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route key={path} exact path={path}>
            {component}
          </Route>
        ))}
      </Switch>
    </Layout>
  )
}

export default App
