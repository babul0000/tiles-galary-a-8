import Image from 'next/image';
import React from 'react';

const CardDetails = async ({ params }) => {
    const { id } = await params; 

    const res = await fetch("https://tiles-galary.vercel.app/data.json");
    const users = await res.json();

    const tile = users.find(user => user.id == id);

    if (!tile) {
        return <h1 className="text-center mt-10 text-2xl">Tile Not Found</h1>;
    }

    return (
        <div className="w-11/12 mx-auto p-2">
            <div className="grid md:grid-cols-2 gap-10 items-center">

                
                <div className="relative w-full h-[350px] md:h-[450px]">
                    <Image
                        src={tile.image}
                        alt={tile.title}
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>

                
                <div className="space-y-5">

                    
                    <h1 className="text-3xl md:text-4xl font-bold">
                        {tile.title}
                    </h1>

                    
                    <p className="text-2xl font-semibold text-green-600">
                        ${tile.price}
                    </p>

                    
                    <div className="space-y-2 text-gray-700">
                        <p><span className="font-semibold">Category:</span> {tile.category}</p>
                        <p><span className="font-semibold">Material:</span> {tile.material}</p>
                        <p><span className="font-semibold">Dimensions:</span> {tile.dimensions}</p>
                    </div>

                    
                    <p className="font-medium">
                        Status:{" "}
                        {tile.inStock ? (
                            <span className="text-green-500">In Stock</span>
                        ) : (
                            <span className="text-red-500">Out of Stock</span>
                        )}
                    </p>

                    
                    <p className="text-gray-600 leading-relaxed">
                        {tile.description}
                    </p>

                    
                    <button
                        className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition disabled:opacity-50"
                        disabled={tile.inStock}
                    >
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>
    );
};

export default CardDetails;