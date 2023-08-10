import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import SimpleTodosList from "./components/todo_list.component";
import CreateTodo from "./components/create-todo.compenent";
import EditTodo from './components/edit-todo.compenent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SimpleTodosList />} exact />
        <Route path="/create" element={<CreateTodo />} />
        <Route path="/update/:id" element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
