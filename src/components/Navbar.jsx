"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const session = authClient.useSession();
    const user = session.data?.user;

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/signin");
                },
            },
        });
    };

    return (
        <div className="border-b px-4 z-50 top-0 sticky bg-white/80 backdrop-blur-md">
            <nav className="flex justify-between items-center py-4 max-w-7xl mx-auto w-full">
                
                <div className="flex gap-2 items-center">
                    <h3 className="font-black text-xl tracking-tight text-[#0a1d37]">Tile Gallery</h3>
                </div>

                <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
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
                    {!user ? (
                        <div className="flex gap-3">
                            <Link href={"/signup"}>
                                <Button variant="bordered" size="sm">
                                    SignUp
                                </Button>
                            </Link>
                            <Link href={"/signin"}>
                                <Button variant="flat" size="sm">
                                    SignIn
                                </Button>
                            </Link>
                        </div>
                    ) : (

                        <div className="flex items-center gap-4">
                            <Avatar 
                                isbordered="true"
                                className="w-8 h-8 cursor-pointer" 
                                src={user?.image} 
                                name={user?.name?.charAt(0)} 
                            />
                            <Button 
                                onClick={handleSignOut} 
                                size="sm" 
                                color="danger" 
                                variant="light"
                            >
                                SignOut
                            </Button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;