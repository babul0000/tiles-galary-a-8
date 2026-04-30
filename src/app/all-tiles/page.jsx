import TileCard from '@/components/card/TileCard';
import React from 'react';
import data from '@/../public/data.json';
import HomeCard from '@/components/homepage/HomeCard';

const AllTiles = async() => {
    // Use local data instead of external URL to avoid CORS issues
    const tiles = data;
    
    return (
        
        <div className='w-10/12 mx-auto '>
            <h1 className='text-xl font-bold p-5'>All Tiles</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 '>
            {
                tiles.map(tile => <HomeCard key={tile.id} tile={tile}></HomeCard>)
            }
        </div>
        </div>
    );
};

export default AllTiles;
