import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {

    const [searchQueary, setSearchQueary] = useState("")

    return <div id="searchBox" className="h-[46px] w-full md:w-[584px] flex items-center px-4 gap-3 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:border-0 hover:shadow-lg focus-within:border-0 focus-within:shadow-lg ">
        <AiOutlineSearch size={18} color="#9aa0a6"/>
        <input type="text" onChange={(e)=>setSearchQueary(e.target.value)}  onkeyup={((e)=> console.log(e.target.value))} value={searchQueary} autoFocus
        className="grow outline-none text-black/[0.87] "/>
        <div className="flex items-centergap-3">
            {searchQueary && (
                <IoMdClose size={24} color="#70757a" className="cursor-pointer" onClick={()=>setSearchQueary("")}/>
            )}
            <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="" />
            <img className="h-6 w-6 cursor-pointer" src={ImageIcon} alt="" />
        </div>
    </div>;
};

export default SearchInput;
