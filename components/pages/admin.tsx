import { UserRole, User, Favorite } from '@prisma/client';
import RoleGate from '@/components/shared/role-gate';
import { db } from '@/lib/db';
import { Button } from '../ui/button';

const AdminPaging = async () => {
    const fetchedUsers = await db.user.findMany();
    const fetchedFav = await db.favorite.findMany();

    async function deleteUser(userId: string) {
        await db.user.delete({
            where: { id: userId },
        });
    }
    async function deleteFavorite(favoriteId: string) {
        await db.favorite.delete({
            where: { id: favoriteId },
        });
    }

    return (
        <div className="h-auto w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 py-24 px-4">
            <RoleGate allowedRole={UserRole.ADMIN}>
                <h1 className="text-white text-2xl font-bold mb-4 text-center">Admin Panel</h1>
                <div className="overflow-x-auto">
                    <h2 className="text-white text-lg font-bold mb-2">All Users</h2>
                    <table className="w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Role
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Two Factor
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {fetchedUsers.map((user: User) => (
                                <tr key={user.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {user.isTwoFactorEnabled ? 'Enabled' : 'Disabled'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="overflow-x-auto mt-8">
                    <h2 className="text-white text-lg font-bold mb-2">All Favorites</h2>
                    <table className="w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Image
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {fetchedFav.map((Fav: Favorite) => (
                                <tr key={Fav.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{Fav.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{Fav.image}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </RoleGate>
        </div>
    );
};

export default AdminPaging;
