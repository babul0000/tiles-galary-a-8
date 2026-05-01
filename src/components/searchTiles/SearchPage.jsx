"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchValue, setSearchValue] = useState(searchParams.get("search") || "");

    const handleSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams);

        if (searchValue) {
            params.set("search", searchValue);
        } else {
            params.delete("search");
        }
        router.push(`?${params.toString()}`, { scroll: false });
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className="relative max-w-md mx-auto my-5">
            <form onSubmit={handleSearch} className="relative flex items-center">
                <div className="relative flex-1">
                    <input
                        value={searchValue}
                        onChange={handleChange}
                        type="text"
                        placeholder="Search Tiles"
                        className="w-full pl-10 pr-4 py-2 border rounded-l-full outline-none focus:ring-2 focus:ring-slate-400 shadow-sm"
                    />
                    <FaSearch className="absolute left-4 top-3 text-gray-400" />
                </div>
                <button
                    type="submit"
                    className="bg-[#0a1d37] text-white px-5 py-2 rounded-r-full hover:bg-[#c5a36c] transition-colors font-medium"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchPage;
