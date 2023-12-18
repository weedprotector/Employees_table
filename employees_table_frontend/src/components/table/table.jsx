import { useEffect, useState } from 'react';
import DateFilter from '../date-filter/date-filter';

import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

import './table.css'

const Table = ({data, nameFilter}) => {
    const [dateSort, setDateSort] = useState('')
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        let updatedData = nameFilter ? data.filter(item => item.name.toLowerCase().includes(nameFilter.toLowerCase())) : data;
    
        if (dateSort === 'old') {
            updatedData = [...updatedData].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        } else if (dateSort === 'new') {
            updatedData = [...updatedData].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
    
        setFilteredData(updatedData);
    }, [dateSort, data, nameFilter]);

    const onChangeSort = (sort) => {
        setDateSort(sort)
    }

    const elements = filteredData.map(item => {
        const date = item.createdAt.slice(0, 10).split('-').reverse().join('-');

        return (
            <CSSTransition
                key={item._id}
                timeout={500}
                classNames='alert'>
                <tr className="table-row">
                    <td className="table-cell">{item._id}</td>
                    <td className="table-cell">{item.name}</td>
                    <td className="table-cell">{date}</td>
                </tr>
            </CSSTransition>
            
        )
    })

    return (
        <table className="styled-table">
            <thead className="table-head">
                <tr>
                    <th className="table-header-cell">id</th>
                    <th className="table-header-cell">Имя</th>
                    <th className="table-header-cell">Дата 
                        <DateFilter onChangeSort={onChangeSort} 
                                    value={dateSort}
                                    options={[{'value': 'new', 'name': 'Сначала новые'},
                                            {'value': 'old', 'name': 'Сначала старые'}]}/>
                    </th>
                </tr>
            </thead>

            <tbody className="table-body">
                <TransitionGroup component={null}>
                    {elements}
                </TransitionGroup>
            </tbody>   
        </table>
    );
}

export default Table