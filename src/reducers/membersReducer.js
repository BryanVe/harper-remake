import { FETCH_MEMBERS } from "../constants"

const initialState = {
  loading: false,
  error: "",
  data: [],
}

const membersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MEMBERS.REQUEST:
      return { ...state, loading: true }
    case FETCH_MEMBERS.SUCCESS:
      return { ...state, loading: false, data: payload }
    case FETCH_MEMBERS.FAIL:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}

export default membersReducer
