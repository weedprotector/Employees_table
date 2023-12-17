import './date-filter.css'

const DateFilter = ({onChangeSort, options, value}) => {

    const handleChange = (e) => {
        onChangeSort(e.target.value)
    }

    return (
        <select
            className="sort-select"
            value={value}
            onChange={handleChange}>
            <option disabled value=''>Сортировать по:</option>
            {options.map(option => {
                return (
                    <option
                        key={option.value}
                        value={option.value}>
                        {option.name}
                    </option>
                )
            })}
        </select>
    )
}

export default DateFilter