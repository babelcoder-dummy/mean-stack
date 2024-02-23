import mongoose from 'mongoose';

export const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
  } catch (e) {
    console.error(`cannot connect to the database: ${(e as Error).message}`);
    process.exit(1);
  }
};
