import TALENTSHOW from '../../assets/MET-USTAV/talentshow.jpg'
import WORKSHOP from '../../assets/MET-USTAV/workshop.jpg'
import COMPETITION from '../../assets/MET-USTAV/competition.jpg'
import Exhibition from "../../assets/MET-USTAV/creativityexhibition.jpeg";
import { useNavigate } from 'react-router-dom';

const ShowsCards = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const role = user && user.role;

    console.log(role);


    const handleClick = (destination) => {
        if (role === null) {
            navigate('/register');
        } else {
            navigate(destination);
        }
    };

    return (
        <div className='max-w-7xl mx-auto '>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 1 */}
                <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full">
                    <div className="relative m-2.5 overflow-hidden text-white rounded-md">
                        <img src={TALENTSHOW} alt="card-image" />
                    </div>
                    <div className="p-4">
                        {/* <div className="mb-4 rounded-full bg-green-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                            POPULAR
                        </div> */}
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                            TALENT SHOW
                        </h6>
                        <p className="text-slate-600 leading-normal font-light">
                            Be ready to shine and showcase your unique talents. Whether you sing, dance, act, or have a skill that amazes the crowd, this is your moment to step into the spotlight!
                        </p>
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                            <button className='bg-red-600 text-white px-4 py-2 rounded-md' onClick={() => handleClick('/talentshow')}>
                                Register Here
                            </button>
                        </div>
                    </div>

                </div>

                {/* 2 */}
                <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full">
                    <div className="relative m-2.5 overflow-hidden text-white rounded-md">
                        <img src={WORKSHOP} alt="card-image" />
                    </div>
                    <div className="p-4">
                        {/* <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                            POPULAR
                        </div> */}
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                            WORKSHOP
                        </h6>
                        <p className="text-slate-600 leading-normal font-light">
                            Learn, grow, and master new skills. Workshops are the perfect opportunity for you to gain hands-on experience, explore exciting concepts, and connect with experts who inspire.
                        </p>
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                            <button className='bg-red-600 text-white px-4 py-2 rounded-md' onClick={() => handleClick('/workshop')}>
                                Register Here
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full">
                    <div className="relative m-2.5 overflow-hidden text-white rounded-md">
                        <img src={COMPETITION} alt="card-image" />
                    </div>
                    <div className="p-4">
                        {/* <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                            POPULAR
                        </div> */}
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                            COMPETITION
                        </h6>
                        <p className="text-slate-600 leading-normal font-light">
                            Test your skills, challenge your limits, and showcase your talent. Participate in competitions to compete in a dynamic and engaging environment where determination take center stage.
                        </p>
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                            <button className='bg-red-600 text-white px-4 py-2 rounded-md' onClick={() => handleClick('/competition')}  >
                                Register Here
                            </button>
                        </div>
                    </div>
                </div>

                {/* 4 */}
                <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full">
                    <div className="relative m-2.5 overflow-hidden text-white rounded-md">
                        <img src={Exhibition} alt="card-image" />
                    </div>
                    <div className="p-4">
                        {/* <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                            POPULAR
                        </div> */}
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                            Creativity Exhibition
                        </h6>
                        <p className="text-slate-600 leading-normal font-light">
                        The Creativity Exhibition at MET Utsav showcases the richness of Indian culture under the theme 
                        "Sanskriti."
                        </p>
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                            <button className='bg-red-600 text-white px-4 py-2 rounded-md' onClick={() => handleClick('/creativityexhibition')}>
                                Register Here
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShowsCards