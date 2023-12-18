import EmployeeModel from "../models/Employee.js";

export const create = async (req, res) => {
    try {
        const employee = new EmployeeModel({
            name: req.body.name
        })

        const post = await employee.save();

        res.json(post)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось добавить пользователя'
        })
    }
}

export const getAll = async (req, res) => {
    try {
        const posts = await EmployeeModel.find()
        res.json(posts)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить пользователей'
        })
    }
}