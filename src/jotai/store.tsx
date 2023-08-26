import { atom } from "jotai";

export const firstName = atom("John");
export const lastName = atom("Harris");
//Read Only atoms or derived atoms
export const fullName = atom((get) => get(firstName) + " " + get(lastName));
