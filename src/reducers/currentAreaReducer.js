import { FETCH_ONE_AREA } from "../constants"

const initialState = {
  loading: false,
  error: "",
  name: "Inteligencia Artificial",
  data: {},
}

const AreaReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ONE_AREA.REQUEST:
      return { ...state, loading: true }
    case FETCH_ONE_AREA.SUCCESS:
      return { ...state, loading: false, data: payload }
    case FETCH_ONE_AREA.FAIL:
      return { ...state, loading: false, data: payload }
    default:
      return state
  }
}

export default AreaReducer
