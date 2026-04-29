import TileCard from '@/components/card/TileCard';
import React from 'react';

const AllTiles = async() => {
    const res = await fetch("https://tiles-galary.vercel.app/data.json");
const users = await res.json()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {
                users.map(user => <TileCard key={user.id} tile={user}></TileCard>)
            }
        </div>
    );
};

export default AllTiles;