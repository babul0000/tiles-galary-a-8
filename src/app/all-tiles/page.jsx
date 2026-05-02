import TileCard from "@/components/card/TileCard";
import SearchPage from "@/components/searchTiles/SearchPage";


const getTiles = async () => {
    const res = await fetch("http://localhost:3000/data.json", { cache: 'no-store' });
    if (!res.ok) return [];
    return await res.json();
};

const AllTiles = async ({ searchParams }) => {

    const sp = await searchParams;
    const search = sp?.search || "";

    const tiles = await getTiles();
    const filteredTiles = search
        ? tiles.filter(tile =>
            tile.title.toLowerCase().includes(search.toLowerCase()) ||
            tile.description.toLowerCase().includes(search.toLowerCase()) ||
            tile.category.toLowerCase().includes(search.toLowerCase()) ||
            tile.material.toLowerCase().includes(search.toLowerCase())
        )
        : tiles;

    return (
        <div className='w-11/12 mx-auto'>

            <h1 className='text-xl font-bold text-center mt-5'>
                {search ? `Search Results for "${search}"` : 'All Tiles'}
                <span className="text-sm font-normal text-gray-500 ml-2">
                    ({filteredTiles.length} {filteredTiles.length === 1 ? 'tile' : 'tiles'})
                </span>
            </h1>

            <div className="mb-10">
                <SearchPage />
            </div>


            {filteredTiles.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-400 mb-2">No tiles found</p>
                    <p className="text-gray-400 text-sm">Try searching with different keywords</p>
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredTiles.map(tile => (
                        <TileCard key={tile.id} tile={tile} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllTiles;