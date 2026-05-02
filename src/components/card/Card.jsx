

import TileCard from './TileCard';
import Link from 'next/link';

const CardSection = async() => {
    const res = await fetch("http://localhost:3000/data.json", { cache: 'no-store' });
const users = await res.json();

console.log(users);


    return (
        <div className='w-11/12 mx-auto space-y-5'>
            <h1 className='text-2xl font-bold'>Featured Tiles</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                {
                    users.slice(0, 4).map(user => <TileCard key={user.id} tile={user}></TileCard>)
                }
                
            </div>

            <div className='flex justify-center items-center'>
                    <Link href={"/all-tiles"}>
                    <button className="bg-[#0a1d37] text-white p-3 rounded-lg hover:bg-[#981735] transition-colors shadow-lg shadow-blue-900/10">View All Tiles</button>
                    </Link>
            </div>
        </div>
    );
};

export default CardSection;