import React, { useState } from "react";
import logo from "../assets/logo.png";
import { TextInput, Loading, CustomButton } from "../components/index";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import signup from "../assets/signup.png";

const Register = () => {

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async(data) =>{
console.log(data)
  }

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();


  return (
   <div className="bg-bgColor w-full lg:h-[110vh] h-screen flex items-center justify-center px-6">
      <div className="w-full md:w-2/3 h-fit xl:h-full 2xl:h-5/6 py-8 xl:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl">
        {/* //!Left Part */}
        <div className="w-full xl:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center">
          <div className="w-full flex gap-2 items-center mb-6 ">
            <div className="p-2 rounded text-white flex justify-center items-center w-full">
              {/* <TbSocial /> */}
              <img src={logo} alt="" className="h-40" />
            </div>
            {/* <span className="text-2xl font-semibold">ShareBuzz</span> */}
          </div>
          <div className="flex flex-col w-full justify-center place-items-center">
            <p className="text-ascent-1 text-xl font-semibold ">
             Welcome! Create a new account
            </p>
          </div>
          <form className="py-2 flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row gap-3">
            <TextInput
              name="firstName"
              placeholder="First Name"
              lable="First Name"
              type="text"
              register={register("firstname", {
                required: "First Name is required!",
              })}
              styles="w-full rounded-xl"
              lableStyle="ml-2"
              error={errors.firstname ? errors.firstname?.message : ""}
            />
             <TextInput
              name="lastName"
              placeholder="Last Name"
              lable="Last Name"
              type="text"
              register={register("lastname", {
                required: "Last Name is required!",
              })}
              styles="w-full rounded-xl"
              lableStyle="ml-2"
              error={errors.lastname ? errors.lastname?.message : ""}
            />
            </div>
         
            <TextInput
              name="email"
              placeholder="email@example.com"
              lable="Email Address"
              type="email"
              register={register("email", {
                required: "Email Address is required!",
              })}
              styles="w-full rounded-xl"
              lableStyle="ml-2"
              error={errors.email ? errors.email.message : ""}
            />
            <div className="flex gap-3 flex-row">
            <TextInput
              name="password"
              placeholder="Password"
              lable="Password"
              type="password"
              register={register("password", {
                required: "Password is required!",
              })}
              styles="w-full rounded-xl"
              lableStyle="ml-2"
              error={errors.password ? errors.password.message : ""}
            />
             <TextInput
             
              placeholder="Confirm Password"
              lable="Confirm Password"
              type="password"
              register={register("cPassword", {
                validate:(value)=>{
                  const {password}= getValues()
                  if(password !== value){
                    return "Password do not match"
                  }
                }
              })}
              styles="w-full rounded-xl"
              lableStyle="ml-2"
              error={errors.cPassword && errors.cPassword.message === "validate"? errors.cPassword?.message:""}
            />
            </div>
          
            <span className="text-right">
            <Link
              to={"/reset-password"}
              className="text-sm text-right text-blue font-semibold hover:opacity-70"
            >
              Forgot Password?
            </Link>
            </span>
            {errMsg?.message && (
              <span
                className={`text-sm ${
                  errMsg?.status === "failed"
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150fe]"
                } mt-0.5`}
              >
                {errMsg.message}
              </span>
            )}

            {isSubmitting ? (
              <Loading />
            ) : (
              <CustomButton
                type="submit"
                containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none `}
                title={"Register"}
              />
            )}
          </form>

          <p className="text-ascent-2 text-sm text-center">
            Already have an account?
            <Link
              to={"/login"}
              className="text-[#065ad8] font-semibold ml-2 cursor-pointer hover:opacity-70"
            >
              Login Here
            </Link>
          </p>
        </div>

        {/* //!Right Part */}
        <div className="hidden w-1/2 h-full lg:flex flex-col items-center justify-center">
          <div className="relative w-full flex items-center justify-center ">
            <img src={signup} alt="Bg Image" className="p-5"/>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register