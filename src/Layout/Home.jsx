import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slide2 from '../assets/2.jpg';
import slide1 from '../assets/1.jpeg'
import slide3 from '../assets/3.webp'
import { CgCloseR } from "react-icons/cg";
const Home = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light" // Default to light theme
  );

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme class to the body
  useEffect(() => {
    document.body.className = theme; // Sets the body's class to the current theme
  }, [theme]);



  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const openModal = (campaign) => {
    setSelectedCampaign(campaign);
  };

  const closeModal = () => {
    setSelectedCampaign(null);
  };
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
            <img
              src={slide3}
              alt="Campaign Banner 1"
              className="w-full"
            />
            <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-gray-900">
              <h1 className="text-4xl font-bold mb-4">Support Inspiring Ideas</h1>
              <p className="mb-6">Join hands to bring creative projects to life!</p>
              <Link to="/campaigns" className="btn bg-green-500 px-6 py-2 rounded">
                Explore Campaigns
              </Link>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={slide1}
              alt="Campaign Banner 2"
              className="w-full"
            />
            <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-gray-900">
              <h1 className="text-4xl font-bold mb-4">Make a Difference</h1>
              <p className="mb-6">Contribute to campaigns that change lives.</p>
              <Link to="/campaigns" className="btn bg-green-500 px-6 py-2 rounded">
                View All Campaigns
              </Link>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={slide2}
              alt="Campaign Banner 3"
              className="w-full"
            />
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
                className="bg-white  dark:bg-gray-900 text-black dark:text-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
              >
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-xl font-bold mt-4">{campaign.title}</h3>
                <p className="text-gray-700 mt-2">{campaign.description.slice(0, 80)}...</p>
                <button
                  onClick={() => openModal(campaign)}
                  className="block mt-4 text-green-500 font-semibold"
                >
                  See More
                </button>
              </div>
            ))}

            {/* Modal */}
            {selectedCampaign && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white  dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
                  <button
                    onClick={closeModal}
                    className="text-red-500 hover:text-red-700 -mb-4 text-2xl"
                  >
                    <CgCloseR></CgCloseR>
                  </button>
                  <img
                    src={selectedCampaign.image}
                    alt={selectedCampaign.title}
                    className="w-full h-48 object-cover rounded"
                  />
                  <h2 className="text-2xl font-bold mt-4">{selectedCampaign.title}</h2>
                  <p className="text-gray-700 mt-4">{selectedCampaign.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Extra Sections */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Extra Section 1 */}
            <div className=" p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Why Crowdfunding?</h2>
              <p>
                Crowdfunding allows individuals to support causes they believe in, connect
                with like-minded people, and make a real difference in the world.
              </p>
            </div>

            {/* Extra Section 2 */}
            <div className=" p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">How It Works</h2>
              <ul className="list-disc ml-4">
                <li>Create and share your campaign</li>
                <li>Receive support from backers</li>
                <li>Achieve your goals together</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
