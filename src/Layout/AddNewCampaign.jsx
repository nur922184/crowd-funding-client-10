import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const AddNewCampaign = () => {
  const { user} = useContext(AuthContext)
const handleSubmitCampaignForm = e => {
    e.preventDefault()

    const form = e.target;
    const image = form.image.value
    const title = form.title.value
    const type = form.type.value
    const description = form.description.value
    const minimumDonation = form.minimumDonation.value
    const deadline = form.deadline.value
    const email = form.email.value
    const userName = form.userName.value

    const newCampaigns = {image, title, type, description, minimumDonation, deadline, userName, email }
    // console.log(newCampaigns)

    // sent data to server

    fetch('https://my-assignment-ten-server-sigma.vercel.app/campaigns', {
        method: "POST", 
        headers: {
            'content-type':'application/json'
        }, 
        body: JSON.stringify(newCampaigns)
    })
    .then(res=> res.json())
    .then(data=> {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'success',
                text: 'campaigns added Successfully',
                icon: 'success',
                confirmButtonText: 'close'
              })
        }
    } )

}
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6  dark:bg-gray-900 text-black dark:text-white bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Add New Campaign</h2>
      <form onSubmit={handleSubmitCampaignForm}>
        {/* Image URL */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700  dark:text-white">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Enter image URL"
            required
            // value={campaignData.image}
            // onChange={handleChange}
            className="mt-1 block w-full border dark:bg-gray-900  border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        {/* Campaign Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700  dark:text-white">
            Campaign Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter campaign title"
            required
            // value={campaignData.title}
            // onChange={handleChange}
            className="mt-1 block w-full border dark:bg-gray-900  border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        {/* Campaign Type */}
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700  dark:text-white">
            Campaign Type
          </label>
          <select
            id="type"
            name="type"
            // value={campaignData.type}
            // onChange={handleChange}
            className="mt-1 block w-full border dark:bg-gray-900  border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
            className="block text-sm font-medium text-gray-700  dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter campaign description"
            required
            // value={campaignData.description}
            // onChange={handleChange}
            rows="4"
            className="mt-1 block w-full border dark:bg-gray-900  border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          ></textarea>
        </div>

        {/* Minimum Donation */}
        <div className="mb-4">
          <label
            htmlFor="minimumDonation"
            className="block text-sm font-medium text-gray-700  dark:text-white"
          >
            Minimum Donation Amount
          </label>
          <input
            type="number"
            id="minimumDonation"
            name="minimumDonation"
            placeholder="Enter minimum donation amount"
            required
            // value={campaignData.minimumDonation}
            // onChange={handleChange}
            className="mt-1 block w-full border dark:bg-gray-900  border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700  dark:text-white">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            required
            // value={campaignData.deadline}
            // onChange={handleChange}
            className="mt-1 block w-full border dark:bg-gray-900  border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        {/* User Email & Name (Read-Only Fields) */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700  dark:text-white"
          >
            User Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user?.email} // Should be filled with user context
            readOnly
            className="mt-1 block w-full border dark:bg-gray-900  border-gray-300 rounded-md shadow-sm p-2  dark:text-white sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-gray-700  dark:text-white"
          >
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={user?.displayName} // Should be filled with user context
            readOnly
            className="mt-1 block w-full border dark:bg-gray-900  border-gray-300 rounded-md shadow-sm p-2 sm:text-sm"
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
