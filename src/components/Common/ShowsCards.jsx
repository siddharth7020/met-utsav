import TALENTSHOW from '../../assets/MET-USTAV/talentshow.jpg'
import WORKSHOP from '../../assets/MET-USTAV/workshop.jpg'
import COMPETITION from '../../assets/MET-USTAV/competition.jpg'
import { useNavigate } from 'react-router-dom';

const ShowsCards = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const role = user && user.role;

    console.log(role);


    const handleClick = () => {
        if (role === null) {
            navigate('/register');
        } else {
            navigate('/talentshow');
        }
    };

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
                            TALENT SHOW
                        </h6>
                        <p className="text-slate-600 leading-normal font-light">
                        A talent show highlights diverse skills like singing, dancing, and acting.
                            It celebrates creativity, boosts confidence, and provides a platform for
                            participants to showcase their abilities.
                        </p>
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                            <button className='bg-red-600 text-white px-4 py-2 rounded-md' onClick={handleClick}>
                                Interested
                            </button>
                        </div>
                    </div>

                </div>

                {/* 2 */}
                <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full">
                    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <img src={WORKSHOP} alt="card-image" />
                    </div>
                    <div className="p-4">
                        <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                            POPULAR
                        </div>
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                            WORKSHOP
                        </h6>
                        <p className="text-slate-600 leading-normal font-light">
                        Workshop events are interactive sessions focused on skill-building or learning. They encourage hands-on participation, foster collaboration, and provide practical knowledge to enhance expertise in specific fields.
                        </p>
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                            <button className='bg-red-600 text-white px-4 py-2 rounded-md' >
                                Comming Soon
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full">
                    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <img src={COMPETITION} alt="card-image" />
                    </div>
                    <div className="p-4">
                        <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                            POPULAR
                        </div>
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                            COMPETITION
                        </h6>
                        <p className="text-slate-600 leading-normal font-light">
                        Competition foster skill development and healthy rivalry by challenging participants to excel in various activities. They inspire creativity, build confidence, and showcase talent, encouraging teamwork and excellence.
                        </p>
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                            <button className='bg-red-600 text-white px-4 py-2 rounded-md' >
                                Comming Soon
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShowsCards