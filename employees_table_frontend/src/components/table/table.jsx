
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

import './table.css'

const Table = ({data}) => {
        
    const elements = data.map(item => {
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
                    <th className="table-header-cell">Дата</th>
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