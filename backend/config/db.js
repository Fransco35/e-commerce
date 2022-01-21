import mongoose from 'mongoose'




const connectDB = async () => {
    try {
           await mongoose.connect(`${process.env.MONGO_URI}`, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch(err) {
        console.log(`Error: ${err.message}`.red.underline.bold)
    }
}

export default connectDB;