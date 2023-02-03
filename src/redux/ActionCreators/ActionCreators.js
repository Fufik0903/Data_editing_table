import {
  DELETE_ITEM,
  EDIT_ITEM,
  GET_DATA,
  IS_VALID_NAME,
  SET_DATA,
  SET_NEW_ITEM,
  SORT_DATA,
} from "../Constants/Constants";

export const delete_item = (index) => {
  return {
    type: DELETE_ITEM,
    payload: index,
  };
};
export const edit_item = (data) => {
  return {
    type: EDIT_ITEM,
    payload: data,
  };
};

export const set_data = (data) => {
  return {
    type: SET_DATA,
    payload: data,
  };
};

export const sort_data = (data) => {
  return {
    type: SORT_DATA,
    payload: data,
  };
};
