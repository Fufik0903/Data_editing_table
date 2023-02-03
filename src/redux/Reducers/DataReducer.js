import {
  DELETE_ITEM,
  EDIT_ITEM,
  IS_VALID_NAME,
  SET_DATA,
  SORT_DATA,
} from "../Constants/Constants";

let initialState = {
  postArray: [
    { name: "name1", value: "value1" },
    { name: "name2", value: "value2" },
    { name: "name3", value: "value 3" },
  ],
};
let DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_DATA: {
      return {
        ...state,
        postArray: action.payload,
      };
    }
    case EDIT_ITEM: {
      let newPostArray = state.postArray.map((item, index) => {
        if (index == action.payload.id) {
          return {
            ...action.payload,
          };
        }
        return item;
      });
      return {
        ...state,
        postArray: newPostArray,
      };
    }
    case DELETE_ITEM: {
      let newPostArray = state.postArray.filter(
        (item, index) => index != action.payload
      );
      return {
        ...state,
        postArray: newPostArray,
      };
    }
    case SET_DATA: {
      let wasInArrayEarlier = false;
      let newPostArray = state.postArray.map((item, index) => {
        if (item.name == action.payload.name) {
          wasInArrayEarlier = true;
          return { name: action.payload.name, value: action.payload.value };
        }
        return item;
      });
      if (!wasInArrayEarlier) {
        newPostArray = newPostArray.concat({
          name: action.payload.name,
          value: action.payload.value,
        });
      }
      return {
        ...state,
        postArray: newPostArray,
      };
    }
    default:
      return state;
  }
};
export default DataReducer;
