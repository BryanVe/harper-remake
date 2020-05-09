import { takeLatest, put, call } from "redux-saga/effects"
import { FETCH_AREAS } from "../constants"
import { fetchAreasSuccess, fetchAreasFail } from "../actions"
import { Post } from "../lib/Request"

function* getAreas() {
  try {
    const { result } = yield call(Post, "/dataArea", {
      args: {
        type: "getAll",
      },
    })
    yield put(fetchAreasSuccess(result))
  } catch (error) {
    yield put(fetchAreasFail(error.message))
  }
}

export default function* areasSaga() {
  yield takeLatest(FETCH_AREAS.REQUEST, getAreas)
}
