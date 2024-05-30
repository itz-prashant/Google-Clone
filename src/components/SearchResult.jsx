import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import Pagination from "./Pagination";
import { Context } from "../utils/ContextApi";

const SearchResult = () => {
    const [result, setSearchResult] = useState()
    const {query,startIndex} = useParams()
    const {imageSearch} = useContext(Context)

    useEffect(()=>{
        fetchSearchResult()
    },[query,startIndex, imageSearch])

    const fetchSearchResult = ()=>{
        let payload = {q:query, start: startIndex}
        if(imageSearch){
            payload.searchType = "image"
        }
        fetchDataFromApi(payload).then((res)=>{
            setSearchResult(res)
        })
    }

    if(!result) return
    const {items, queries, searchInformation} = result

    return <div className="flex flex-col min-h-[100vh]">
        <SearchResultHeader />
        <main className="grow p-3 md:pr-5 pb-0  md:pl-10">
            <div className="flex text-sm text-[#70757a]">
                {`About ${searchInformation.formattedTotalResults} results in (${searchInformation.searchTime})`}
            </div>
            {!imageSearch ? (<>
                {items.map((item,index)=>(
                    <SearchedItemTemplate key={index} data={item}/>
                ))}
            </>) : (
                <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    {items.map((item,index)=>(
                    <SearchedImageItemTemplate key={index} data={item}/>
                ))}
                </div>
            )}
            <Pagination queries={queries}/>
        </main>
        <Footer />
    </div>
};
export default SearchResult;
