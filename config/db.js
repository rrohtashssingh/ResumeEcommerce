import mongoose from "mongoose"

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Mongodb Database ${conn.connection.host}`)
    }
    catch (error) {
        console.log(`Error in ${error}`)
    }
}

export default connectDb;