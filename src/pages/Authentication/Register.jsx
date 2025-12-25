import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin/SocialLogin";

const Register = () => {
    const {register,handleSubmit,formState:{errors}}= useForm()
    const {createUser}=useAuth()
    const OnSubmit = data =>{
        console.log(data)
        createUser(data.email,data.password)
        .then(result=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.log(error)
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit(OnSubmit)} className="fieldset">
        <label className="label">Email</label>
        <input type="email"{...register('email',{required:true})} className="input" placeholder="Email" />
        {errors.email?.type==="required" && <p className="text-red-500"> Email is required </p>}
        <label className="label">Password</label>
        <input type="password" {...register('password',{required:true,minLength:6})} className="input" placeholder="Password" />
        {
            errors.password?.type==='required' && <p className="text-red-500">Password is required </p>
        }
          {
            errors.password?.type==='minLength' && <p className="text-red-500">Password is 6 chracters or more required </p>
        }
        <button className="btn btn-primary mt-4">Register</button>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
