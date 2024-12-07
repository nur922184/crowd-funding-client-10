import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "../../Component/LoadingPage";

const CampaignDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext)
  // Replace with actual logged-in user's info


  useEffect(() => {
    const fetchCampaignDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/campaigns/${id}`);
        const data = await response.json();
        setCampaign(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching campaign details:", error);
        setLoading(false);
      }
    };

    fetchCampaignDetails();
  }, [id]);

  const handleDonate = async () => {
    if (!user.email) {
      navigate("/login");
      return;
    }

    const donationData = {
      type : campaign.type,
      campaignId: campaign._id,
      campaignTitle: campaign.title,
      amount: campaign.minimumDonation,
      donorEmail: user.email,
      donorName: user.name,
    };
    // console.log(donationData)

    try {
      const response = await fetch("http://localhost:5000/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        toast.success("Thank you for your donation!");
      } else {
        toast.error("Failed to process donation. Please try again.");
      }
    } catch (error) {
      console.error("Error processing donation:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  if (!campaign) {
    return <div className="text-center mt-10">Campaign not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-lg shadow">
      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{campaign.title}</h1>
      <p className="text-gray-600 mb-4">{campaign.description}</p>
      <div className="text-gray-700 mb-4">
        <p>
          <span className="font-bold">Campaign Type:</span> {campaign.type}
        </p>
        <p>
          <span className="font-bold">Organizer:</span> {campaign.organizer}
        </p>
        <p>
          <span className="font-bold">Minimum Donation:</span> $
          {campaign.minimumDonation}
        </p>
        <p>
          <span className="font-bold">Deadline:</span>{" "}
          {new Date(campaign.deadline).toLocaleDateString()}
        </p>
      </div>
      <button
        onClick={handleDonate}
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
      >
        Donate
      </button>
    </div>
  );
};

export default CampaignDetails;
