import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CampaignDetalisCard = () => {
    const details = useLoaderData()
    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
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
        //   onClick={handleDonate}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Donate
        </button>
      </div>
    );
};

export default CampaignDetalisCard;