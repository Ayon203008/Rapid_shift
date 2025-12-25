import React from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    const onSubmit =(data)=>{
        console.log(data)
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email')} className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" {...register('password',{
            minLength:6,
            required:true
          })} className="input" placeholder="Password" />
          {errors.password?.type==='required' && <p className="text-red-50"> Password is required</p>}
          {errors.password?.type==='minLength' && <p className="text-red-400"> Password must be in 6 chracters or long</p>}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;











