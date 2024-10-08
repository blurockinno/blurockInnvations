import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    fullName:{
        type:String,
        reuqired: true,
    },
    email:{
        type:String,
        required:true,
    },
    // title: {
    //   type: String,
    //   required: true
    // },
    content: {
      type: String,
      required: true
    },
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
});

const blogSchema = new mongoose.Schema(
    {
        fullName:{
            type:String,
            reuqired: true,
        },
        email:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        blog:{
            type:String,
            required:true,
        },
        blogPicture: {
            type: String,
            default:
              "https://cdn.pixabay.com/photo/2015/12/22/04/00/photo-1103594_1280.png",
        },
        views: {
            type : Number,
            required : true,
            default : 0
        },
        viewHistory: [
            {
              timestamp: {
                type: Date,
                default: Date.now,
              }
            }
        ],
        likes: {
            type: Number,
            default: 0,
          },
        likedBy: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "users",
            },
        ],
        comments: [CommentSchema],
    },
    {
        timestamps:true
    }
)

export const Blogs = mongoose.model("blogs",blogSchema);