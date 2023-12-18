import { useState } from "react"

import './search-panel.css'

const SearchPanel = ({updateNameFilter}) => {

    const [term, setTerm] = useState('')

    const handleChange = (e) => {
        const term = e.target.value
        setTerm(term)
        updateNameFilter(term)
    }
    
    return (
        <input
            className="search__input"
            type="text" 
            placeholder="Найти сотрудника" 
            value={term}
            onChange={handleChange}
            />
    )
}

export default SearchPanel