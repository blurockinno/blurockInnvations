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
  LogOut,
  Settings,
  Target,
  User,
  UserPlus,
} from "lucide-react";
import SoftwareProductCard from "../components/SoftwareProductCard";
import PaymentMethod from "../components/PaymentMethod";
import PaymentHistory from "../components/PaymentHistory";
import SubscriptionPlanPurchaseHistory from "../components/SubscriptionPlanPurchaseHistory";
import Setting from "../components/Setting";
import ManageUser from "../components/ManageUser";

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
  const [allSubcribedPlans, setAllSubscribedPlans] = useState([]);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }

    // handle for get plans
    const getAllPlans = async () => {
      try {
        const response = await axios.get(
          `/api/v1/subscription/${currentUser.companyId}`
        );

        const { plans } = response.data;
        setAllSubscribedPlans(plans);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPlans();
  }, [image, currentUser.companyId]);

  //handle for file upload
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

  //handle on open now
  const handleOnOpenNow = async (productName) => {
    if (productName === "order management system") {
      try {
        // Fetch token from the server
        const response = await axios.post("/api/v1/user/verifyUser");

        const { token, success } = response.data;
        if (success) {
          window.open(
            `http://localhost:3000/orderManagement-dashboard/order?token=${token}`,
            "_blank"
          );
        } else {
          console.error("Failed to fetch token");
        }
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    } else {
      console.log("Please provide a valid link for the product:", productName);
    }
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
            <div className="min-h-screen w-full px-10 py-4">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col">
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
                    className="w-28 h-28 rounded-md cursor-pointer"
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
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="username">Name</label>
                    <input
                      id="username"
                      type="text"
                      className="text-lg font-bold border px-3"
                      value={currentUser.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="text-lg font-bold border px-3"
                      value={currentUser.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      className="text-lg font-bold border px-3"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button
                  className="bg-green-50 px-4 py-1 text-black rounded-md"
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

          {/* http://localhost:3000/orderManagement-dashboard/order */}
          {/* <software card  */}
          {tab === "software" && isTabOpen && (
            <div className="flex flex-wrap justify-center">
              {allSubcribedPlans.map((product, index) => (
                <SoftwareProductCard
                  key={index}
                  product={product}
                  handleOnOpenSoftware={() =>
                    handleOnOpenNow(product.softwareName)
                  }
                />
              ))}
            </div>
          )}
          {/* <software card end*/}

          {/* payment method  */}
          {tab === "payment method" && isTabOpen && <PaymentMethod />}
          {/* payment method end */}

          {/* payment history  */}
          {tab === "payment history" && isTabOpen && (
            <PaymentHistory currentUser={currentUser} />
          )}
          {/* payment history end  */}

          {/* subscription plan  */}
          {tab === "subscription plan" && isTabOpen && (
            <SubscriptionPlanPurchaseHistory currentUser={currentUser} />
          )}
          {/* subscription plan end */}

          {/* manage user  */}
          {tab === "manage user" && isTabOpen && <ManageUser />}
          {/* manage user end */}

          {/* settting page  */}
          {tab === "setting" && isTabOpen && <Setting />}
          {/* settting page end */}
        </div>
        <div className="w-[20%] h-screen ">
          <div className="flex items-center justify-center h-20 bg-gray-100">
            <span className="text-xl font-semibold">Blurock Innovations</span>
          </div>
          <nav className="flex flex-col flex-1 p-4 text-black border-l ">
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
            {/* <SidebarLink to="/profile" icon={<ReceiptIcon />} text="Billing" /> */}
            <SidebarLink
              icon={<Target />}
              text="Subscription plan"
              handleOnOpenTab={() => handleToOpenTab("subscription plan")}
            />
            <SidebarLink
              icon={<CreditCard />}
              text="Payment method"
              handleOnOpenTab={() => handleToOpenTab("payment method")}
            />
            <SidebarLink
              icon={<History />}
              text="Payment history"
              handleOnOpenTab={() => handleToOpenTab("payment history")}
            />
            <SidebarLink
              icon={<UserPlus />}
              text="Manage User"
              handleOnOpenTab={() => handleToOpenTab("manage user")}
            />
            <SidebarLink
              icon={<Settings />}
              text="Settings"
              handleOnOpenTab={() => handleToOpenTab("setting")}
            />
          </nav>
          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center gap-4 h-16 bg-gray-100 w-full hover:text-red-700">
              <LogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
