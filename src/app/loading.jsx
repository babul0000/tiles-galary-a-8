'use client'

import { motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a1d37]">

            
            <div className="relative flex items-center justify-center">

                
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 border-t-2 border-b-2 border-primary rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                />

                
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute w-16 h-16 border-l-2 border-r-2 border-purple-500 rounded-full"
                />

                
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#fff]"
                />
            </div>

            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-8 flex flex-col items-center gap-2"
            >
                <h2 className="text-xl font-bold tracking-[0.2em] text-white uppercase">
                    Tile Gallery
                </h2>
                <div className="flex gap-1">
                    <span className="text-gray-400 text-xs tracking-widest">LOADING</span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-primary font-bold"
                    >
                        ...
                    </motion.span>
                </div>
            </motion.div>

            
            <div className="mt-6 w-48 h-[2px] bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                />
            </div>

        </div>
    );
};

export default Loading;