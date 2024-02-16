import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const api = "https://659ba6bbd565feee2dab699d.mockapi.io/";
  const fetchTodo = async () => {
    try {
      const res = await axios.get(`${api}/member`);
      setTodos(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const deleteTodo = async (id) => {
    try {
      const userConfirmed = window.confirm(
        "Are you sure you want to delete data"
      );
      if (userConfirmed) {
        setIsLoading(true);
        await axios.delete(`${api}/member/${id}`);
        fetchTodo();
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error, "error delete");
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []); 


  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <Nav />
      {isLoading && (
        <div className="text-[10rem] flex items-center justify-center">
          ...Loading
        </div>
      )}

      {!isLoading &&
        todos.length > 0 &&
        todos.map((todo, index) => (
          <div
            className="flex flex-col items-center border-[2px] border-red-400 rounded-[20px] w-[25%] h-[30rem] gap-2 p-[2rem]"
            key={index}
          >
            <img className="w-[15rem]" src={todo.avatar} alt="" />
            <h2 className="font-bold text-[1.5rem]">{todo.id}</h2>
            <h3 className="font-bold text-[1.5rem]">{todo.name}</h3>
            <p>{todo.createdAt}</p>
            <div className="flex gap-3 m-[2rem]">
              <Link to={`/todolist/${todo.id}`}>
                <button className="border-[2px] border-green-500 bg-green-500 rounded-[10px] w-[5rem] text-white font-bold hover:bg-green-800 hover:border-green-800">
                  Edit
                </button>
              </Link>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="border-[2px] border-red-600 bg-red-600 rounded-[10px] w-[5rem] text-white font-bold hover:bg-red-900 hover:border-red-900"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      {!isLoading && todos.length === 0 && (
        <div className="text-[10rem]">ไม่มีผู้ใช้งาน</div>
      )}
    </div>
  );
};

export default Todo;
