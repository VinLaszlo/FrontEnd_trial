import axios from "axios";
import { server } from "../../server";

export const getAllOwners = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllOwnersRequest",
    });

    const { data } = await axios.get(`${server}/admin/admin-all-owners`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllOwnersSuccess",
      payload: data.owners,
    });
  } catch (error) {
    dispatch({
      type: "getAllOwnersFailed",
    });
  }
};
