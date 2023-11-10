import axios from "axios";
import React, { useState } from "react";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const response=await axios.post(`http://localhost:4000/createaccount`,{formData})
        console.log("Response From Account Creation",response)
    }catch(error){

    }

    // console.log("Form submitted:", formData);
  };

  return (
   <div className="flex h-screen justify-center items-center ">
     <div className=" flex flex-col   border-2 border-blue-900 rounded-lg gap-y-4  ">
     
     <form onSubmit={handleSubmit} className="flex  flex-col m-[30px] gap-y-2">
       <div>
           <label htmlFor="name">
         <h1>Name</h1>
         </label>
         <input
         className="border rounded-md"
           type="name"
           id="name"
           name="name"
           placeholder="Full Name"
           value={formData.name}
           onChange={handleChange}
           required
         />
       </div>
       <div>
         <h1>Password</h1>
         <input
         className="border rounded-md"
           type="password"
           id="password"
           name="password"
           placeholder="Password"
           value={formData.password}
           onChange={handleChange}
           required
         />
       </div>
       <div>
         <h1>Confirm Password</h1>
         <input
         className="border rounded-md"
           type="password"
           id="confirmPassword"
           name="confirmPassword"
           placeholder="Password"
           value={formData.confirmPassword}
           onChange={handleChange}
           required
         />
       </div>
       <div className="flex justify-center"><button  className="bg-blue-400 m-2 p-1 rounded-md ">Create Account</button></div>
     </form>
     
   </div>
   </div>
  );
};

export default CreateAccount;
