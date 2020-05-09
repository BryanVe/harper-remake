import { combineReducers } from "redux"
import areasReducer from "./areasReducer"
import menuMobileReducer from "./menuMobileReducer"
import membersReducer from "./membersReducer"
import slideMoreInfoReducer from "./slideMoreInfoReducer"
import currentAreaReducer from "./currentAreaReducer"

const rootReducer = combineReducers({
  areas: areasReducer,
  currentArea: currentAreaReducer,
  members: membersReducer,
  handleMenuMobile: menuMobileReducer,
  slideMoreInfo: slideMoreInfoReducer,
})

export default rootReducer
