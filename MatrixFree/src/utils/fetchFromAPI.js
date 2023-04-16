import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  url: "https://youtube-v31.p.rapidapi.com/captions",

  headers: {
    "X-RapidAPI-Key": "6affee62c3msh8044a6f60266c46p171eeajsn1c5f07a7a32e",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
}; 

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};