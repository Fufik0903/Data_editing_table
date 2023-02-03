import React, { useRef } from "react";
import "./TableDataField.css";

const TableDataFieldComponent = (props) => {
  const {
    downloadData,
    setGetData,
    isValidObj,
    getData,
    postArray,
    isValidName,
    onChange,
    data,
  } = props;
  const ref = useRef();
  return (
    <div className="container">
      <textarea
        className="form-control area"
        value={data}
        onChange={(e) => onChange(e.target.value, ref)}
        ref={ref}
      />
      {isValidObj ? null : (
        <div className="error">Вы должны ввести валидный JSON</div>
      )}
      {isValidName ? null : (
        <div className="error">Обязательно должно быть поле name</div>
      )}
      <div className="btn-container">
        <button className="btn btn-outline-secondary" onClick={downloadData}>
          Загрузить данные в таблицу
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            setGetData(true);
          }}
        >
          Получить данные из таблицы
        </button>
      </div>
      {getData ? <div>{JSON.stringify(postArray)}</div> : null}
    </div>
  );
};

export default TableDataFieldComponent;
