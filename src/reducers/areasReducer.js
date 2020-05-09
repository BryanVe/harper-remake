import { FETCH_AREAS } from "../constants"

const initialState = {
  loading: false,
  error: "",
  data: [],
}

const areasReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_AREAS.REQUEST:
      return { ...state, loading: true }
    case FETCH_AREAS.SUCCESS:
      return { ...state, loading: false, data: payload }
    case FETCH_AREAS.FAIL:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}

export default areasReducer
