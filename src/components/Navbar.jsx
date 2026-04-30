"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const session = authClient.useSession();
    const user = session.data?.user;

    
    const isAuthPage = pathname === "/signin" || pathname === "/signup";

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
                    <li className="hover:text-black transition-colors"><Link href={"/"}>Home</Link></li>
                    <li className="hover:text-black transition-colors"><Link href={"/all-tiles"}>All Tiles</Link></li>
                    <li className="hover:text-black transition-colors"><Link href={"/profile"}>My Profile</Link></li>
                </ul>

                <div className="flex items-center gap-3">

                    {(!user) ? (
                        <div className="flex gap-3">
                            <Link href={"/signup"}>
                                <Button variant="outline" size="sm">SignUp</Button>
                            </Link>
                            <Link href={"/signin"}>
                                <Button variant="outline" size="sm">SignIn</Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1">

                            <div className="flex items-center justify-center h-11 w-11 rounded-full border-2">

                                <Avatar className="h-full w-full rounded-full ">
                                    <Avatar.Image
                                        alt={user?.name || "User"}
                                        src={user?.image}
                                        referrerPolicy="no-referrer"
                                        className="object-cover"
                                    />
                                    <Avatar.Fallback className="bg-primary text-white font-bold text-lg flex items-center justify-center w-full h-full">
                                        {user?.name?.charAt(0).toUpperCase() || "U"}
                                    </Avatar.Fallback>
                                </Avatar>
                            </div>

                            <Button
                                onClick={handleSignOut}
                                size="sm"
                                color="danger"
                                variant="outline"
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