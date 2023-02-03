import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_data } from "../redux/ActionCreators/ActionCreators";
import TableDataFieldComponent from "./TableDataFieldComponent";

const TableDatFieldContainer = () => {
  const [data, setData] = useState();
  const [getData, setGetData] = useState(false);
  const [isValidObj, setIsValidObj] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const { postArray } = useSelector((state) => state.data);
  const [textRef, setTextRef] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.style.height = "0px";
      const taHeight = textRef.current.scrollHeight;
      textRef.current.style.height = taHeight + "px";
    }
  }, [data]);

  const onChange = (text, ref) => {
    setData(text);
    setTextRef(ref);
  };
  const downloadData = () => {
    if (isJSON(data)) {
      setIsValidObj(true);
      setGetData(false);
      setData("");
    } else {
      setIsValidObj(false);
    }
  };

  const isJSON = (str) => {
    try {
      let parseObj = JSON.parse(str);
      if (parseObj.name && /\S/.test(parseObj.name)) {
        dispatch(set_data(parseObj));
        setIsValidName(true);
      } else {
        setIsValidName(false);
      }
    } catch (e) {
      console.log("Object a not JSON format");
      return false;
    }
    return true;
  };

  return (
    <TableDataFieldComponent
      downloadData={downloadData}
      setGetData={setGetData}
      isValidObj={isValidObj}
      postArray={postArray}
      getData={getData}
      isValidName={isValidName}
      onChange={onChange}
      data={data}
    />
  );
};

export default TableDatFieldContainer;
