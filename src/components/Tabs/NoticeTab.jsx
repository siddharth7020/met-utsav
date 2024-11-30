import NoticeCard from "../Common/NoticeCard"


const NoticeTab = () => {
  return (
    <div className="bg-gray-300 h-full ">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-row justify-between mb-2">
          <h2 className="text-2xl font-bold mb-2">Student Attendance</h2>
          <button className="lg:inline-block py-2 px-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-sm text-white font-bold rounded-xl transition duration-200" >Notice</button>
        </div>
        <NoticeCard />
      </div>
    </div>
  )
}

export default NoticeTab