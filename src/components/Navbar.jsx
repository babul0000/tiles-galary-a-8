"use client";
// import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    // const userData = authClient.useSession();
    // const user = userData.data?.user;

    // const handleSignOut = async () => {
    //     await authClient.signOut();
    // }

    return (
        <div className="border-b px-4 z-50 top-0 sticky bg-white/80 backdrop-blur-md">
    <nav className="flex justify-between items-center py-4 max-w-7xl mx-auto w-full">
        
        <div className="flex gap-2 items-center">
            <h3 className="font-black text-xl tracking-tight text-[#0a1d37]">Tile Gallery</h3>
        </div>

        
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <li className="hover:text-black transition-colors">
                <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-black transition-colors">
                <Link href={"/all-tiles"}>All Tiles</Link>
            </li>
            <li className="hover:text-black transition-colors">
                <Link href={"/profile"}>My Profile</Link>
            </li>
        </ul>

        
        <div className="flex items-center gap-3">
            <Link href={"/signup"}>
                <Button variant="outline" >
                    SignUp
                </Button>
            </Link>
            <Link href={"/signin"}>
                <Button variant="outline">
                    SignIn
                </Button>
            </Link>
        </div>
    </nav>
</div>
    );
};

export default Navbar;