import React from "react";
import { debounce } from "lodash";
import DataService from "../../resources/services/DataService";

import './css/filterCharacter.css'

const FilterCharacter = ({ setFilteredCharacter, setIsLoading, setShowFiltered, setIsError }) => {
    const { getFilteredCharacter } = DataService();
    const handleChange = (e) => {
        setIsError(false);
        setIsLoading(true);
        const { value } = e.target;
        if (!value) {
            setShowFiltered(false);
            setIsLoading(false);
            return;
        }
        setShowFiltered(true);
        const debounced = debounce(async () => {
            getFilteredCharacter(value)
                .then(data => {
                    setFilteredCharacter(data.data);
                    console.log(data)
                })
                .catch(() => setIsError(true))
                .finally(() => setIsLoading(false))
        }, 500)
        debounced()

    }
    return (
        <div className="search">
            <input className="search__input" type="text" placeholder="Filter by name..." onChange={handleChange}/>
        </div>
    )
}

export default FilterCharacter;