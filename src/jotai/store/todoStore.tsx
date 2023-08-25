import { atom } from "jotai";
interface ITodo {
  id: string;
  text: string;
  done: true | false;
}
export const todoAtom = atom<ITodo[]>([]);
