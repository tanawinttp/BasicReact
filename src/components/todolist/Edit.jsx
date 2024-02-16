import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Edit = () => {
  const { id } = useParams();
  const [Todo, setTodo] = useState({
    name: "",
  });

  const api = "https://659ba6bbd565feee2dab699d.mockapi.io/";
  const fetchTodo = async (todoId) => {
    try {
      const res = await axios.get(`${api}/member/${todoId}`);
      setTodo(res.data);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    fetchTodo(id);
  }, [id]);

  const handleNameChange = (event) => {
    setTodo((previousState) => ({
      ...previousState,
      name: event.target.value,
    }));
  };

  const updateName = async () => {
    try {
      const userConfirmed = window.confirm(
        "Are you sure you want to edit Name"
      );
      if (userConfirmed) {
        await axios.put(`${api}/member/${id}`, {
          name: Todo.name,
        });
        alert("Update successful");
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[2rem] m-4 font-bold">Helle Edit page {id}</div>
      <div className="flex flex-col items-center border-[2px] border-red-400 rounded-[20px] w-[25%] h-[30rem] gap-2 p-[2rem]">
        <img className="w-[15rem]" src={Todo.avatar} alt="" />
        <h3>{Todo.name}</h3>
        <input
          className="font-bold text-[1.5rem] border-[2px] text-center"
          type="text"
          onChange={handleNameChange}
          value={Todo.name}
        />
        <Link to={"/todolist"}>
          <button
            onClick={updateName}
            className="my-10 border-[2px] border-red-600 bg-red-600 rounded-[10px] w-[5rem] text-white font-bold hover:bg-red-900 hover:border-red-900"
          >
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Edit;
