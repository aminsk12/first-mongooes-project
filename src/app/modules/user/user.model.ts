
import { Schema, model } from "mongoose";
import { TUser } from "./user,interface";
import bcrypt from 'bcrypt'
import config from "../../config";


const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ["student", "faculty", "admin"],
    },
    status: {
      type: String,
      enum: ["in-progress", "blockd"],
      default: 'in-progress'
    },
    isDelited: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);



userSchema.pre('save', async function (next) {
  const user = this; //doc
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  
  next();
} )


userSchema.methods.toJSON = function () {
  const obj = this.toObject()
  delete obj.password
  return obj
}

// userSchema.post('save', function (doc, next) {
// doc.password= ''
// next()
  
// } )

export const User = model<TUser>("User", userSchema);
