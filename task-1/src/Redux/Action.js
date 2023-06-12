import { SET_VALUE } from "./ActionType";

export const requestChange = (payload) => {
  return { type: SET_VALUE, payload };
};

export const getRequestChange = (payload) => (dispatch) => {
  dispatch(requestChange(payload));
};
