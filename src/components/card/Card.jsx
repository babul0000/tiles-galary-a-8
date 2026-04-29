import React from 'react';
import AllCard from './TileCard';
import TileCard from './TileCard';
import Link from 'next/link';

const CardSection = async() => {
    const res = await fetch("https://tiles-galary.vercel.app/data.json");
const users = await res.json()

    return (
        <div>
            <h1 className='text-2xl font-bold'>Featured Tiles</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-5'>
                {
                    users.slice(0, 4).map(user => <TileCard key={user.id} tile={user}></TileCard>)
                }
                
            </div>

            <div className='flex justify-center items-center'>
                    <Link href={"/all-tiles"}>
                    <button variant="tertiary" className='bg-slate-300 px-2 py-2 rounded-md'>All Tiles</button>
                    </Link>
            </div>
        </div>
    );
};

export default CardSection;