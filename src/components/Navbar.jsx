"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const session = authClient.useSession();
    const user = session.data?.user;
    
    const [isOpen, setIsOpen] = useState(false);

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
                
                {/* Logo Section */}
                <div className="flex gap-2 items-center">
                    <h3 className="font-black text-xl tracking-tight text-[#0a1d37]">Tile Gallery</h3>
                </div>


                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                    <li className="hover:text-black transition-colors"><Link href={"/"}>Home</Link></li>
                    <li className="hover:text-black transition-colors"><Link href={"/all-tiles"}>All Tiles</Link></li>
                    <li className="hover:text-black transition-colors"><Link href={"/profile"}>My Profile</Link></li>
                </ul>

                <div className="flex items-center gap-3">

                    {!user ? (
                        <div className="hidden sm:flex gap-3">
                            <Link href={"/signup"}>
                                <Button variant="outline" size="sm">SignUp</Button>
                            </Link>
                            <Link href={"/signin"}>
                                <Button variant="outline" size="sm">SignIn</Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center h-9 w-9 sm:h-11 sm:w-11 rounded-full border-2">
                                <Avatar className="h-full w-full rounded-full">
                                    <Avatar.Image
                                        alt={user?.name || "User"}
                                        src={user?.image}
                                        referrerPolicy="no-referrer"
                                        className="object-cover"
                                    />
                                    <Avatar.Fallback className="bg-primary text-white font-bold text-sm sm:text-lg flex items-center justify-center w-full h-full">
                                        {user?.name?.charAt(0).toUpperCase() || "U"}
                                    </Avatar.Fallback>
                                </Avatar>
                            </div>
                            <Button
                                onClick={handleSignOut}
                                size="sm"
                                color="danger"
                                variant="outline"
                                className="hidden sm:flex"
                            >
                                SignOut
                            </Button>
                        </div>
                    )}


                    <button 
                        className="md:hidden p-2 text-gray-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>


            {isOpen && (
                <div className="md:hidden pb-4 px-2 space-y-2 border-t">
                    <Link href="/" className="block py-2 text-sm font-medium" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/all-tiles" className="block py-2 text-sm font-medium" onClick={() => setIsOpen(false)}>All Tiles</Link>
                    <Link href="/profile" className="block py-2 text-sm font-medium" onClick={() => setIsOpen(false)}>My Profile</Link>
                    {!user ? (
                        <div className="flex flex-col gap-2 pt-2">
                            <Link href="/signin"><Button className="w-full" size="sm">SignIn</Button></Link>
                            <Link href="/signup"><Button className="w-full" variant="outline" size="sm">SignUp</Button></Link>
                        </div>
                    ) : (
                        <Button onClick={handleSignOut} color="danger" variant="flat" size="sm" className="w-full">Sign Out</Button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;