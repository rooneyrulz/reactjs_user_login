import mongoose from 'mongoose';
import config from 'config';

// Import MongoDB URI
const mongoURI = config.get('MONGO_URI');

export default async () => {
  try {
    const isConnected = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    if (isConnected) {
      console.log('connecting to mongodb..');
    }
  } catch (error) {
    await process.exit(1);
    throw error.message;
  }
};
