import dotenv from 'dotenv';

dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '4000', 10),
  mongoUri: process.env.MONGO_URI || '',
  jwtSecret: process.env.JWT_SECRET || 'dev-secret-change',
  googleClientId: process.env.GOOGLE_CLIENT_ID || '',
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  googleCallbackUrl: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:4000/auth/google/callback',
  corsOrigins: (process.env.CORS_ORIGINS || 'http://localhost:5173').split(','),
  africaTalkingApiKey: process.env.AT_API_KEY || '',
  africaTalkingUsername: process.env.AT_USERNAME || '',
};

export function assertEnv() {
  const required = ['mongoUri', 'jwtSecret'];
  const missing = required.filter((k) => !(env as any)[k]);
  if (missing.length > 0) {
    throw new Error(`Missing required env vars: ${missing.join(', ')}`);
  }
}



