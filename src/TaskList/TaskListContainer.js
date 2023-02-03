import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_data, sort_data } from "../redux/ActionCreators/ActionCreators";
import TaskListComponent from "./TaskListComponent";

const TaskListContainer = () => {
  const { postArray } = useSelector((state) => state.data);
  const [name, setName] = useState();
  const [value, setValue] = useState();
  const [isNameFilled, setIsNameFilled] = useState(true);
  const [characters, updateCharacters] = useState(postArray);
  const dispatch = useDispatch();

  const addItem = (data) => {
    if (data.name && /\S/.test(data.name)) {
      dispatch(set_data(data));
      setValue("");
      setName("");
      setIsNameFilled(true);
    } else {
      setIsNameFilled(false);
    }
  };
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(sort_data(items));
    updateCharacters(items);
  };
  useEffect(() => {
    updateCharacters(postArray);
  }, [postArray]);
  return (
    <TaskListComponent
      addItem={addItem}
      setName={setName}
      setValue={setValue}
      name={name}
      value={value}
      isNameFilled={isNameFilled}
      characters={characters}
      handleOnDragEnd={handleOnDragEnd}
    />
  );
};

export default TaskListContainer;
