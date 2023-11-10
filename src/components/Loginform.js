// Import React
import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// Define the Form component
const LoginForm = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");
 const navigate=useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`http://localhost:4000/login`, {
        accountNumber,password
      });
      console.log("response", response);
      
      const customerDetails={
        accountNumber:accountNumber,
        name:response.data.data.name
      };

      localStorage.setItem(`customerDetails`,JSON.stringify(customerDetails));

    } catch (error) {}
  };

  return (
    <div className="w-[100vw] flex  justify-center  bg-yellow-300">
      <div className=" flex flex-col  items-center  ">
        <div className= "mt-[80px] text-[60px]">Welcome To The ATM</div>

        <div className="flex mt-[150px]  border-2 border-blue-900 rounded-lg gap-y-4  ">
          <form onSubmit={handleSubmit} className="flex  flex-col m-[30px] gap-y-2">
            <div>
             <h1>Account No.</h1>
              <input
                className="border-1px rounded-md w-full  border-solid"
                type="text"
                id="accountNumber"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <h1>Password</h1>
              <input
              className="border-1px w-full rounded-md"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                  required
              />
            </div>
            <div>
                <h1>Don't have an account? <button onClick={()=>navigate("/createaccount")} className="text-blue-400">Create Account</button></h1>
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-500 m-1 p-2 border rounded-md text-bold" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
