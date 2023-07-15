import axios from "axios";

const BASE_URL =  "https://www.googleapis.com/customsearch/v1"

const params = {
    key:'AIzaSyCiGuou9eOtM5-hUP8IOVSY7ACNIB4FOLY',
    cx:'a5a0517789cc64295'
}


export const fetchDataFromApi = async (payload) => {

  
    const { data } = await axios.get(BASE_URL, {
        params: {...params, ...payload}
    });
    return data;
};
