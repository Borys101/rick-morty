import axios from "axios";

const DataService = () => {
    const API_BASE = 'https://rickandmortyapi.com/api/';
    const { get } = axios;

    const getCharacters = async (page = 1) => {
        const res = await get(`${API_BASE}character?page=${page}`);
        return res;
    }

    const getFilteredCharacter = async (name) => {
        const res = await get(`${API_BASE}character?name=${name}`);
        return res;
    }

    return {
        getCharacters,
        getFilteredCharacter
    }
}

export default DataService;