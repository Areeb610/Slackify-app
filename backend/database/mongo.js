import mongoose from "mongoose"
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Conneted To Mongodb Databse1`)

    } catch (err) {
        console.log("Error In MongoDB Connectivity");
    }
}
export default connectDb;
