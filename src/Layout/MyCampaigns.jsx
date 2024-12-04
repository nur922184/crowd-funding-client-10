import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  const userEmail = "user@example.com"; // Replace this with the logged-in user's email from context or authentication

  // Fetch campaigns for the logged-in user
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(`http://localhost:5000/myCampaigns?email=${userEmail}`);
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

  // Delete campaign
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this campaign?");
    if (!confirm) return;

    try {
      const response = await fetch(`http://localhost:5000/deleteCampaign/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Campaign deleted successfully!");
        setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
      } else {
        toast.error("Failed to delete campaign.");
      }
    } catch (error) {
      console.error("Error deleting campaign:", error);
      toast.error("Something went wrong. Try again later.");
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">My Campaigns</h2>
      {campaigns.length === 0 ? (
        <p className="text-center text-gray-500">You have not added any campaigns yet.</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Minimum Donation</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Deadline</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{campaign.title}</td>
                <td className="border border-gray-300 px-4 py-2">{campaign.type}</td>
                <td className="border border-gray-300 px-4 py-2">
                  ${campaign.minimumDonation}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(campaign.deadline).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Link
                    to={`/updateCampaign/${campaign._id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(campaign._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
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
