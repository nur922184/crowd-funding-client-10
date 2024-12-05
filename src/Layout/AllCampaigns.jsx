import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllCampaigns = () => {
  const campaigns = useLoaderData();

  return (
    <div className="md:max-w-7xl mx-auto mt-10 p-4 md:p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
        All Campaigns
      </h2>
      {campaigns.length === 0 ? (
        <p className="text-center text-sm sm:text-base text-gray-500">No campaigns found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-xs sm:text-base">
            <thead>
              <tr className="bg-gray-100">
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
                <tr key={campaign._id} className="hover:bg-gray-50">
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
