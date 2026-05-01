"use client"
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SignupPage = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignup = async (data) => {

        const id = toast.loading("Processing your registration...");

        try {

            const { data: res, error } = await authClient.signUp.email({
                name: data.name,
                email: data.email,
                password: data.password,
                image: data.photo,
            });


            if (error) {
                toast.update(id, { 
                    render: error.message || "Registration failed!", 
                    type: "error", 
                    isLoading: false, 
                    autoClose: 3000 
                });
                return;
            }


            if (res) {
                await authClient.signOut(); 

                toast.update(id, { 
                    render: "Registration Successful! Please Sign In now.", 
                    type: "success", 
                    isLoading: false, 
                    autoClose: 2000 
                });
                

                setTimeout(() => {
                    router.push("/signin");
                }, 2000);
            }
        } catch (err) {
            toast.update(id, { 
                render: "Something went wrong. Try again!", 
                type: "error", 
                isLoading: false, 
                autoClose: 3000 
            });
        }
    }

    return (
        <div className="mt-10 mb-10 flex items-center justify-center bg-base-200 px-4">
            <form
                onSubmit={handleSubmit(handleSignup)}
                className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-100"
            >
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Create Your Account
                </h1>

                <div className="mb-4">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input
                        type="text"
                        className={`input input-bordered w-full mt-1 ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="Enter your name"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>


                <div className="mb-4">
                    <label className="text-sm font-semibold text-gray-700">Photo URL</label>
                    <input
                        type="text"
                        className={`input input-bordered w-full mt-1 ${errors.photo ? 'border-red-500' : ''}`}
                        placeholder="https://example.com/photo.jpg"
                        {...register("photo", { required: "Photo URL is required" })}
                    />
                    {errors.photo && <p className="text-red-500 text-xs mt-1">{errors.photo.message}</p>}
                </div>


                <div className="mb-4">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input
                        type="email"
                        className={`input input-bordered w-full mt-1 ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="example@mail.com"
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>



                

                <div className="mb-6">
                    <label className="text-sm font-semibold text-gray-700">Password</label>
                    <input
                        type="password"
                        className={`input input-bordered w-full mt-1 ${errors.password ? 'border-red-500' : ''}`}
                        placeholder="••••••••"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be at least 6 characters" }
                        })}
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>




                <Button 
                    type="submit" 
                    color="secondary" 
                    className="w-full font-bold shadow-md h-11"
                >
                    Register Now
                </Button>

                <p className="text-center text-sm mt-6 text-gray-600">
                    Already have an account? 
                    <span 
                        className="text-secondary font-bold cursor-pointer hover:underline ml-1"
                        onClick={() => router.push("/signin")}
                    >
                        Sign In
                    </span>
                </p>
            </form>
        </div>
    );
};

export default SignupPage;