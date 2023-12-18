import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import 'dotenv/config'

import * as EmployeeController from './controllers/EmployeesController.js'

mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err))

const app = express();
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello World');
})

app.get('/employees', EmployeeController.getAll)
app.post('/employees', EmployeeController.create)

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server OK');
});