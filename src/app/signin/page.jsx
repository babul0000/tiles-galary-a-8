"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation"; 
import React from "react";
import { useForm } from "react-hook-form";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

const LoginPage = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLogin = async (data) => {

        const id = toast.loading("Verifying your credentials...");

        try {
            const { data: res, error } = await authClient.signIn.email({
                email: data.email,
                password: data.password,

            });

            if (error) {

                toast.update(id, { 
                    render: error.message || "Invalid email or password!", 
                    type: "error", 
                    isLoading: false, 
                    autoClose: 3000 
                });
                return;
            }

            if (res) {

                toast.update(id, { 
                    render: "Login SUCCESS ✅ Welcome back!", 
                    type: "success", 
                    isLoading: false, 
                    autoClose: 2000 
                });


                setTimeout(() => {
                    router.push("/");
                }, 1500);
            }

        } catch (err) {
            toast.update(id, { 
                render: "Something went wrong ❌", 
                type: "error", 
                isLoading: false, 
                autoClose: 3000 
            });
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await authClient.signIn.social({
                provider: 'google',
                callbackURL: '/'
            });
        } catch (error) {
            toast.error("Google Sign In failed!");
        }
    }

    return (
        <div className="mt-10 mb-10 flex items-center justify-center bg-base-200 px-4">
            <form
                onSubmit={handleSubmit(handleLogin)}
                className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-100"
            >
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Sign In Your Account
                </h1>

                <div className="mb-4">
                    <label className="text-sm font-semibold text-gray-700">Email</label>
                    <input
                        type="email"
                        className={`input input-bordered w-full mt-1 ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="Enter your email"
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div className="mb-6">
                    <label className="text-sm font-semibold text-gray-700">Password</label>
                    <input
                        type="password"
                        className={`input input-bordered w-full mt-1 ${errors.password ? 'border-red-500' : ''}`}
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
                        <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                    )}
                </div>

                <Button type="submit" color="secondary" className="w-full font-bold shadow-md h-11">
                    Login
                </Button>
                
                <div className="text-center p-2">OR</div>

                <Button 
                    onClick={handleGoogleSignIn} 
                    variant="outline" 
                    className="w-full font-bold border-gray-300 hover:bg-gray-50 text-blue-700"
                >
                    <GrGoogle className="text-lg " /> Sign In With Google
                </Button>

                <p className="text-center text-sm mt-3 text-gray-600">
                    Don't have an account? 
                    <span 
                        className="text-secondary font-bold cursor-pointer hover:underline ml-1"
                        onClick={() => router.push("/signup")}
                    >
                        Sign Up
                    </span>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;