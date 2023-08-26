import Image from "next/image";
import { atom, useAtom } from "jotai";
import TodoAdd from "@/components/TodoAdd";
import TodoList from "@/components/TodoList";
import { firstName, lastName, fullName } from "@/jotai/store";
import { useEffect } from "react";

export default function Home() {
  const [fName, setFname] = useAtom(firstName)
  const [lName, setLname] = useAtom(lastName)
  const [fuName] = useAtom(fullName)
  console.log(fuName)
  useEffect(()=>{
    setFname("Dipta")
  },[])
  return (
    <div className=" ">
      <TodoAdd />
      <TodoList />
    </div>
  );
}
