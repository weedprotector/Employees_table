import axios from './axios';

import { useState, useEffect } from 'react';

import AddPanel from './components/add-panel/add-panel';
import Table from './components/table/table';
import SearchPanel from './components/search-panel/search-panel';


function App() {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    axios.get('/employees').then(res => {
        setData(res.data)
    }).catch((err) => {
        console.log(err);
        alert('Не удалось получить пользователей')
    })
  }, [])

  const onDataUpdate = (employee) => {
    setData([...data, employee])
  }

  const updateNameFilter = (filter) => {
    setNameFilter(filter)
  }

  return (
    <>
      <AddPanel onDataUpdate={onDataUpdate}/>
      <SearchPanel updateNameFilter={updateNameFilter}/>
      <Table data={data} nameFilter={nameFilter}/>
    </>
  );
}

export default App;
