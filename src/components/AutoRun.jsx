
'use client'

import Marquee from "react-fast-marquee";
import { useState, useEffect } from 'react';

const AutoRun = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://tiles-galary.vercel.app/data.json");
                const data = await res.json();
                setUser(data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };
        fetchData();
    }, []);

    if (user.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto my-10 px-4">
            <div className="flex items-center gap-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 rounded-2xl overflow-hidden py-1 pr-4">

                {/* Left Side Label with Gradient */}
                <div className="relative px-6 py-3 bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center shrink-0 shadow-lg z-10">
                    <span className="relative z-10">Latest</span>
                    {/* Decorative arrow shape */}
                    <div className="absolute top-0 -right-3 h-full w-6 bg-rose-500 skew-x-[-20deg] z-0"></div>
                </div>

                {/* Marquee Section */}
                <Marquee
                    pauseOnHover
                    speed={80}
                    gradient={true}
                    gradientColor="white"
                    gradientWidth={50}
                    className="font-medium text-gray-600 italic"
                >
                    {user.map((use) => (
                        <div key={use.id} className="flex items-center gap-2 mx-10 group cursor-pointer">
                            
                            <span className="h-2 w-2 bg-red-500 rounded-full group-hover:scale-150 transition-transform"></span>
                            <span className="group-hover:text-black transition-colors">
                                {use.description}
                            </span>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default AutoRun;