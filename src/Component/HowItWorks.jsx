import React from 'react';
import { Slide } from 'react-awesome-reveal';

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Slide direction="right">
          <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
        </Slide>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded shadow">
            <div className="mb-4">
              <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Start a Campaign</h3>
            <p className="text-gray-600">
              Create a campaign by providing details, setting goals, and adding a deadline.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow dark:bg-gray-900 text-black dark:text-white">
            <div className="mb-4">
              <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Spread the Word</h3>
            <p className="text-gray-600">
              Share your campaign with friends, family, and social networks to attract supporters.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow dark:bg-gray-900 text-black dark:text-white">
            <div className="mb-4">
              <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Receive Donations</h3>
            <p className="text-gray-600">
              Collect funds directly through our secure platform and start making a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;