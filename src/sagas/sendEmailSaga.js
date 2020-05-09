import { takeLatest, put, call } from "redux-saga/effects"
import { SEND_EMAIL } from "../constants"
import { Post } from "../lib/Request"
import { sendEmailSuccess, sendEmailFail } from "../actions"

function* sendEmail({ payload: data }) {
  try {
    const response = yield call(Post, "/contactUs", {
      args: {
        type: "mail",
        data,
      },
    })
    yield put(sendEmailSuccess(response.error))
  } catch (error) {
    yield put(sendEmailFail(error.message))
  }
}

export default function* sendEmailSaga() {
  yield takeLatest(SEND_EMAIL.REQUEST, sendEmail)
}
