import BG5 from "/assets/path2.svg";
import { Camera } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../firebase";
import axios from "axios";

const BlogPost = () => {
  const fileRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imagePercentage, setImagePercentage] = useState(0);
  const [imageUploadError, setImageUploadError] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    title: "",
    fullName: currentUser.fullName,
    email: currentUser.email,
    blog: "",
    blogPicture: "",
  });

  
  const handleFileUpload = async (image) => {
    try {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "_" + image.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImagePercentage(Math.round(progress));
        },
        (error) => {
          console.error("Upload failed:", error);
          setImageUploadError(true);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setFormData((prevData) => ({
            ...prevData,
            blogPicture: downloadURL,
          }));
          setImagePercentage(100);
        }
      );
    } catch (error) {
      console.error("Error uploading image:", error);
      setImageUploadError(true);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUploadError(false);
      setImagePercentage(0);
    }
  };

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      console.log("Submitting blog data:", formData);
      const response = await axios.post(`/api/v1/blog/blogpost`, formData);

      if (response.data.success) {
        console.log("Blog posted successfully!");
        navigate("/profile");
      }
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };

  return (
    <div
      className="flex bg-no-repeat bg-[#141415] h-auto px-10 md:px-24 justify-center"
      style={{ backgroundImage: `url(${BG5})` }}
    >
      <div className="flex flex-col h-auto w-[2100px] bg-[#171718] my-14 rounded-2xl">
        <section className="flex">
          <div
            className="flex flex-col justify-center items-center h-64 w-64 pt-3 bg-[#121214a9] rounded-full m-10 hover:bg-[#121214] cursor-pointer"
            onClick={() => fileRef.current.click()}
          >
            <input
              type="file"
              ref={fileRef}
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />
            {formData.blogPicture ? (
              <img
                src={formData.blogPicture}
                alt="Blog"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <Camera className="text-white w-[40px] h-[40px]" />
            )}
            <p className="text-white font-semibold">Upload Photo</p>
          </div>

          <section className="flex flex-col h-64 justify-center mt-10">
            <input
              id="title"
              type="text"
              placeholder="Blog Title"
              className="ml-10 text-[50px] font-bold text-white bg-transparent border-none outline-none"
              value={formData.title}
              onChange={handleChange}
            />
            <h1 className="font-semibold text-[#146EF5] flex text-left ml-10 hover:cursor-pointer hover:underline">
              {currentUser.fullName || "Author Name"}
            </h1>
          </section>
        </section>

        <textarea
          id="blog"
          placeholder="Write your blog content here..."
          className="mx-14 my-14 text-white text-[20px] bg-transparent border-none outline-none h-64 resize-none"
          value={formData.blog}
          onChange={handleChange}
        />

        {imageUploadError ? (
          <p className="text-red-600 text-center">
            Error uploading image (file size must be less than 2 MB)
          </p>
        ) : imagePercentage > 0 && imagePercentage < 100 ? (
          <p className="text-center">{`Uploading: ${imagePercentage}%`}</p>
        ) : imagePercentage === 100 ? (
          <p className="text-green-600 text-center">Image uploaded successfully!</p>
        ) : null}

        <div className="flex justify-center mb-10">
          <button
            className="px-10 py-2 bg-blue-600 text-white rounded-md"
            onClick={handleSubmit}
          >
            Post Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
