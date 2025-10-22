import mongoose, { Schema, Document, Model } from 'mongoose';

export type UserRole = 'patient' | 'doctor' | 'hospital';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role: UserRole;
  nationalId?: string;
  walletAddress?: string;
  googleId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    phone: { type: String },
    role: { type: String, enum: ['patient', 'doctor', 'hospital'], required: true },
    nationalId: { type: String },
    walletAddress: { type: String },
    googleId: { type: String, index: true },
  },
  { timestamps: true }
);

export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>('User', UserSchema);



