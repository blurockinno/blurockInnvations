import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../firebase";
import axios from "axios";
import {
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../redux/user/userSlice";
import SidebarLink from "../components/SidebarLink";
import {
  AppWindowIcon,
  CreditCard,
  History,
  Home,
  LogOut,
  ReceiptIcon,
  Settings,
  SubscriptIcon,
  Target,
  User,
  UserPlus,
} from "lucide-react";
import SoftwareProductCard from "../components/SoftwareProductCard";
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
  const dispatch = useDispatch();
  const fileRef = useRef();
  const [image, setImage] = useState(null);
  const [imagePercentage, setImagePercentage] = useState(0);
  const [imageUploadError, setImageUploadError] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    profilePicture: "",
  });
  const [tab, setTab] = useState("software");
  const [isTabOpen, setIsTabOpen] = useState(true);

  const { currentUser } = useSelector((state) => state.user);

  const products = [
    {
      name: "Order Management System",
      description: "This is a great product.",
      image: "https://via.placeholder.com/200",
      tags: ["Software", "Productivity", "Tools"],
    },
    {
      name: "Employee Management System",
      description: "This is another great product.",
      image: "https://via.placeholder.com/200",
      tags: ["Development", "Utilities"],
    },
    // Add more products here
  ];

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    try {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + image.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImagePercentage(Math.round(progress));
        },
        (error) => {
          setImageUploadError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData((prevData) => ({
              ...prevData,
              profilePicture: downloadURL,
            }));
          });
        }
      );
    } catch (error) {
      setImageUploadError(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  //handle on submit
  const handleOnSubmit = async () => {
    console.log(formData);
    try {
      dispatch(updateUserStart());
      const response = await axios.post(
        `/api/v1/auth/update/${currentUser._id}`,
        {
          body: formData,
        }
      );
      const { user } = response.data;
      dispatch(updateUserSuccess(user));
    } catch (error) {
      console.log(error);
      dispatch(updateUserFailure(error));
    }
  };

  const handleToOpenTab = (value) => {
    // settab name
    setTab(value);
    setIsTabOpen(true);
  };

  if (!currentUser) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="container mx-auto p-2 h-screen mt-20">
      <div className="bg-white shadow-md rounded-lg  flex ">
        <div className="w-[80%]  h-screen">
          {/* profile page  */}

          {tab === "profile" && isTabOpen && (
            <div className="min-h-screen flex justify-center items-center">
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  ref={fileRef}
                  hidden
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <img
                  src={formData.profilePicture || currentUser.profilePicture}
                  alt="Profile"
                  className="w-24 h-24 rounded-full cursor-pointer"
                  onClick={() => fileRef.current.click()}
                />
                <p>
                  {imageUploadError ? (
                    <span className="text-red-600">
                      Error uploading image (file size must be less than 2 MB)
                    </span>
                  ) : imagePercentage > 0 && imagePercentage < 100 ? (
                    <span>{`Uploading: ${imagePercentage}% `}</span>
                  ) : imagePercentage === 100 ? (
                    <span className="text-green-600">
                      {" "}
                      Image uploaded successfully
                    </span>
                  ) : (
                    ""
                  )}
                </p>
                <div>
                  <input
                    id="username"
                    type="text"
                    className="text-2xl font-bold"
                    value={currentUser.fullName}
                    onChange={handleChange}
                  />
                  <input
                    id="email"
                    type="email"
                    className="text-gray-600"
                    value={currentUser.email}
                    onChange={handleChange}
                  />
                  <input
                    id="password"
                    type="password"
                    className="text-gray-600"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="bg-green-500 px-4 py-1 text-white rounded-full"
                  onClick={handleOnSubmit}
                >
                  Update
                </button>
              </div>
              {/* <ProfileCard
                profilePicture={currentUser.profilePicture}
                name={currentUser.fullName}
                email={currentUser.email}
              /> */}
            </div>
          )}

          {/* profile page end */}

          {/* <software card  */}
          {tab === "software" && isTabOpen && (
            <div className="flex flex-wrap justify-center">
              {products.map((product, index) => (
                <SoftwareProductCard key={index} product={product} />
              ))}
            </div>
          )}
          {/* <software card end*/}
        </div>
        <div className="w-[20%] h-screen ">
          <div className="flex items-center justify-center h-20 bg-gray-100">
            <span className="text-xl font-semibold">Blurock Innovations</span>
          </div>
          <nav className="flex flex-col flex-1 p-4 text-black border-l">
            <SidebarLink
              handleOnOpenTab={() => handleToOpenTab("software")}
              icon={<AppWindowIcon />}
              text="Software"
            />
            <SidebarLink
              handleOnOpenTab={() => handleToOpenTab("profile")}
              icon={<User />}
              text="Profile"
            />
            <SidebarLink to="/profile" icon={<ReceiptIcon />} text="Billing" />
            <SidebarLink icon={<Target />} text="Subscription plan" />
            <SidebarLink icon={<CreditCard />} text="Payment method" />
            <SidebarLink icon={<History />} text="Payment history" />
            <SidebarLink icon={<UserPlus />} text="Manage User" />
            <SidebarLink icon={<Settings />} text="Settings" />
          </nav>
          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center gap-4 h-16 bg-gray-100 w-full hover:text-red-700">
              <LogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>
        {/* <div className="flex items-center space-x-4">
          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <img
            src={formData.profilePicture || currentUser.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full cursor-pointer"
            onClick={() => fileRef.current.click()}
          />
          <p>
            {imageUploadError ? (
              <span className="text-red-600">
                Error uploading image (file size must be less than 2 MB)
              </span>
            ) : imagePercentage > 0 && imagePercentage < 100 ? (
              <span>{`Uploading: ${imagePercentage}% `}</span>
            ) : imagePercentage === 100 ? (
              <span className="text-green-600">
                {" "}
                Image uploaded successfully
              </span>
            ) : (
              ""
            )}
          </p>
          <div>
            <input
              id="username"
              type="text"
              className="text-2xl font-bold"
              value={currentUser.fullName}
              onChange={handleChange}
            />
            <input
              id="email"
              type="email"
              className="text-gray-600"
              value={currentUser.email}
              onChange={handleChange}
            />
            <input
              id="password"
              type="password"
              className="text-gray-600"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-green-500 px-4 py-1 text-white rounded-full"
            onClick={handleOnSubmit}
          >
            Update
          </button>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">About Me</h3>
          <p className="text-gray-700 mt-2">
            {currentUser.bio || "No bio available."}
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Settings</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Change Password</li>
            <li>Manage Subscriptions</li>
            <li>Privacy Settings</li>
          </ul>
          <button className="bg-green-500 px-4 py-1 text-white rounded-full">
            Update
          </button>

          <button className="bg-red-500 px-4 py-1 text-white rounded-full">
            Logout
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
