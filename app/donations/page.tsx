"use client";
import React from "react";

const donors = [
  { name: "Srinivas Rao", amount: "₹5,000", image: "/donors/temple2.jpg" },
  { name: "Suraj Kumar", amount: "₹10,000", image: "/donors/temple2.jpg" },
  { name: "Ramesh Babu", amount: "₹7,500", image: "/donors/temple2.jpg" },
  { name: "Bhanuprasad", amount: "₹2,000", image: "/donors/temple2.jpg" },
  { name: "Suresh Kumar", amount: "₹3,000", image: "/donors/temple2.jpg" },
  { name: "Arjun", amount: "₹1,500", image: "/donors/temple2.jpg" },
];

const DonationsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#FF9933]/60 to-black text-center py-16 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-[#FFD700] drop-shadow-[0_0_10px_#FF9933] mb-8">
        🙏 మా దాతలందరికీ హృదయపూర్వక ధన్యవాదాలు 🙏
      </h1>
      <p className="text-white text-lg mb-10">
        May Lord Ayyappa bless all devotees who contributed to the temple construction.
      </p>

      {/* Donor Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {donors.map((donor, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-black/50 rounded-xl p-4 shadow-lg hover:shadow-[0_0_15px_#FF9933] transition-all duration-300 w-40"
          >
            <img
              src={donor.image}
              alt={donor.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-[#FFD700] mb-3"
            />
            <h2 className="text-[#FFD700] font-semibold">{donor.name}</h2>
            <p className="text-white text-sm">{donor.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationsPage;
