import Checkbox from "./components/Checkbox";
import Click from "./components/Click";
import { Link } from "react-router-dom";

import Video from "./components/Video";
import Image from "./components/Image";

const App = () => {
  const todoList = [
    {
      text: "coding react ",
      isChecked: false,
    },
    {
      text: "doing document react ",
      isChecked: true,
    },
    {
      text: "test react ",
      isChecked: false,
    },
  ];

  return (
    <div>
      {todoList.map((todo, index) => (
        <Checkbox key={index} text={todo.text} isChecked={todo.isChecked} />
      ))}
      <Click />
      <Video
        isPlaying={false}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
      <Image imageUrl="https://i.pinimg.com/474x/76/d5/ba/76d5ba108f178a164aa9a984f3ebb7c1.jpg" />
      <Link to={"/todolist"}>
        <button className="w-[16rem] rounded-md shadow-2xl bg-gray-800 mt-[3rem] px-3 py-3 mr-[10rem] text-[1.5rem]  leading-6 text-white hover:bg-gray-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
          Go to TodoList
        </button>
      </Link>
    </div>
  );
};

export default App;
