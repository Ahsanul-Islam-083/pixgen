"use client"
import { UpdateUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    console.log(user);
    return (
        <div>
            <Card className='max-w-96 mx-auto flex flex-col items-center'>
                <Avatar className='h-25 w-25'>
                    <Avatar.Image
                        alt={user?.name}
                        src={user?.image}
                        referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <h2 className='text-xl font-bold'>{user?.name}</h2>
                <p className='text-muted'>Email: {user?.email}</p>
                <UpdateUserModal/>
            </Card>
        </div>
    );
};

export default ProfilePage;