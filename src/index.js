import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { MuiThemeProvider } from "@material-ui/core"
import App from "./App"
import theme from "./custom-theme"
import configureStore from "./store"
import { Provider } from "react-redux"
import "./index.css"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
)
