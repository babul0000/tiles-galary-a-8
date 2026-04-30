"use client";

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { redirect } from "next/navigation";

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;


    return (
        <div>
            <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5">

                <div className="flex items-center justify-center h-20 w-20 rounded-full border-2 border-primary/30 hover:border-primary transition-all duration-300 shadow-md overflow-hidden bg-gray-50">
                    <Avatar className="h-full w-full rounded-full">
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



                <h2 className="text-xl font-bold">{user?.name}</h2>
                <p className="text-muted">{user?.email}</p>

                <UpdateUserModal />
            </Card>
        </div>
    );
};

export default ProfilePage;