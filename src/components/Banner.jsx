import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <section className="relative w-full h-[500px] lg:h-[650px] flex items-center overflow-hidden">
            
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/banner.png" 
                    alt="Premium Tile Banner"
                    fill
                    priority
                    className="object-cover object-center"
                />
                
                <div className="absolute inset-0 bg-white/10"></div>
            </div>

            
            <div className="container mx-auto px-6 lg:px-20 z-10">
                <div className="max-w-2xl space-y-6">
                    <h1 className="text-4xl lg:text-7xl font-extrabold text-[#0a1d37] leading-tight">
                        Discover Your <br />
                        <span className="italic font-serif">Perfect Aesthetic</span>
                    </h1>
                    
                    
                    <div className="w-24 h-1.5 bg-[#c5a36c]"></div>
                    
                    <p className="text-[#1e2a3a] text-lg lg:text-xl font-medium max-w-md">
                        Explore our premium collection of tiles that blend quality, style, and 
                        innovation for your dream space.
                    </p>
                    
                    <div className="pt-6">

                        <Link href="/all-tiles">
                        <button className="bg-[#0a1d37] text-white px-10 py-4 rounded-sm flex items-center gap-4 hover:bg-[#142e52] transition-all group font-bold uppercase tracking-wider text-sm">
                            Browse Now
                            <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                        </button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;