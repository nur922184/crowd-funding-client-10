import React from 'react';

const Footer = () => {
    return (
        <footer className=" dark:bg-gray-800 text-black dark:text-white bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About CrowdFund</h3>
            <p>CrowdFund is a platform where people can raise money for different projects, ideas, or causes by inviting others to contribute financially.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li><a href="/campaigns" className="hover:text-primary">All Campaigns</a></li>
              <li><a href="/addCampaign" className="hover:text-primary">Start a Campaign</a></li>
              <li><a href="/login" className="hover:text-primary">Log In</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: info@crowdfund.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Funding Street, Money City, CF 12345</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 CrowdFund. All rights reserved.</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;