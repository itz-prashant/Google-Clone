import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"
const params = {
    key: "AIzaSyC_aJTR9hmxfPx-40AlOHUCDh_0vnM5lHQ",
    cx: "5469fa2bc6e2348e7"
}
export const fetchDataFromApi = async(payload) => {
    const {data} = await axios.get(BASE_URL,{
        params: {...params, ...payload}
    })
    return data;
};
