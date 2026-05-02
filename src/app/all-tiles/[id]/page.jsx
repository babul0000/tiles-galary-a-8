import Image from 'next/image';
import React from 'react';

const CardDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://tiles-galary-a-8.vercel.app/data.json", { cache: 'no-store' });
    const users = await res.json();

    const tile = users.find(user => user.id == id);

    if (!tile) {
        return <h1 className="text-center mt-10 text-xl font-medium animate-pulse">Tile Not Found</h1>;
    }

    return (
        <div className="w-11/12 max-w-4xl mx-auto my-12">

            <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.04)] grid md:grid-cols-2 items-center card-stagger-appear">
                

                <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
                    <Image
                        src={tile.image}
                        alt={tile.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                    />

                    <div className="absolute top-6 left-6">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] shadow-sm ${tile.inStock ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                            {tile.inStock ? 'Available' : 'Sold Out'}
                        </span>
                    </div>
                </div>


                <div className="p-8 md:p-14 space-y-5">
                    <div className="animate-hero-content">
                        <p className="text-[#c5a36c] text-[11px] font-bold uppercase tracking-[0.25em] mb-1">
                            {tile.category}
                        </p>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#0a1d37] leading-tight">
                            {tile.title}
                        </h1>
                    </div>

                    <div className="animate-hero-sub-content">
                        <p className="text-2xl font-semibold text-gray-800">
                            ${tile.price} <span className="text-xs text-gray-400 font-normal ml-1">USD / SQFT</span>
                        </p>
                    </div>


                    <div className="grid grid-cols-2 gap-6 py-5 border-y border-gray-50 animate-hero-sub-content">
                        <div>
                            <p className="text-[10px] text-gray-300 uppercase font-bold tracking-widest mb-1">Material</p>
                            <p className="text-sm font-semibold text-gray-600">{tile.material}</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-300 uppercase font-bold tracking-widest mb-1">Size</p>
                            <p className="text-sm font-semibold text-gray-600">{tile.dimensions}</p>
                        </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 animate-hero-sub-content">
                        {tile.description}
                    </p>


                    <div className="pt-4 animate-hero-sub-content">
                        <button
                            className="w-full bg-[#0a1d37] text-white py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#c5a36c] transition-all duration-500 transform hover:-translate-y-1 disabled:opacity-20 shadow-lg shadow-blue-900/5"
                            disabled={!tile.inStock}
                        >
                            {tile.inStock ? "Add to Selection" : "Unavailable"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;