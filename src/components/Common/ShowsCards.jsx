import TALENTSHOW from '../../assets/MET-USTAV/talentshow.jpg'
import { useNavigate } from 'react-router-dom';

const ShowsCards = () => {
    const navigate = useNavigate();
    return (
        <div className='max-w-7xl mx-auto '>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 1 */}
                <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full">
                    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <img src={TALENTSHOW} alt="card-image" />
                    </div>
                    <div className="p-4">
                        <div className="mb-4 rounded-full bg-green-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                            POPULAR
                        </div>
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                            Website Review Check
                        </h6>
                        <p className="text-slate-600 leading-normal font-light">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                            Barcelona.
                        </p>
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                            <button className='bg-red-600 text-white px-4 py-2 rounded-md' onClick={() => navigate('/talentshow')}>
                                Intrested 
                            </button>
                        </div>
                    </div>

                </div>

                {/* 2 */}
                <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full">
                    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <img src={TALENTSHOW} alt="card-image" />
                    </div>
                    <div className="p-4">
                        <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                            POPULAR
                        </div>
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                            Website Review Check
                        </h6>
                        <p className="text-slate-600 leading-normal font-light">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                            Barcelona.
                        </p>
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                            <div className="flex flex-col ml-3 text-sm">
                                <span className="text-slate-800 font-semibold">Lewis Daniel</span>
                                <span className="text-slate-600">
                                    January 10, 2024
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full">
                    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <img src={TALENTSHOW} alt="card-image" />
                    </div>
                    <div className="p-4">
                        <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                            POPULAR
                        </div>
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                            Website Review Check
                        </h6>
                        <p className="text-slate-600 leading-normal font-light">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                            Barcelona.
                        </p>
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                            <div className="flex flex-col ml-3 text-sm">
                                <span className="text-slate-800 font-semibold">Lewis Daniel</span>
                                <span className="text-slate-600">
                                    January 10, 2024
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShowsCards