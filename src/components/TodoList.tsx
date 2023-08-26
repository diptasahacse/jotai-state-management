import { todoAtom } from "@/jotai/store/todoStore";
import { useAtom } from "jotai";
import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useAtom(todoAtom);
  const changeHandler = (value: string, id: string) => {
    const cloneState = [...todo];
    const todoItemIndex = cloneState.findIndex((item) => item.id === id);
    if (!cloneState[todoItemIndex].done) {
      cloneState[todoItemIndex].text = value;
      setTodo(cloneState);
    }
  };
  const deleteHandler = (id: string) => {
    const isDone = todo.find((item) => item.id === id)?.done;
    if (!isDone) {
      const updateData = todo.filter((item) => item.id !== id);
      setTodo(updateData);
    }
  };
  const checkboxHandler = (isChecked: boolean, id: string) => {
    const cloneState = [...todo];
    const todoItemIndex = cloneState.findIndex((item) => item.id === id);
    if (!cloneState[todoItemIndex].done && isChecked) {
      cloneState[todoItemIndex].done = isChecked;
      setTodo(cloneState);
    }
  };
  return (
    <div className=" mt-5 border p-5 rounded-lg">
      <h2 className="font-bold text-xl ">All Todo List: {todo.length}</h2>
      <hr className="mt-2 mb-5" />
      <div>
        {todo.length > 0 ? (
          <div>
            {todo.map((item, index) => (
              <div className=" mb-3 flex gap-2 items-center" key={item.id}>
                <span className={` h-7 rounded-full w-7 flex justify-center items-center ${item.done ? "bg-green-500" :" bg-red-400"}`}>{index+1}</span>
                <div className=" flex items-center flex-grow gap-2">
                    
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={(e) => checkboxHandler(e.target.checked, item.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  "
                  ></input>
                  <input
                    onChange={(e) => changeHandler(e.target.value, item.id)}
                    value={item.text}
                    readOnly={item.done}
                    type="text"
                    title={item.done ? "Completed":""}
                    className={`w-full p-2 text-gray-900 border ${item.done ? "border-green-600 bg-[#83ff0008] cursor-not-allowed": "border-gray-300 focus:border-blue-600"} rounded-lg bg-gray-50 sm:text-xs focus:outline-none focus:ring-0  `}
                  ></input>
                </div>
                <button onClick={() => deleteHandler(item.id)}>
                  {item.done ? "✔" : "❌"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>Empty</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
