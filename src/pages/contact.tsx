import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
interface IState {
  fName: string;
  lName: string;
}
const Contact = () => {
  const [formData, setFormData] = useState<IState>({} as IState);
  const [key, setKey] = useState(+new Date())


  const updateStateData = (data: string, field: keyof IState) => {
    const cloneState = { ...formData };
    cloneState[field] = data;
    setFormData(cloneState);
  };
  
  const handleSubmit = ()=>{
    console.log(formData);
  }
  const handleReset = ()=>{
    setFormData({} as IState)
  }
  return (
    <div className=" mt-5 ">
      <div className="flex gap-3">
        <Input
          value={formData?.fName}
          onChange={(e) => updateStateData(e.target.value, "fName")}
          placeholder="Enter first name"
        />
        <Input
          onChange={(e) => updateStateData(e.target.value, "lName")}
          value={formData?.lName}
          placeholder="Enter last name"
        />
      </div>
      <div className=" mt-3 flex justify-end gap-2">
        <Button onClick={handleSubmit} variant="default">Submit</Button>
        <Button onClick={handleReset} variant="default" className=" bg-red-700">Reset</Button>

      </div>
    </div>
  );
};

export default Contact;
