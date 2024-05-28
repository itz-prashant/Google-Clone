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
    const {query,startindex} = useParams()
    const {imageSearch} = useContext(Context)

    useEffect(()=>{
        fetchSearchResult()
    },[query,startindex, imageSearch])

    const fetchSearchResult = ()=>{
        let payload = {q:query, start: startindex}
        if(imageSearch){
            payload.searchType = "image"
        }
        fetchDataFromApi(payload).then((res)=>{
            console.log(res);
            // setSearchResult(res)
        })
    }

    if(!result) return
    const {items, queries, searchInformation} = result

    return <div className="flex flex-col min-h-[100vh]">
        <SearchResultHeader />
        <main className="grow p-3 pb-0 md:pr-5 md:pl-20"></main>
        <Footer />
    </div>;
};

export default SearchResult;
