import express from "express";
import { 
    newBlog, 
    getBlogs, 
    updateGetBlog, 
    updateBlog, 
    deleteBlog, 
    getBlog, 
    getBlogsProfile, 
    postComment,
    likeBlogPost,
    unlikeBlogPost,
} from "../controller/blog.controller.js";

const router = express.Router();

router.post("/blogpost", newBlog);

router.put("/updateblog/:id", updateBlog);

router.delete("/deleteblog/:id", deleteBlog);

router.get("/getblogs", getBlogs);

router.get("/profile/:email", getBlogsProfile);

router.get("/getblog/:id", getBlog);

router.post("/:id/comments", postComment);

router.put("/:id/like", likeBlogPost);

router.put("/:id/unlike", unlikeBlogPost);

router.get("/updategetblog/:id", updateGetBlog);

export default router;