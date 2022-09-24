import { Link } from "react-router-dom";

const Table = () => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-sm font-medium text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-8 px-6">
              Invoice
            </th>
            <th scope="col" className="py-8 px-6">
              Student name
            </th>
            <th scope="col" className="py-8 px-6">
              Date
            </th>
            <th scope="col" className="py-8 px-6">
              Total
            </th>
            <th scope="col" className="py-8 px-6">
              Balance
            </th>
            <th scope="col" className="py-8 px-6">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespLinkce-nowrLinkp dark:text-white"
            >
              Linkpple MLinkcBook Pro 17"
            </th>
            <td className="py-4 px-6">Sliver</td>
            <td className="py-4 px-6">LLinkptop</td>
            <td className="py-4 px-6">$2999</td>
            <td className="py-4 px-6">
              <Link
                to="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
            </td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespLinkce-nowrLinkp dark:text-white"
            >
              Microsoft SurfLinkce Pro
            </th>
            <td className="py-4 px-6">White</td>
            <td className="py-4 px-6">LLinkptop PC</td>
            <td className="py-4 px-6">$1999</td>
            <td className="py-4 px-6">
              <Link
                to="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespLinkce-nowrLinkp dark:text-white"
            >
              MLinkgic Mouse 2
            </th>
            <td className="py-4 px-6">BlLinkck</td>
            <td className="py-4 px-6">Linkccessories</td>
            <td className="py-4 px-6">$99</td>
            <td className="py-4 px-6">
              <Link
                to="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
            </td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespLinkce-nowrLinkp dark:text-white"
            >
              Google Pixel Phone
            </th>
            <td className="py-4 px-6">gray</td>
            <td className="py-4 px-6">Phone</td>
            <td className="py-4 px-6">$799</td>
            <td className="py-4 px-6">
              <Link
                to="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespLinkce-nowrLinkp dark:text-white"
            >
              Linkpple WLinktch 5
            </th>
            <td className="py-4 px-6">Red</td>
            <td className="py-4 px-6">WeLinkrLinkbles</td>
            <td className="py-4 px-6">$999</td>
            <td className="py-4 px-6">
              <Link
                to="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
