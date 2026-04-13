import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstName:{
        type: String,
        required: [true,"First Name is required field"],
    },
    lastName:{
        type: String
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
        // pattern: regex expression can be entered
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        // pattern: regex expression can be entered
    },
    role:{
        type: String,
        enum: ["USER","AUTHOR","ADMIN"], // restricts only these three roles
        required: [true, "{Value} is an Invalid Role"],
    },
    profileImageUrl:{
        type: String,
    },   
    isUserActive:{                          // used for soft deleting a user
        type: Boolean,
        default: true,
    }
},{
    timestamps: true,
    versionKey: false,
    strict: "throw",
})

export const UserModel = model("user",userSchema)