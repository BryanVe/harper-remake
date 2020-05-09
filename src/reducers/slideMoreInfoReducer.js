import { SLIDE_MORE_INFO } from "../constants"

const initialState = false

const slideMoreInfoReducer = (state = initialState, { type }) => {
  switch (type) {
    case SLIDE_MORE_INFO:
      return !state
    default:
      return state
  }
}

export default slideMoreInfoReducer
