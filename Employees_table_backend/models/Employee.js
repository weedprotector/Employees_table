import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
    {
        name: String,
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Employee', EmployeeSchema);
