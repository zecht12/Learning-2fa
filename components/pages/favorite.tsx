import React, { useEffect, useState } from 'react';
import { getFavoritesByEmail } from '@/data/favorite';
import Image from 'next/image';
import { currentUser } from '@/lib/auth';

const FavoritePaging = async () => {
    const user = await currentUser();
    const favorites = await getFavoritesByEmail(user?.email ?? '');

    const containerHeight = favorites.length > 4 ? 'auto' : 'screen';

    return (
        <div className={`h-${containerHeight} w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 md:py-24 py-14 px-4 flex item-start justify-center relative`}>
            <div className="w-full grid md:grid-cols-4 gap-2">
                {favorites.map((favorite, index) => (
                    <div key={index} className="relative">
                        <Image src={favorite?.image ?? ''} width={300} height={300} className='md:w-[450px] w-full md:h-[450px] h-[500px]' alt={`Favorite Image ${index}`} />
                    </div>
                ))}

            </div>
        </div>
    );
};

export default FavoritePaging;