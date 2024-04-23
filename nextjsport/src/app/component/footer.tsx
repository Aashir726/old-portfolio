import { IoIosApps } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
const Footer = () => {
    return (
        <div className="flex bg-[#310f25] items-center justify-between">

            <div className="flex text-2xl text-white px-10  p-5">
                <HiGlobeAsiaAustralia />
                <IoIosApps />
                <div className="text-xl">~ Powered by Aashir</div>

            </div>

            <div className=" flex gap-2 text-white text-3xl">
            <FaSquareFacebook className=  "  cursor-pointer hover:bg-red-950 " />
            <FaSquareInstagram className="cursor-pointer hover:bg-red-950"/>
            <FaLinkedin className="cursor-pointer hover:bg-red-950 " />
                <div/>





        </div>








        </div >

    )
}
export default Footer