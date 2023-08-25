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
                <span>{index+1}</span>
                <div className=" flex items-center flex-grow gap-2">
                    
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={(e) => checkboxHandler(e.target.checked, item.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                  <input
                    onChange={(e) => changeHandler(e.target.value, item.id)}
                    value={item.text}
                    readOnly={item.done}
                    type="text"
                    className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
