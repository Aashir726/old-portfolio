import { MdEmail } from "react-icons/md";
const Contact = () => {
    return (
        <div className="grid grid-row-2 text-white mt-40 mb-32">
            <div>


                <div className="flex items-center justify-center text-5xl mt-28 ">
                    Contact Us
                </div>
                <div className="text-2xl flex items-center justify-center py-3 ">We are here for your assitance feel free to ask or contact us</div>

                <div className="flex py-1 px-36"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                    <div className="text-3xl underline px-4 ">Address

                    </div>
                </div>
                <div className=" text-xl px-44">  House No 21 Madni colony Grex village Mauripur, karachi.</div>


                <div className="flex text-2xl px-36 py-1 mt-11">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                    </svg>
                    <div className="px-4 underline text-3xl">
                        Phone
                    </div>
                </div>
                <div className=" px-52 py-4 text-xl">0326-2921477 </div>

                <div className=" flex gap-4 underline text-3xl px-36 mt-10">
                    <MdEmail />
                    <div> Email</div>
                </div>
                <div className="text-2xl px-44 py-3">Aashirshabbir786@gmail.com</div>


            </div>



        </div>
    )
}
export default Contact