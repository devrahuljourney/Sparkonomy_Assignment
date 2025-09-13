import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const earningsData = {
  timePeriod: ["1 Month", "3 Months", "1 Year", "Custom"],
  totalEarnings: 125000,
  paymentAwaited: 25000,
  paymentOverdue: 25000,
  avatar: "https://i.pravatar.cc/40", 
};

export default function EarningsCard() {
  const [selectedPeriod, setSelectedPeriod] = useState("3 Months");

  return (
    <div className="p-6  mx-auto space-y-6 bg-white  border border-gray-200">

     
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <span className="font-semibold text-gray-600">Time Period</span>
        <div className="flex items-center gap-2 flex-wrap">
          {earningsData.timePeriod.map((period) =>
            period !== "Custom" ? (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-1 rounded-full border ${
                  selectedPeriod === period
                    ? "bg-purple-100 text-purple-600 border-purple-300"
                    : "bg-white text-gray-500 border-gray-200"
                }`}
              >
                {period}
                {period === "1 Year" && (
                  <span className="ml-1 text-purple-600">👑</span>
                )}
              </button>
            ) : (
              <button
                key={period}
                className="flex items-center gap-1 px-4 py-1 rounded-full border border-gray-200 text-gray-500 bg-white"
              >
                <FaRegCalendarAlt />
                Custom
              </button>
            )
          )}
        </div>
      </div>

      
      <div className="grid md:grid-cols-2 gap-6">

        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 flex flex-col items-start justify-center relative">
          <p className="text-gray-500 text-start ">Total Earnings</p>
          <p className="text-3xl text-start font-bold text-purple-600 mt-1">
            ${earningsData.totalEarnings.toLocaleString()}
          </p>
          
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-xl border text-start border-gray-200">
            <p className="text-gray-500">Payment Awaited</p>
            <p className="text-lg font-bold text-purple-600 mt-1">
              ${earningsData.paymentAwaited.toLocaleString()}
            </p>
          </div>
          <div className="p-4 bg-gray-50 text-start rounded-xl border border-gray-200">
            <p className="text-gray-500">Payment Overdue</p>
            <p className="text-lg font-bold text-purple-600 mt-1">
              ${earningsData.paymentOverdue.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
