import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import LoadingPage from "../Component/LoadingPage";
const MyDonations = () => {



  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useContext(AuthContext)

  // Replace this with the user's email from authentication
  const userEmail =user.email ; // Replace with actual user email

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch(
          `https://my-assignment-ten-server-sigma.vercel.app/donations?email=${userEmail}`
        );
        const data = await response.json();
        setDonations(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching donations:", error);
        setLoading(false);
      }
    };

    fetchDonations();
  }, [userEmail]);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6  dark:bg-gray-900 text-black dark:text-white bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-6">My Donations</h2>
      {donations.length === 0 ? (
        <p className="text-center text-gray-500">No donations found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <div
              key={donation._id}
              className="border border-gray-300 rounded-lg shadow-sm p-4"
            >
              <img
                src={donation.detailsImage}
                alt={donation.campaignTitle}
                className="h-48 w-full object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{donation.campaignTitle}</h3>
              <p className="text-gray-600 text-sm mt-2">{donation.title}</p>
              <p className="mt-2">
                <span className="font-bold">Amount Donated:</span> ${donation.donationAmount}
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-bold">Donated On:</span>{" "}
                {new Date(donation.deadlineDate).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDonations;
