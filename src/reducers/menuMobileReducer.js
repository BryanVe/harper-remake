import { HANDLE_MENU_MOBILE } from "../constants"

const initialState = false

const menuMobileReducer = (state = initialState, { type }) => {
  switch (type) {
    case HANDLE_MENU_MOBILE:
      return !state
    default:
      return state
  }
}

export default menuMobileReducer
