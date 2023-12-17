import EmployeeModel from "../models/Employee.js";

export const create = async (req, res) => {
    try {
        const doc = new EmployeeModel({
            name: req.body.name
        })

        const post = await doc.save();

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
        console.log(error);
        res.status(500).json({
            message: 'Не удалось получить пользователей'
        })
    }
}