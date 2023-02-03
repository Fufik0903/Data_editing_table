import "./App.css";
import TableDatFieldContainer from "./TableDataField/TableDataFieldContainer";
import TaskListContainer from "./TaskList/TaskListContainer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <TaskListContainer />
      <TableDatFieldContainer />
    </div>
  );
}

export default App;
