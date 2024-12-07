import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';


const CampaingnUpdate = () => {
 const updateData = useLoaderData()
  const {user} = useContext(AuthContext)


    return (
      <div className="max-w-3xl mx-auto mt-10 p-6  dark:bg-gray-900 text-black dark:text-white bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Update Campaign</h2>
      <form>
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
            defaultValue={updateData.image}
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
            defaultValue={updateData.title}
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
            defaultValue={updateData.type}
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
            defaultValue={updateData.description}
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
            defaultValue={updateData.minimumDonation}
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
            defaultValue={updateData.deadline}
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
         Update Campaign
        </button>
      </form>
    </div>
    );
};

export default CampaingnUpdate;