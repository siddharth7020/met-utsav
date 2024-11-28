

const Model = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const handleOpenMode = () => {
    //     setIsOpen(true);
    // };

    // const handleCloseMode = () => {
    //     setIsOpen(false);
    // };
    // function showEventDetails(eventId) {
    //     const event = events.find(e => e.id === eventId);
    //     document.getElementById('modalImage').innerHTML = `
    //         <img src="${event.image}" class="w-full h-full object-cover" alt="${event.title}">
    //     `;
    //     document.getElementById('modalTitle').textContent = event.title;
    //     document.getElementById('modalDate').innerHTML = `<i class="bi bi-calendar mr-2"></i>${new Date(event.date).toLocaleDateString()}`;
    //     document.getElementById('modalLocation').innerHTML = `<i class="bi bi-geo-alt mr-2"></i>${event.location}`;
    //     document.getElementById('modalDescription').textContent = event.description;
    //     document.getElementById('eventModal').classList.remove('hidden');
    // }

    return (
        <>
            {/* {isOpen && ( */}
                <div id="eventModal" className="fixed inset-0 bg-black bg-opacity-50 z-50">
                    <div className="bg-white max-w-4xl mx-auto mt-20 rounded-lg overflow-hidden">
                        <div className="relative h-[300px]" id="modalImage"></div>
                        <div className="p-6">
                            <h2 id="modalTitle" className="text-2xl font-bold mb-4">Modal Title</h2>
                            <div className="flex space-x-4 mb-4">
                                <p id="modalDate" className="flex items-center">
                                    <i className="bi bi-calendar mr-2"></i> Date Info
                                </p>
                                <p id="modalLocation" className="flex items-center">
                                    <i className="bi bi-geo-alt mr-2"></i> Location Info
                                </p>
                            </div>
                            <p id="modalDescription" className="text-gray-600 mb-6">Description of the modal</p>
                        </div>
                        {/* Close button */}
                        <button  className="absolute top-4 right-4 text-white">
                            <i className="bi bi-x-lg text-2xl"></i>
                        </button>
                    </div>
                </div>
            {/* )} */}
            {/* Button to open the modal */}
            <button  className="bg-blue-500 text-white p-2 rounded">
                Open Modal
            </button>
        </>
    );
};

export default Model;

