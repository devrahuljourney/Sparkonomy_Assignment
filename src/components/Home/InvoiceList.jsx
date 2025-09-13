import { FiEdit2 } from "react-icons/fi";
import { CiBellOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
const InvoiceList = () => {
  const invoices = [
    { client: "Client Name", amount: 12500, dueDate: "2024-06-15", status: "Unpaid" },
    { client: "Client Name", amount: 12500, dueDate: "2024-06-15", status: "Unpaid" },
    { client: "Income Trend", amount: 12500, dueDate: "2024-06-15", status: "Disputed" },
    { client: "Income Trend", amount: 12500, dueDate: "2024-06-15", status: "Paid" },
    { client: "Income Trend", amount: 12500, dueDate: "2024-06-15", status: "Paid" },
    { client: "Income Trend", amount: 12500, dueDate: "2024-06-15", status: "Partially Paid" },
    { client: "Income Trend", amount: 12500, dueDate: "2024-06-15", status: "Paid" },
    { client: "Income Trend", amount: 12500, dueDate: "2024-06-15", status: "Overdue" },
    { client: "Income Trend", amount: 12500, dueDate: "2024-06-15", status: "Awaited" },
    { client: "Income Trend", amount: 12500, dueDate: "2024-06-15", status: "Draft" },
    { client: "Income Trend", amount: 12500, dueDate: "2024-06-15", status: "Paid" },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Unpaid':
        return 'bg-gray-200 text-gray-700';
      case 'Disputed':
        return 'bg-red-100 text-red-700';
      case 'Paid':
        return 'bg-green-100 text-green-700';
      case 'Partially Paid':
        return 'bg-yellow-100 text-yellow-700';
      case 'Overdue':
        return 'bg-red-200 text-red-800';
      case 'Awaited':
        return 'bg-yellow-200 text-yellow-800';
      case 'Draft':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md  mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Your invoices</h2>
        <button className=" "> <IoIosArrowDown/> </button>
      </div>
      {invoices.map((invoice, index) => (
        <div key={index} className="flex justify-between items-center mb-2 p-2 bg-gray-50 rounded">
          <div>
            <div className="text-sm font-medium text-gray-700">{invoice.client}</div>
            <div className="text-xs text-gray-500">₹{invoice.amount.toLocaleString()}, Due {invoice.dueDate}</div>
          </div>
          <button
            className={`px-3 py-1 rounded flex  text-sm ${getStatusStyle(invoice.status)}`}
          >
            {invoice.status === 'Overdue' || invoice.status === 'Awaited' ? (
              <p className=" flex justify-center items-center gap-5" > 
                {invoice.status} <span className="text-xs"> <CiBellOn size={24} /> </span>
              </p>
            ) : invoice.status === 'Draft' ? (
              <span className="text-xs  flex justify-center gap-5 items-center"> Edit <FiEdit2 size={24} />  </span>
            ) : (
              invoice.status
            )}
          </button>
        </div>
      ))}
      
      <div className="mt-2 text-center text-gray-500 text-xs">
        <p>Sparkonomy</p>
        <p>sparking the creator economy</p>
      </div>
    </div>
  );
};

export default InvoiceList;