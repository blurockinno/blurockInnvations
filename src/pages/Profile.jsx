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
  logout,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../redux/user/userSlice";
import SidebarLink from "../components/SidebarLink";
import {
  AppWindowIcon,
  Computer,
  CreditCard,
  History,
  Home,
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
import {
  currentSubscriptionCheckFailure,
  currentSubscriptionCheckStart,
  currentSubscriptionCheckSuccess,
} from "../redux/subscription/subscriptionSlice";

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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }

    // handle for get plans
    const getAllPlans = async () => {
      try {
        //despatch the value
        dispatch(currentSubscriptionCheckStart());
        const response = await axios.get(
          `/api/v1/subscription/${currentUser.companyId}`
        );

        const { plans } = response.data;
        setAllSubscribedPlans(plans);
        dispatch(currentSubscriptionCheckSuccess(plans));
      } catch (error) {
        console.log(error);
        dispatch(currentSubscriptionCheckFailure(error.response.message));
      }
    };
    getAllPlans();
  }, [image, currentUser.companyId, dispatch]);

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
    console.log(currentUser._id);

    try {
      // Dispatch the action to indicate the update process has started
      dispatch(updateUserStart());

      // Make an HTTP PUT request to update the user information
      const response = await axios.put(`/api/v1/auth/${currentUser._id}`, {
        profilePicture: formData.profilePicture,
        fullName: formData.fullName,
        password: formData.password,
      });

      console.log(response);

      // Extract the updated user information from the response
      const { user } = response.data;

      // Dispatch the success action with the updated user information
      dispatch(updateUserSuccess(user));
    } catch (error) {
      console.log(error);

      // Dispatch the failure action with the error information
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
            `https://erp-phi.vercel.app/order?token=${token}`,
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

  //handle for logout
  const handleOnlogout = () => {
    dispatch(logout());
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  if (!currentUser) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className=" mx-auto p-2 h-screen">
      <div className="bg-white   flex gap-10">
        <div className="w-full md:w-[80%]   md:h-auto mb-20 bg-gray-50">
          {/* profile page  */}

          {tab === "profile" && isTabOpen && (
            <>
              <div className="p-4">
                <h1 className="bg-blue-100 px-10 py-2 text-black text-xl">
                  Profile
                </h1>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:space-x-4 bg-white m-4 p-2">
                <div className="flex flex-col items-center">
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
                    className="w-28 h-28 rounded-md cursor-pointer mb-2 sm:mb-0"
                    onClick={() => fileRef.current.click()}
                  />
                  <p className="text-center">
                    {imageUploadError ? (
                      <span className="text-red-600">
                        Error uploading image (file size must be less than 2 MB)
                      </span>
                    ) : imagePercentage > 0 && imagePercentage < 100 ? (
                      <span>{`Uploading: ${imagePercentage}% `}</span>
                    ) : imagePercentage === 100 ? (
                      <span className="text-green-600">
                        Image uploaded successfully
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="username">Name</label>
                      <input
                        id="username"
                        type="text"
                        className="text-lg font-bold border px-3 py-1"
                        value={currentUser.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        disabled
                        className="text-lg font-bold border px-3 py-1"
                        value={currentUser.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        type="password"
                        className="text-lg font-bold border px-3 py-1"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button
                    className="bg-green-50 px-4 py-1 text-black rounded-md self-start sm:self-end mt-2"
                    onClick={handleOnSubmit}
                  >
                    Update
                  </button>
                </div>
              </div>
            </>
          )}

          {/* profile page end */}

          {/* http://localhost:3000/orderManagement-dashboard/order */}
          {/* <software card  */}
          {tab === "software" && isTabOpen && (
            <>
              <div className="p-4">
                <h1 className="bg-blue-100 px-10 py-2 text-black text-xl ">
                  Software
                </h1>
              </div>
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
            </>
          )}
          {/* <software card end*/}

          {/* payment method  */}
          {tab === "payment method" && isTabOpen && (
            <>
              <div className="p-4">
                <h1 className="bg-blue-100 px-10 py-2 text-black text-xl ">
                  Payment Method
                </h1>
              </div>
              <PaymentMethod />
            </>
          )}
          {/* payment method end */}

          {/* payment history  */}
          {tab === "payment history" && isTabOpen && (
            <>
              <div className="p-4">
                <h1 className="bg-blue-100 px-10 py-2 text-black text-xl ">
                  Payment Hstory
                </h1>
              </div>
              <PaymentHistory currentUser={currentUser} />
            </>
          )}
          {/* payment history end  */}

          {/* subscription plan  */}
          {tab === "subscription plan" && isTabOpen && (
            <>
              <div className="p-4">
                <h1 className="bg-blue-100 px-10 py-2 text-black text-xl ">
                  Plan Purchase History
                </h1>
              </div>
              <SubscriptionPlanPurchaseHistory currentUser={currentUser} />
            </>
          )}
          {/* subscription plan end */}

          {/* manage user  */}
          {tab === "manage user" && isTabOpen && (
            <>
              <div className="p-4">
                <h1 className="bg-blue-100 px-10 py-2 text-black text-xl ">
                  Manage user
                </h1>
              </div>
              <ManageUser />
            </>
          )}
          {/* manage user end */}

          {/* settting page  */}
          {tab === "setting" && isTabOpen && (
            <>
              <div className="p-4">
                <h1 className="bg-blue-100 px-10 py-2 text-black text-xl ">
                  Setting
                </h1>
              </div>
              <Setting />
            </>
          )}
          {/* settting page end */}
        </div>
        {/* Drawer Button for Mobile Screens */}
        <button
          className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center bg-[#146ef5] text-white p-3 rounded-full z-20"
          onClick={toggleDrawer}
        >
          {isDrawerOpen ? null : <Home size={36} className="texl-3xl" />}
        </button>
        <div className="h-14 border-t  w-full md:hidden fixed bottom-0 left-1/2 transform -translate-x-1/2 flex justify-between items-center bg-white text-[#146ef5] px-10  z-10">
          <span onClick={() => handleToOpenTab("software")}>
            <Computer />
          </span>
          <span>
            <User onClick={() => handleToOpenTab("profile")} />
          </span>
        </div>

        {/* Sidebar / Drawer */}
        <div
          className={`z-50 md:z-0 w-[60%] h-screen md:h-[600px] rounded-lg md:w-[20%] fixed md:relative bg-white transition-transform transform ${
            isDrawerOpen ? "translate-y-0" : "translate-y-full"
          } md:translate-y-0`}
        >
          <div className="hidden items-center justify-center h-16 bg-gray-100 md:flex">
            <span className="text-xl font-semibold capitalize">
              {currentUser.companyName}
            </span>
          </div>

          <nav className="flex flex-col flex-1 p-2 md:p-4 text-black border-l">
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
            <button
              onClick={handleOnlogout}
              className="flex items-center justify-center md:gap-4 h-16 bg-gray-100 w-full hover:text-red-700"
            >
              <LogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>
        {/* Overlay for Mobile Drawer */}
        {isDrawerOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleDrawer}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Profile;
