import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast, ToastContainer, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Providers/AuthProvider";

const CampaignDetailsCard = () => {
  const details = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)
  const email = user.email;
  const Name = user.displayName

  const handleDonate = () => {
    const currentDate = new Date();
    const deadlineDate = new Date(details.deadline);

    // Check if the campaign is active
    if (deadlineDate < currentDate) {
      toast.error("The deadline for this campaign has passed. You cannot donate.");
      return;
    }

    // Proceed with donation
    const newDonate = {
      detailsImage:details.image,
      deadlineDate: details.deadline,
      campaignId: details._id,
      campaignTitle: details.title,
      donorEmail: email, // Replace with actual user email
      donorName: Name, // Replace with actual user name
      donationAmount: details.minimumDonation, // You can prompt user for amount
    };

    fetch("http://localhost:5000/donations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDonate),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Thank you for your donation!");
        navigate("/myDonations");
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again.");
        console.error("Error donating:", error);
      });
  };

  const isExpired = new Date(details.deadline) < new Date();

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6  dark:bg-gray-900 text-black dark:text-white rounded-lg shadow">
      <ToastContainer />
      <img
        src={details.image}
        alt={details.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{details.title}</h1>
      <p className="text-gray-600 mb-4">{details.description}</p>
      <div className="text-gray-700 mb-4">
        <p>
          <span className="font-bold">Campaign Type:</span> {details.type}
        </p>
        <p>
          <span className="font-bold">Organizer:</span> {details.organizer}
        </p>
        <p>
          <span className="font-bold">Minimum Donation:</span> $
          {details.minimumDonation}
        </p>
        <p>
          <span className="font-bold">Deadline:</span>{" "}
          {new Date(details.deadline).toLocaleDateString()}
        </p>
      </div>
      <button
        onClick={handleDonate}
        disabled={isExpired}
        className={`w-full py-2 rounded-md text-white font-bold ${
          isExpired
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isExpired ? "Campaign Expired" : "Donate"}
      </button>
    </div>
  );
};

export default CampaignDetailsCard;
