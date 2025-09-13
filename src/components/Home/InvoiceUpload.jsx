import React from 'react';
import { GoPlusCircle } from 'react-icons/go';

export default function InvoiceUpload() {
  const gradientStyle = {
    background: 'linear-gradient(to bottom, #DD2A7B, #9747FF, #334CCA)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }

  return (
    <div className=" flex flex-col bg-white text-customPurple w-full rounded-tl-[32px] rounded-tr-[32px] p-4">
      <div className="p-6 w-full">
        <div className="flex flex-col items-center space-y-4 bg-gray-100 rounded-[24px] p-8 w-full">
          <GoPlusCircle className="text-6xl" style={gradientStyle} />

          <h2 className="text-[24px] font-semibold" style={gradientStyle}>
            Create New Invoice
          </h2>

          <p className="text-gray-600 text-center">
            Start by creating and sending new invoice
          </p>
        </div>

        <p className="text-customPurple text-center mt-6">
          Or Upload an existing invoice and set payment reminder
        </p>
      </div>
    </div>
  );
}
