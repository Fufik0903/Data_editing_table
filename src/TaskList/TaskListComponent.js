import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TaskContainer from "./Task/TaskContainer";
import "./TaskList.css";

const TaskListComponent = (props) => {
  const {
    addItem,
    value,
    name,
    setValue,
    setName,
    isNameFilled,
    characters,
    handleOnDragEnd,
  } = props;

  return (
    <div className="container">
      <div className="areaContainer mb-3">
        <textarea
          className="form-control area"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <textarea
          className="form-control area"
          placeholder="value"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-secondary save-bth"
          onClick={() => {
            addItem({
              name: name,
              value: value,
            });
          }}
        >
          Добавить
        </button>
      </div>
      {isNameFilled ? null : (
        <div className="error">Необходимо заполнить поле name</div>
      )}
      {/* {postArray.map((item, index) => {
        return <TaskContainer item={item} index={index} key={index} {...props}/>;
      })} */}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters.map((item, index) => {
                return (
                  <Draggable
                    key={item.name}
                    draggableId={item.name}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TaskContainer
                          item={item}
                          index={index}
                          key={index}
                          {...props}
                        />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskListComponent;
