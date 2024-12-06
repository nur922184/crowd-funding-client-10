import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slide2 from '../assets/2.jpg';
import slide1 from '../assets/1.jpeg';
import slide3 from '../assets/3.webp';

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Fetch running campaigns from the database
    fetch("http://localhost:5000/campaigns?limit=6")
      .then((res) => res.json())
      .then((data) => setCampaigns(data));
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <section className="relative">
        <div className="carousel w-full h-96">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={slide3} alt="Campaign Banner 1" className="w-full" />
            <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-gray-900">
              <h1 className="text-4xl font-bold mb-4">Support Inspiring Ideas</h1>
              <p className="mb-6">Join hands to bring creative projects to life!</p>
              <Link to="/campaigns" className="btn bg-green-500 px-6 py-2 rounded">
                Explore Campaigns
              </Link>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={slide1} alt="Campaign Banner 2" className="w-full" />
            <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-gray-900">
              <h1 className="text-4xl font-bold mb-4">Make a Difference</h1>
              <p className="mb-6">Contribute to campaigns that change lives.</p>
              <Link to="/campaigns" className="btn bg-green-500 px-6 py-2 rounded">
                View All Campaigns
              </Link>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={slide2} alt="Campaign Banner 3" className="w-full" />
            <div className="absolute top-1/2 left-32 transform -translate-y-1/2 text-gray-900">
              <h1 className="text-4xl font-bold mb-4">Empower Communities</h1>
              <p className="mb-6">Help fund initiatives that matter.</p>
              <Link to="/campaigns" className="btn bg-green-500 px-6 py-2 rounded">
                Start Donating
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-2 gap-2">
          <a href="#slide1" className="btn btn-sm bg-gray-500 rounded"></a>
          <a href="#slide2" className="btn btn-sm bg-gray-500 rounded"></a>
          <a href="#slide3" className="btn btn-sm bg-gray-500 rounded"></a>
        </div>
      </section>

      {/* Running Campaigns Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Running Campaigns</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign) => (
              <div
                key={campaign._id}
                className="bg-white dark:bg-gray-900 text-black dark:text-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
              >
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-xl font-bold mt-4">{campaign.title}</h3>
                <p className="text-gray-700 mt-2">{campaign.description.slice(0, 80)}...</p>
                <Link
                  to={`/campaigns/${campaign._id}`}
                  className="block mt-4 text-green-500 font-semibold"
                >
                  See More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
