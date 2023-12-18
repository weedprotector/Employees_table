import { useState } from "react"
import axios from "../../axios"

import './add-panel.css'

const AddPanel = ({onDataUpdate}) => {
    const [name, setName] = useState('')

    const onUpdateName = (e) => {
        setName(e.target.value)
    }

    const onEmployeeAdd = (e) => {
        e.preventDefault()

        axios.post('/employees', {name})
            .then(res => {
                onDataUpdate(res.data)
            })
            .catch((err) => {
                console.log(err);
                alert('Не удалось добавить работника')
            })

        setName('')
    }

    return (
        <form onSubmit={onEmployeeAdd}>
            <label>
                <input type="text" placeholder="Введите имя" value={name} onChange={onUpdateName} />
            </label>
            <button type="submit" value="Submit"> 
                Добавить
            </button>
        </form>
    )
}

export default AddPanel