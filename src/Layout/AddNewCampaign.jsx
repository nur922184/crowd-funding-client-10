import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNewCampaign = () => {
  const [campaignData, setCampaignData] = useState({
    image: "",
    title: "",
    type: "personal issue",
    description: "",
    minimumDonation: "",
    deadline: "",
    email: "", // These fields should be auto-filled from the logged-in user context
    userName: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaignData({ ...campaignData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the input fields if needed
    if (
      !campaignData.image ||
      !campaignData.title ||
      !campaignData.description ||
      !campaignData.minimumDonation ||
      !campaignData.deadline
    ) {
      toast.error("Please fill out all required fields!");
      return;
    }

    try {
      // Save the campaign data to the database
      const response = await fetch("http://localhost:5000/addCampaign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(campaignData),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Campaign added successfully!");
        navigate("/campaigns");
      } else {
        toast.error("Failed to add campaign. Try again!");
      }
    } catch (error) {
      console.error("Error adding campaign:", error);
      toast.error("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Add New Campaign</h2>
      <form onSubmit={handleSubmit}>
        {/* Image URL */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Enter image URL"
            value={campaignData.image}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        {/* Campaign Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Campaign Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter campaign title"
            value={campaignData.title}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        {/* Campaign Type */}
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Campaign Type
          </label>
          <select
            id="type"
            name="type"
            value={campaignData.type}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          >
            <option value="personal issue">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative ideas">Creative Ideas</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter campaign description"
            value={campaignData.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          ></textarea>
        </div>

        {/* Minimum Donation */}
        <div className="mb-4">
          <label
            htmlFor="minimumDonation"
            className="block text-sm font-medium text-gray-700"
          >
            Minimum Donation Amount
          </label>
          <input
            type="number"
            id="minimumDonation"
            name="minimumDonation"
            placeholder="Enter minimum donation amount"
            value={campaignData.minimumDonation}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={campaignData.deadline}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        {/* User Email & Name (Read-Only Fields) */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            User Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={campaignData.email} // Should be filled with user context
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-gray-700"
          >
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={campaignData.userName} // Should be filled with user context
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 sm:text-sm"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Add Campaign
        </button>
      </form>
    </div>
  );
};

export default AddNewCampaign;
