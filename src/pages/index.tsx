import Image from "next/image";
import { atom, useAtom } from "jotai";
import TodoAdd from "@/components/TodoAdd";
import TodoList from "@/components/TodoList";

export default function Home() {
  
  return (
    <div className=" ">
      <TodoAdd />
      <TodoList />
    </div>
  );
}
