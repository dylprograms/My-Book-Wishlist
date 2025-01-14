import mongoose from 'mongoose';

// Ensure the environment variable is loaded (in case it's missing)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks';

// Connect to MongoDB (no extra options needed in Mongoose v7+)
mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1);  // Exit the process if the connection fails
    });

// Export the connection for use in the app
export default mongoose.connection;

