import { Schema, model,Types } from "mongoose";


const commentSchema = new Schema({
    user:{
        type:Types.ObjectId,
        ref: "user",
        required: [true,"UserID required"],
    },
    comment:{
        type: String,
        required:[true,"Enter a comment"]

    }
})

const articleSchema = new Schema({
    author:{
        type: Types.ObjectId,
        ref: "user",             // taking reference from author's user model
        required: [true,"Author ID is required"]
    },
    title:{
        type: String,
        required: [true,"Title is required"],
    },
    category:{
        type: String,
        required: [true,"Category is required"],
        // a limited categories can be implemented where Admin can add new categories
    },
    content:{
        type: String,
        required: [true,"Content is required"],
    },
    comments:[{type:commentSchema,default: []}],
    isArticleActive:{
        type:Boolean,
        default: true
    }
},{
    timestamps: true,
    strict: "throw",
    versionKey: false,
})

export const ArticleModel = model("article",articleSchema)