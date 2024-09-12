import { Blogs } from "../models/blog.model.js";

//post
export const newBlog= async (req, res) =>{
    try {
        //fetch data from request body
        const{ fullName,email,title,blog,blogPicture }=req.body;

        //validation
        if(!fullName){
            return res.status(400).json({error:"Name is required"});
        }console.log(fullName,email,title,blog,blogPicture);
        if(!email){
            return res.status(400).json({error:"Email is required"});
        }
        if(!title){
            return res.status(400).json({error:"Title is required"});
        }
        if(!blog){
            return res.status(400).json({error:"Blog is required"});
        }
        if(!blogPicture){
            return res.status(400).json({error:"Picture is required"});
        }

        const newBlog = await Blogs.create(
            { fullName, email, title, blog, blogPicture }
        )
        
        res.status(200).json({success:true, message:"blog created successfully", newBlog});
    } catch (error){
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

//get all
export const getBlogs= async (req, res) =>{
    try {
        //fetch all blogs
        const allBlogs = await Blogs.find();
        console.log(allBlogs);
        
        res.status(200).json({success:true, message:"blogs retrieved successfully", blogs: allBlogs});
    } catch (error){
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

//get all blogs by one user
export const getBlogsProfile= async (req, res) =>{
    try {
        const email= req.params.email;

        //fetch all blogs
        const blogs = await Blogs.find({email: email});
        const blogsCount = blogs.length;
        const totalViews = blogs.reduce((sum, blog) => sum + blog.views, 0);
        // const totalComments = blogs.reduce((sum, blog) => sum + blog.comments.length, 0);
        const allViewHistory = blogs.reduce((history, blog) => {
            return history.concat(blog.viewHistory);
        }, []);

        res.status(200).json({
            success:true, 
            message:"blogs retrieved successfully", 
            blogs: blogs, 
            count: blogsCount,
            views: totalViews,
            // comments: totalComments,
            viewHistory: allViewHistory,
        });
    } catch (error){
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

//get one blog for update(doesnt increment view count)
export const updateGetBlog= async (req, res) =>{
    try {
        //fetch blog
        const Blog = await Blogs.findById(req.params.id);
        
        res.status(200).json({success:true, message:"blog retrieved successfully", blog: Blog})
    } catch (error){
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

//get one blog
export const getBlog= async (req, res) =>{
    try {
        const id = req.params.id;

        //fetch blog
        const Blog = await Blogs.findByIdAndUpdate(
            id,
            {
              $inc: { views: 1 },
              $push: { viewHistory: { timestamp: Date.now() } }
            },
            { new: true }
        );
        
        res.status(200).json({success:true, message:"blog retrieved successfully", blog: Blog});
    } catch (error){
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

//update blog
export const updateBlog= async (req, res) =>{
    try {
        const id = req.params.id;

        const Blog = await Blogs.findByIdAndUpdate(id, req.body, {new: true});
        
        res.status(200).json({success:true, message:"blog updated successfully", Blog});
    } catch (error){
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

//delete blog
export const deleteBlog= async (req, res) =>{
    try {
        const id = req.params.id;

        const Blog = await Blogs.findByIdAndDelete(id);
        
        res.status(200).json({success:true, message:"blog deleted successfully", Blog});
    } catch (error){
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}