import React, { useEffect, useState } from "react";

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all campaigns
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("http://localhost:5000/campaigns");
        const data = await response.json();
        setCampaigns(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-6">All Campaigns</h2>
      {campaigns.length === 0 ? (
        <p className="text-center text-gray-500">No campaigns found.</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Organizer</th>
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
                <td className="border border-gray-300 px-4 py-2">{campaign.organizer}</td>
                <td className="border border-gray-300 px-4 py-2">
                  ${campaign.minimumDonation}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(campaign.deadline).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <a
                    href={`/campaign/${campaign._id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    View Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllCampaigns;
