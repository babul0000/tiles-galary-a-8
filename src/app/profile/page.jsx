"use client";


import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card, Spinner } from "@heroui/react";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;


    if (isPending) {
        return (
            <div className="flex justify-center mt-20">
                <Spinner size="lg" />
            </div>
        );
    }


    if (!user) {
        return <div className="text-center mt-10">Please sign in to view your profile.</div>;
    }

    return (
        <div>
            <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5 p-6 gap-4">
                <Avatar 
                    className="h-24 w-24 text-large" 
                    src={user?.image} 
                    name={user?.name?.charAt(0)}
                    isbordered="true"
                />

                <div className="text-center">
                    <h2 className="text-xl font-bold">{user?.name}</h2>
                    <p className="text-gray-500">{user?.email}</p>
                </div>

                <UpdateUserModal/>
            </Card>
        </div>
    );
};

export default ProfilePage;