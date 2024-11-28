

const EventForm = () => {
    return (
        <div className=" w-full">
            <form className="px-7  grid justify-center items-center ">
                <div className="grid gap-6 mt-10 mb-10 " id="form">
                    <div className="grid gap-6 w-full">
                        <input className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black" type="text" placeholder="Event Name" name="Event Name" required="" />
                        <select className="shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black focus:ring-1 focus:ring-black-500 transition ease-in-out duration-150" id="gender">
                            <option value="male">Dance</option>
                            <option value="female">Sports</option>
                            <option value="other">Other</option>
                        </select>
                        {/* <select className="shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black focus:ring-1 focus:ring-black-500 transition ease-in-out duration-150" id="gender">
                            <option value="male">ICS</option>
                            <option value="female">IOM</option>
                            <option value="other">PGDM</option>
                        </select> */}
                        <input className="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]" type="Email" placeholder="Email" id="Email" name="email" />
                        <input className="p-3 shadow-2xl   glass w-full text-black outline-none focus:border-solid focus:border-[1px]border-[#035ec5]" type="date" required="" />
                    </div>
                    <div className="flex gap-3">
                        <input className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="password" placeholder="Password" id="password" name="password" required="" />
                        <input className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="password" placeholder="Confirm password" required="" />
                    </div>
                    <button className="outline-none glass shadow-2xl  w-full p-3  bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EventForm