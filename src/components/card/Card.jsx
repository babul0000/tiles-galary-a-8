import TileCard from './TileCard';
import Link from 'next/link';

const CardSection = async() => {
    const res = await fetch("https://tiles-galary-a-8.vercel.app/data.json", { cache: 'no-store' });
    const users = await res.json();

    return (
        <div className='w-11/12 mx-auto space-y-8 my-10'>
            {/* Title with Animation */}
            <h1 className='text-3xl font-bold text-[#0a1d37] animate-hero-content'>
                Featured Tiles
            </h1>

            {/* Grid with Staggered Animation */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                {
                    users.slice(0, 4).map((user, index) => (
                        <div 
                            key={user.id} 
                            className='card-stagger-appear' 
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <TileCard tile={user} />
                        </div>
                    ))
                }
            </div>

            {/* Button with Hover Animation */}
            <div className='flex justify-center items-center pt-5'>
                <Link href={"/all-tiles"}>
                    <button className="bg-[#0a1d37] text-white px-8 py-3 rounded-md hover:bg-[#c5a36c] transition-all duration-300 transform hover:-translate-y-1 shadow-xl font-semibold animate-hero-sub-content">
                        View All Tiles
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CardSection;