import { useState } from "react";
import AtdTable from "../Common/AtdTable"


const AttendanceTab = () => {
  const [filteropen, setFilterOpen] = useState(false);

  const handleFilterButtonClick = () => {
    setFilterOpen(true); // Show the filter form
  };

  const handleCloseForm = () => {
    setFilterOpen(false);
  };
  return (
    <div className="bg-gray-100 h-full">
      <div>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div>
            <div className="flex flex-row justify-between mb-2">
              <h2 className="text-2xl font-bold mb-2">Student Attendance</h2>
              <button className="lg:inline-block py-2 px-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-sm text-white font-bold rounded-xl transition duration-200" onClick={handleFilterButtonClick}>Filter</button>
            </div>
            {
              filteropen && (
                <div className="flex flex-col bg-white rounded-lg p-4 shadow-sm mb-2">
                  <div className=" flex flex-row justify-between space-x-2">
                    <div className=" flex flex-row space-x-2">
                      <div className="flex-1">
                        <label className="text-black font-bold" htmlFor="country">Intitute</label>
                        <select className="w-full bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1" id="country">
                          <option value="">Select a Intitute</option>
                          <option value="AF">Institute Of asian management development City</option>
                          <option value="DZ">ICS</option>
                          <option value="AO">IOM  </option>
                        </select>
                      </div>

                      <div className="flex-1">
                        <label className="text-black font-bold" htmlFor="country">Events</label>

                        <select className="w-full bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1" id="country">
                          <option value="">Select a Event</option>
                          <option value="AF">Dance</option>
                          <option value="DZ">Singing</option>
                          <option value="AO">Music</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col  lg:flex-row lg:space-x-2">
                      <button className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-sm text-white font-bold rounded-xl transition duration-200" type="submit">Submit</button>
                      <button className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-red-100 hover:bg-red-200 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" onClick={handleCloseForm}>Close</button>
                    </div>
                  </div>

                </div>
              )
            }
            <AtdTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttendanceTab