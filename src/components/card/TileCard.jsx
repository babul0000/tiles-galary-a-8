import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TileCard = ({ tile }) => {
    return (
        <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
            
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    className="object-cover "
                />

                <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${tile.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {tile.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                </div>

                <div className="absolute bottom-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-gray-800 uppercase tracking-tighter">
                        {tile.category}
                    </span>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-[#0a1d37] line-clamp-1 group-hover:text-[#c5a36c] transition-colors">
                        {tile.title}
                    </h3>
                </div>

                <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
                    {tile.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-4 border-y border-gray-50 py-3">
                    <div className="text-xs text-gray-400">
                        Material: <span className="text-gray-700 font-medium">{tile.material}</span>
                    </div>
                    <div className="text-xs text-gray-400 text-right">
                        Size: <span className="text-gray-700 font-medium">{tile.dimensions}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <div>
                        <span className="text-sm text-gray-400 block uppercase text-[10px] font-bold">Price per sq/ft</span>
                        <span className="text-xl font-black text-[#0a1d37]">${tile.price}</span>
                    </div>
                    
                    <Link href={`/all-tiles/${tile.id}`}>
                    <button className="bg-[#0a1d37] text-white p-3 rounded-lg hover:bg-[#c5a36c] transition-colors shadow-lg shadow-blue-900/10">
                        View Details
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default TileCard;