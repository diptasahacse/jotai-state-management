import { todoAtom } from "@/jotai/store/todoStore";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { v4 } from "uuid";

const TodoAdd = () => {
  const [todoValue, setTodoValue] = useState("");
  const [, setTodo] = useAtom(todoAtom);
  const todoHandler = () => {
    if (todoValue) {
      const data = {
        id: v4(),
        text: todoValue,
        done: false,
      };
      setTodo((preData) => [...preData, data]);
    }
    setTodoValue("")
  };

  return (
    <div className=" mt-3">
      <div className="relative z-0 w-full mb-6 group">
        <input
          onChange={(e) => setTodoValue(e.target.value)}
          type="text"
          value={todoValue}
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Task
        </label>
      </div>

      <button
        onClick={todoHandler}
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Add
      </button>
    </div>
  );
};

export default TodoAdd;
