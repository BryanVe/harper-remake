import React from "react"
import { Home, Areas, Members, Contact } from "./pages"

const routes = [
  {
    label: "Inicio",
    path: "/",
    component: <Home />,
  },
  {
    label: "Miembros",
    path: "/members",
    component: <Members />,
  },
  {
    label: "Áreas",
    path: "/areas",
    component: <Areas />,
  },
  {
    label: "Contáctanos",
    path: "/contact",
    component: <Contact />,
  },
]

export default routes
