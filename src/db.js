import mongoose from "mongoose";


export const connectDB = async () =>
    {
        try {
            await mongoose.connect('mongodb+srv://juan2:admin123@cluster0.tuafxrf.mongodb.net/merndb');
            console.log('MongoDB connected');
          } catch (err) {
            console.error('Error connecting to MongoDB:', err.message);
            process.exit(1);
          }
    }