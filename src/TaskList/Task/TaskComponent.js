import React from "react";
import "./../TaskList.css";

const TaskComponent = (props) => {
  const {
    item,
    index,
    isEditMode,
    deleteItem,
    itemName,
    itemValue,
    saveEditingItem,
    setItemValue,
    setItemName,
    setIsEditMode,
  } = props;
  return (
    <div className="itemContainer" draggable={true}>
      <div className="item">
        <span>{index + 1}</span>
      </div>
      {isEditMode ? (
        <>
          <textarea
            className="form-control area"
            placeholder="name"
            autoFocus
            value={itemName}
            onChange={(e) => {
              setItemName(e.target.value);
            }}
          />
          <textarea
            className="form-control area"
            placeholder="value"
            value={itemValue}
            onChange={(e) => {
              setItemValue(e.target.value);
            }}
          />
          <div>
            <button
              className="btn btn-outline-secondary"
              onClick={saveEditingItem}
            >
              Сохранить
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                setIsEditMode(false);
              }}
            >
              Отменить
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="item">
            <span>{item.name}</span>
            <span>{item.value}</span>
          </div>
          <div className="item">
            <button
              className="button edit"
              onClick={() => {
                setIsEditMode(true);
              }}
            />
            <button className="button delete" onClick={deleteItem} />
          </div>
        </>
      )}
    </div>
  );
};
export default TaskComponent;
