"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { GrGoogle } from "react-icons/gr";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLogin = async (data) => {
        console.log(data);

        try {
            const { data: res, error } = await authClient.signIn.email({
                email: data.email,
                password: data.password,
                callbackURL: "/",
            });

            if (error) {
                alert(error.message);
                return;
            }

            if (res) {
                alert("Login SUCCESS ✅");
            }

            console.log(res);
        } catch (err) {
            console.error(err);
            alert("Something went wrong ❌");
        }


    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: 'google'
        })
    }

    return (
        <div className="mt-5 flex items-center justify-center bg-base-200 px-4 ">
            <form
                onSubmit={handleSubmit(handleLogin)}
                className="w-full max-w-md bg-base-100 shadow-md rounded-xl p-6"
            >
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Sign In Your Account
                </h1>


                <label className="text-sm font-semibold">Email</label>
                <input
                    type="email"
                    className="input input-bordered w-full mt-1 mb-2"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mb-2">
                        {errors.email.message}
                    </p>
                )}


                <label className="text-sm font-semibold">Password</label>
                <input
                    type="password"
                    className="input input-bordered w-full mt-1 mb-2"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        },
                    })}
                />
                {errors.password && (
                    <p className="text-red-500 text-sm mb-2">
                        {errors.password.message}
                    </p>
                )}

                <Button type="submit" variant="secondary" className="w-full mt-5">
                    Login
                </Button>
                <p className="text-center my-2">OR</p>

                <Button onClick={handleGoogleSignIn} variant="primary" className={'w-full'}><GrGoogle /> Sign In With Google</Button>
            </form>

        </div>
    );
};

export default LoginPage;