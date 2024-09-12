import { Edit, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useNavigate,useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import axios from "axios";

// Import and register chart.js components (for graph)
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [analytics, setAnalytics] = useState({
    count: 0,
    views: 0,
    viewHistory: {},
  });
  const [viewHistory, setViewHistory] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  // Fetch all blogs for current user
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await axios.get(`/api/v1/blog/profile/${currentUser.email}`);
        console.log(response.data);
        setBlogs(response.data.blogs.reverse());
        setAnalytics(response.data);

        //setting data up for graph
        const views = response.data.viewHistory;
        const viewsPerDay = views.reduce((acc, view) => {
          const date = new Date(view.timestamp).toLocaleDateString();
          if (!acc[date]) {
              acc[date] = 1;
          } else {
              acc[date] += 1;
          }
          return acc;
        }, {});

        const timestamps = Object.keys(viewsPerDay).sort((a, b) => new Date(a) - new Date(b));
        
        const viewCounts = timestamps.map(date => viewsPerDay[date]);

        setViewHistory({
          data: {
            labels: timestamps,
            datasets: [
              {
                label: 'Views Per Day',
                data: viewCounts,
                fill: true,
                borderColor: 'rgba(80,80,80,1)',
                borderWidth: 2,
                tension: 0.1,
              }
            ],
          },
          // removing background grid
          options: {
            scales: {
              x: {grid: {display: false,},},
              y: {grid: {display: false,},},
            },
          },
        });

      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllBlogs();
  }, [isLoading]);

  const handleOnEdit = (id) => {
    navigate(`/blogupdate/${id}`);
  };

  const handleOnDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/v1/blog/deleteblog/${id}`);
      console.log(response.data);
      setIsLoading(true);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Analytics UI not finished */}
      <div className="flex">
        <div className="">
          <p className="py-3 px-4 uppercase font-bold text-3xl">Total Blogs: {analytics.count}</p>
          <p className="py-3 px-4 uppercase font-bold text-3xl">Total Views: {analytics.views}</p>
        </div>
        <div className="w-[600px] border-4 border-blue-500 rounded-lg">
          <p className="py-3 px-4 pt-6 uppercase font-semibold text-2xl text-center ">Views Analytics Graph</p>
          {(viewHistory !== undefined) ? (
            <Line data={viewHistory.data} options={viewHistory.options} />
          ) : (<p>No data available</p>)}
        </div>
      </div>
      <div className="flex justify-end p-2">
        <Link to='/blogpost'>
          <button className="flex bg-blue-700 items-center text-white px-4">
            <Plus /> Post Blog
          </button>
        </Link>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="border text-black">
              <tr>
                <th className="py-3 px-4 uppercase font-semibold text-sm">
                  Blog Picture
                </th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">
                  Title
                </th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">
                  Views
                </th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">
                  Blog Content
                </th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {blogs.map((blog) => (
                <tr key={blog._id} className="hover:bg-gray-100 text-center">
                  <td className="py-3 px-4 border-gray-200 flex justify-center">
                    <img
                      src={blog.blogPicture}
                      alt={blog.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-4 border-gray-200 font-semibold">{blog.title}</td>
                  <td className="py-3 px-4 border-gray-200">{blog.views}</td>
                  <td className="py-3 px-4 border-gray-200">
                    {blog.blog.substring(0, 50)}<br/>
                    {blog.blog.substring(50, 100)}<br/>
                    {blog.blog.substring(100, 125)}{blog.blog.length > 125 ? ("...") : (<></>)}
                  </td>
                  <td className="py-3 px-4  border-gray-200">
                      <button
                        className="text-blue-600 hover:text-blue-800 mr-2"
                        onClick={() => handleOnEdit(blog._id)}
                      >
                        <Edit />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800 mr-2"
                        onClick={() => handleOnDelete(blog._id)}
                      >
                        <Trash2 />
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBlogs;
