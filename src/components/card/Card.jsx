import React from 'react';
import TileCard from './TileCard';
import Link from 'next/link';
import SearchPage from '../searchTiles/SearchPage';


const CardSection = async ({ searchParams }) => {

    const sp = await searchParams;
    const searchTerm = sp?.search || "";

    let users = [];
    try {
        const res = await fetch("https://tiles-galary.vercel.app/data.json", {
            cache: 'no-store' 
        });
        if (!res.ok) throw new Error("Failed to fetch");
        users = await res.json();
    } catch (error) {
        console.error("Data fetching error:", error);
    }

    
    const filteredTiles = users.filter(user => 
        user.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='w-10/12 mx-auto space-y-5 py-8'>
            
            <SearchPage />

            <h1 className='text-2xl font-bold'>
                {searchTerm ? `Results for: ${searchTerm}` : "Featured Tiles"}
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {filteredTiles.length > 0 ? (
                
                    (searchTerm ? filteredTiles : filteredTiles.slice(0, 4)).map(user => (
                        <TileCard key={user.id} tile={user} />
                    ))
                ) : (
                    <div className="text-center py-10 col-span-full text-gray-500">
                        {searchTerm} নামে কোনো টাইলস পাওয়া যায়নি।
                    </div>
                )}
            </div>

            
            {!searchTerm && (
                <div className='flex justify-center items-center mt-5'>
                    <Link href={"/all-tiles"}>
                        <button className='bg-slate-900 text-white px-6 py-2 rounded-md hover:bg-slate-800 transition-all'>
                            See All Tiles
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CardSection;