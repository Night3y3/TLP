"use client";
import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock, AiOutlineEyeInvisible } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className=" flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex flex-row-reverse w-2/3 max-w-4xl">
                    <div className="w-3/5 p-5">
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-green-500 mb-2">
                                Fill your Details 😃
                            </h2>
                        </div>
                        <div className="flex flex-col items-center justify-evenly">
                            <div className="bg-gray-100 w-64 p-2 flex items-center">
                                <CgProfile className="text-gray-400 m-2" />
                                <input type="name" name="name" placeholder="Your name" className="bg-gray-100 outline-none text-sm flex-1" />
                            </div>
                            <hr className=" h-2" />
                            <div className="bg-gray-100 w-64 p-2 flex items-center">
                                <AiOutlineMail className="text-gray-400 m-2" />
                                <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                            </div>
                            <hr className=" h-2" />
                            <div className="bg-gray-100 w-64 p-2 flex items-center">
                                <AiOutlineLock className="text-gray-400 m-2" />
                                <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
                                {/* <AiOutlineEyeInvisible className="text-gray-400 " /> */}
                            </div>
                            <hr className=" h-2" />

                            <a href="#" className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">Sign Up</a>
                        </div>
                    </div>
                    <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                        <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="mb-10">Already have an Account</p>
                        <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">Sign In</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignUp;