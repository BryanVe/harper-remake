import {
  FETCH_AREAS,
  FETCH_ONE_AREA,
  FETCH_MEMBERS,
  HANDLE_MENU_MOBILE,
  SLIDE_MORE_INFO,
  SEND_EMAIL,
} from "../constants"

export const fetchAreasRequest = () => {
  return {
    type: FETCH_AREAS.REQUEST,
  }
}

export const fetchAreasSuccess = (areas) => {
  return {
    type: FETCH_AREAS.SUCCESS,
    payload: areas,
  }
}

export const fetchAreasFail = (error) => {
  return {
    type: FETCH_AREAS.FAIL,
    payload: error,
  }
}

export const fetchOneAreaRequest = (name) => {
  return {
    type: FETCH_ONE_AREA.REQUEST,
    payload: name,
  }
}

export const fetchOneAreaSuccess = (area) => {
  return {
    type: FETCH_ONE_AREA.SUCCESS,
    payload: area,
  }
}

export const fetchOneAreaFail = (error) => {
  return {
    type: FETCH_ONE_AREA.FAIL,
    payload: error,
  }
}

export const fetchMembersRequest = () => {
  return {
    type: FETCH_MEMBERS.REQUEST,
  }
}

export const fetchMembersSuccess = (areas) => {
  return {
    type: FETCH_MEMBERS.SUCCESS,
    payload: areas,
  }
}

export const fetchMembersFail = (error) => {
  return {
    type: FETCH_MEMBERS.FAIL,
    payload: error,
  }
}

export const handleMenuMobile = () => {
  return {
    type: HANDLE_MENU_MOBILE,
  }
}

export const slideMoreInfo = () => {
  return {
    type: SLIDE_MORE_INFO,
  }
}

export const sendEmailRequest = (email) => {
  return {
    type: SEND_EMAIL.REQUEST,
    payload: email,
  }
}

export const sendEmailSuccess = (message) => {
  return {
    type: SEND_EMAIL.SUCCESS,
    payload: message,
  }
}

export const sendEmailFail = (error) => {
  return {
    type: SEND_EMAIL.FAIL,
    payload: error,
  }
}
