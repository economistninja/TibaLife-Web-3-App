import mongoose from 'mongoose';
import { env } from './env';

export async function connectMongo(): Promise<void> {
  if (!env.mongoUri) throw new Error('MONGO_URI not configured');
  await mongoose.connect(env.mongoUri, {
    serverSelectionTimeoutMS: 10000,
  });
}

export function disconnectMongo(): Promise<void> {
  return mongoose.disconnect();
}



