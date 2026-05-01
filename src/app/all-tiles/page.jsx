import TileCard from "@/components/card/TileCard";
import SearchPage from "@/components/searchTiles/SearchPage";
import { Suspense } from "react";

const AllTiles = async (searchParams) => {
    const search = searchParams?.search || "";
    const res = await fetch("https://tiles-galary.vercel.app/data.json", { cache: "no-store" });
    const data = await res.json();
    const tiles = data;


    const filteredTiles = search
        ? tiles.filter(tile =>
            tile.title.toLowerCase().includes(search.toLowerCase()) ||
            tile.description.toLowerCase().includes(search.toLowerCase()) ||
            tile.category.toLowerCase().includes(search.toLowerCase()) ||
            tile.material.toLowerCase().includes(search.toLowerCase())
        )
        : tiles;

    console.log(search, "search query");
    console.log(filteredTiles, "filtered tiles");

    return (
        <div className='w-10/12 mx-auto '>
            <h1 className='text-xl font-bold p-5'>
                {search ? `Search Results for "${search}"` : 'All Tiles'}
                <span className="text-sm font-normal text-gray-500 ml-2">
                    ({filteredTiles.length} {filteredTiles.length === 1 ? 'tile' : 'tiles'})
                </span>
            </h1>

            <SearchPage />

            {filteredTiles.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 '>
                    {
                        filteredTiles.map(tile => <TileCard key={tile.id} tile={tile}></TileCard>)
                    }
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-400 mb-2">No tiles found</p>
                    <p className="text-gray-400 text-sm">Try searching with different keywords</p>
                </div>
            )}
        </div>
    );
};

export default AllTiles;
