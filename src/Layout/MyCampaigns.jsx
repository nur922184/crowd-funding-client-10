import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Providers/AuthProvider";
import { MdDelete, MdEdit } from "react-icons/md";
import LoadingPage from "../Component/LoadingPage";
import Swal from "sweetalert2";


const MyCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext)


  const userEmail = user.email; // Replace this with the logged-in user's email from context or authentication

  // Fetch campaigns for the logged-in user
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(`https://my-assignment-ten-server-sigma.vercel.app/donations?email=${userEmail}`);
        const data = await response.json();
        setCampaigns(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        toast.error("Failed to load campaigns.");
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, [userEmail]);

  const handleDelete = async (Id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  
    if (result.isConfirmed) {
      try {
        const response = await fetch(`https://my-assignment-ten-server-sigma.vercel.app/donations/${Id}`, {
          method: "DELETE",
        });
  
        const data = await response.json();
        if (response.ok) { // Response status is 200–299
          Swal.fire("Deleted!", "Your campaign has been deleted.", "success");
          setCampaigns((prevCampaigns) => prevCampaigns.filter((campaign) => campaign._id !== Id));
        } else {
          Swal.fire("Error!", data.message || "Failed to delete campaign.", "error");
        }
      } catch (error) {
        console.error("Error deleting campaign:", error);
        Swal.fire("Error!", "Something went wrong. Try again later.", "error");
      }
    }
  };
  

  if (loading) {
    return <LoadingPage></LoadingPage>;

  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6  dark:bg-gray-900 text-black dark:text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">My Campaigns</h2>
      {campaigns.length === 0 ? (
        <p className="text-center text-gray-500">You have not added any campaigns yet.</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-300 text-xs sm:text-base">
          <thead>
            <tr className="">
              <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Minimum Donation</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Deadline</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign._id} className =" ">
                <td className="border border-gray-300 px-4 py-2">{campaign.campaignTitle}</td>
                <td className="border border-gray-300 px-4 py-2">{campaign.Type}</td>
                <td className="border border-gray-300 px-4 py-2">
                  ${campaign.donationAmount}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(campaign.deadlineDate).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-1 text-center justify-around items-center">
                  <button>
                    <Link
                      to={`/donations/${campaign._id}`}
                    
                    >
                      <MdEdit size={15} className="mr-3 hover:text-green-900"></MdEdit>
                    </Link>
                  </button>
                  <button
                    onClick={() => handleDelete(campaign._id)}
                  >
                    <MdDelete size={15} className="hover:text-red-600"></MdDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyCampaigns;
