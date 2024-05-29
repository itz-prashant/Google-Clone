import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
    const [selectedMenu, setSelectedMenu] = useState("All")
    const {setImageSearch} = useContext(Context)

    useEffect(()=>{
        return ()=> setImageSearch(false)
    },[])
    const clickHandler = (menuItem)=>{
        let isTypeimages = menuItem.name === "Images"
        setSelectedMenu(menuItem.name)
        setImageSearch( isTypeimages ? true : false)
    }

    return <div className="p-[10px] pb-0 md:pr-5 md:pl-10 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col sticky">
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-5 grow">
                <Link to={"/"}>
                    <img className="hidden md:block w-[92px]" src={Logo} alt="" />
                </Link>
                <SearchInput from="searchResult"/>
            </div>
            <div className="hidden md:block">
                <ProfileIcon />
            </div>
        </div>

        <div className="flex mt-3">
            {menu.map((menu,index)=>(
                <span className={`flex items-center p-3 text-[#5f6368] cursor-pointer ${selectedMenu === menu.name ? "text-blue-500 border-b-4 border-blue-600 " : ""}`} onClick={()=>clickHandler(menu)} key={index}>
                    <span className="hidden md:block mr-2">
                        {menu.icon}
                    </span>
                    <span className="text-sm">{menu.name}</span>
                    
                </span>
            ))}
        </div>
    </div>;
};

export default SearchResultHeader;
