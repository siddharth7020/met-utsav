

const EventDeatils = () => {
  return (
    <div id="eventModal" className="fixed inset-0 bg-black bg-opacity-50 hidden z-50">
    <div className="bg-white max-w-4xl mx-auto mt-20 rounded-lg overflow-hidden">
        <div className="relative h-[300px]" id="modalImage"></div>
        <div className="p-6">
            <h2 id="modalTitle" className="text-2xl font-bold mb-4"></h2>
            <div className="flex space-x-4 mb-4">
                <p id="modalDate" className="flex items-center"><i className="bi bi-calendar mr-2"></i></p>
                <p id="modalLocation" className="flex items-center"><i className="bi bi-geo-alt mr-2"></i></p>
            </div>
            <p id="modalDescription" className="text-gray-600 mb-6"></p>
            <button 
                className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-white py-3 rounded-lg font-medium transition-colors">
                Register
            </button>
        </div>
        <button className="absolute top-4 right-4 text-white">
            <i className="bi bi-x-lg text-2xl"></i>
        </button>
    </div>
</div>
  )
}

export default EventDeatils