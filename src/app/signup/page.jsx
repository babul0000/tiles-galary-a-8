"use client"
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';



const LoginPage = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = async (data) => {
        console.log(data, errors, "data");


        const { data: res, error } = await authClient.signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            image: "https://example.com/image.png",



        });
        if (error) {
            alert(Error.message)
        }

        if (res) {
            alert("Registration SUCCESS")
            router.push("/signin")
        }

        console.log(res, error);


    }
    return (
        <div className="mt-5 flex items-center justify-center bg-base-200 px-4">

            <form
                onSubmit={handleSubmit(handleLogin)}
                className="w-full max-w-md bg-base-100 shadow-md rounded-xl p-6"
            >

                <h1 className="text-2xl font-bold mb-6 text-center">
                    Create Your Account
                </h1>
                <label className="text-sm font-semibold">Your Name</label>
                <input
                    type="text"
                    className="input input-bordered w-full mt-1 mb-2"
                    placeholder="Enter your name"
                    {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mb-2">
                        {errors.name.message}
                    </p>
                )}

                <label className="text-sm font-semibold">Photo URL</label>
                <input
                    type="text"
                    className="input input-bordered w-full mt-1 mb-2"
                    placeholder="Enter your photo URL"
                    {...register("photo", { required: "Photo URL is required" })}
                />
                {errors.photo && (
                    <p className="text-red-500 text-sm mb-2">
                        {errors.photo.message}
                    </p>
                )}

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
                            message: "Password must be at least 6 characters"
                        }
                    })}
                />
                {errors.password && (
                    <p className="text-red-500 text-sm mb-2">
                        {errors.password.message}
                    </p>
                )}

                <Button type="submit" variant="secondary" className="w-full mt-5">
                    Register
                </Button>

            </form>

        </div>
    );
};

export default LoginPage;