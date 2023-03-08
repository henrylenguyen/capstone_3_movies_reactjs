import userAPI from "API/userAPI";
import { ACCESS_TOKEN } from "constants/constants";
import { loginUser } from "reduxs/Slice/UserSlice";

export function fetchSignIn(data) {
  return async function (dispatch) {
    try {
      const res = await userAPI.signIn(data);

      dispatch(loginUser(res.data.content));

      // save localStorage
      localStorage.setItem(ACCESS_TOKEN, res.data.content.accessToken);
    } catch (error) {
      throw new Error(error);
    }
  };
}

export function fetchProfile() {
  return async function (dispatch) {
    try {
      const res = await userAPI.getProfile();
      dispatch(loginUser(res.data.content));
    } catch (error) {
      const { status } = error.response;
      if (status === 401) return;
    }
  };
}

// export function fetchInfo(data) {
//   return async function()
// }
