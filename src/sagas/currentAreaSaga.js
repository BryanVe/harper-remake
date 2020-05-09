import { takeLatest, put, call } from "redux-saga/effects"
import { FETCH_ONE_AREA } from "../constants"
import { fetchOneAreaSuccess, fetchOneAreaFail } from "../actions"
import { Post } from "../lib/Request"

function* getCurrentArea({ payload: name }) {
  try {
    const { result } = yield call(Post, "/dataArea", {
      args: {
        type: "getOne",
        data: {
          name,
        },
      },
    })
    yield put(fetchOneAreaSuccess(result))
  } catch (error) {
    yield put(fetchOneAreaFail(error.message))
  }
}

export default function* currentAreaSaga() {
  yield takeLatest(FETCH_ONE_AREA.REQUEST, getCurrentArea)
}
