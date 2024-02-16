import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full bg-slate-500 h-[5rem] flex justify-center ">
      <Link className="items-center flex" to={"/"}>
        <a
          className="border-[2px] border-red-600 bg-red-600 rounded-[10px] text-[2rem] text-white font-bold hover:bg-red-900 hover:border-red-900"
          href=""
        >
          Home
        </a>
      </Link>
    </div>
  );
};

export default Nav;
