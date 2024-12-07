import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order: ascending

  // Fetch campaigns from the backend
  useEffect(() => {
    fetch("http://localhost:5000/campaigns")
      .then((response) => response.json())
      .then((data) => setCampaigns(data))
      .catch((error) => console.error("Error fetching campaigns:", error));
  }, []);

  const handleSort = () => {
    const sortedCampaigns = [...campaigns].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.minimumDonation - b.minimumDonation; // Ascending
      } else {
        return b.minimumDonation - a.minimumDonation; // Descending
      }
    });
    setCampaigns(sortedCampaigns);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
  };

  return (
    <div className="md:max-w-7xl mx-auto mt-10 p-4 md:p-6 dark:bg-gray-900 text-black dark:text-white rounded-lg shadow">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
        All Campaigns
      </h2>
      <button
      className="bg-blue-500 text-white py-2 px-4 rounded mb-4 flex items-center space-x-2"
      onClick={handleSort}
    >
      <span>Sort by Minimum Donation</span> <span><TbAdjustmentsHorizontal size={20} /></span>
      {sortOrder === "asc" ? <FaArrowUp /> : <FaArrowDown />}
    </button>
      {campaigns.length === 0 ? (
        <p className="text-center text-sm sm:text-base text-gray-500">No campaigns found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-xs sm:text-base">
            <thead>
              <tr className="  dark:bg-gray-900 text-black dark:text-white bg-gray-100">
                <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
                  Title
                </th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
                  Type
                </th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
                  Minimum Donation
                </th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
                  Deadline
                </th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign._id} className="">
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">{campaign.title}</td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">{campaign.type}</td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">
                    ${campaign.minimumDonation}
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">
                    {new Date(campaign.deadline).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">
                    <Link to={`/campaigns/${campaign._id}`}
                      className="bg-blue-500 text-white text-xs sm:text-xs px-2 sm:px-3 py-1 rounded hover:bg-blue-600"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>


  );
};

export default AllCampaigns;
