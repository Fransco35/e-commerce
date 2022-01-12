import mongoose from 'mongoose'
import dotenv from 'dotenv'



const connectDB = async () => {
    try {
           await mongoose.connect('mongodb+srv://admin-fransco:admin-fransco@cluster0.vkbie.mongodb.net/Ecommerce', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch(err) {
        console.log(`Error: ${err.message}`.red.underline.bold)
    }
}

export default connectDB;