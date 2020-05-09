import { takeLatest, put, call } from "redux-saga/effects"
import { FETCH_MEMBERS } from "../constants"
import { fetchMembersSuccess, fetchMembersFail } from "../actions"
import { Post } from "../lib/Request"

function* getMembers() {
  try {
    const { result } = yield call(Post, "/dataMembers", {
      args: {
        type: "getAll",
      },
    })
    yield put(fetchMembersSuccess(result))
  } catch (error) {
    yield put(fetchMembersFail(error.message))
  }
}

export default function* membersSaga() {
  yield takeLatest(FETCH_MEMBERS.REQUEST, getMembers)
}
