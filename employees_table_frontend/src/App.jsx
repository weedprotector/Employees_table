import axios from './axios';

import { useState, useEffect } from 'react';


import AddPanel from './components/add-panel/add-panel';
import Table from './components/table/table';


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/employees').then(res => {
        setData(res.data)
    }).catch((err) => {
        console.log(err);
        alert('Не удалось получить пользователей')
    })
  }, [])

  const onDataUpdate = (newData) => {
    setData(newData)
  }

  return (
    <>
      <AddPanel onDataUpdate={onDataUpdate}/>
      <Table data={data}/>
    </>
  );
}

export default App;
