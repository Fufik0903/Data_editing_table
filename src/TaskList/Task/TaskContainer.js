import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  delete_item,
  edit_item,
} from "../../redux/ActionCreators/ActionCreators";
import TaskComponent from "./TaskComponent";

const TaskContainer = (props) => {
  const { item, index } = props;
  const [isEditMode, setIsEditMode] = useState(false);
  const [itemName, setItemName] = useState(item.name);
  const [itemValue, setItemValue] = useState(item.value);
  const dispatch = useDispatch();
  const saveEditingItem = () => {
    setIsEditMode(false);
    if (/\S/.test(itemName)) {
      dispatch(edit_item({ name: itemName, value: itemValue, id: index }));
    }
  };
  const deleteItem = () => {
    dispatch(delete_item(index));
  };

  useEffect(() => {
    setItemName(item.name);
    setItemValue(item.value);
  }, [isEditMode]);
  return (
    <TaskComponent
      {...props}
      saveEditingItem={saveEditingItem}
      deleteItem={deleteItem}
      isEditMode={isEditMode}
      setIsEditMode={setIsEditMode}
      setItemName={setItemName}
      setItemValue={setItemValue}
      itemName={itemName}
      itemValue={itemValue}
    />
  );
};
export default TaskContainer;
