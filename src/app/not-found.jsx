'use client'

import Link from "next/link";
import { motion } from "framer-motion";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a1d37] text-white px-4 relative overflow-hidden">

            {/* Background Decorative Circles */}
            <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-pink-600/20 rounded-full blur-[120px]" />

            <div className="text-center z-10">
                {/* Animated 404 with Glow */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-2xl"
                >
                    404
                </motion.h1>

                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight">
                        Oops! Page not found.
                    </h2>
                    <p className="mt-3 text-gray-400 max-w-sm mx-auto">
                        আপনি যে পেজটি খুঁজছেন তা হয়তো সরানো হয়েছে বা আপনি ভুল ইউআরএল টাইপ করেছেন।
                    </p>
                </motion.div>

                {/* Home Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10"
                >
                    <Link href="/">
                        <button className="relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-primary border-2 border-transparent rounded-full hover:bg-transparent hover:border-white group">
                            <span className="relative z-10">Go Back Home</span>
                            <div className="absolute inset-0 transition-all duration-200 rounded-full group-hover:scale-105 bg-white/5 blur-sm"></div>
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFoundPage;