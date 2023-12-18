import axios from "axios";
import { server } from "../../server";

export const createProgram =
  (name, description, category, tags, adminId, images) => async (dispatch) => {
    try {
      dispatch({
        type: "programCreateRequest",
      });

      const { data } = await axios.post(
        `${server}/program/create-program`,
        name,
        description,
        category,
        tags,
        adminId,
        images
      );
      dispatch({
        type: "programCreateSuccess",
        payload: data.program,
      });
    } catch (error) {
      dispatch({
        type: "programCreateFail",
        payload: error.response.data.message,
      });
    }
  };

export const getAllAdminPrograms = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllAdminProgramsRequest",
    });

    const { data } = await axios.get(
      `${server}/program/get-all-admin-programs/${id}`
    );
    dispatch({
      type: "getAllAdminProgramsSuccess",
      payload: data.programs,
    });
  } catch (error) {
    dispatch({
      type: "getAllAdminProgramsFailed",
      payload: error.response.data.message,
    });
  }
};

export const deleteProgram = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProgramRequest",
    });

    const { data } = await axios.delete(
      `${server}/program/delete-admin-program/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteProgramSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProgramFailed",
      payload: error.response.data.message,
    });
  }
};

export const getAllPrograms = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProgramsRequest",
    });

    const { data } = await axios.get(`${server}/program/get-all-programs`);
    dispatch({
      type: "getAllProgramsSuccess",
      payload: data.programs,
    });
  } catch (error) {
    dispatch({
      type: "getAllProgramsFailed",
      payload: error.response.data.message,
    });
  }
};
