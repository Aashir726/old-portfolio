import Link from "next/link"

const Navbar = () => {
    return (

        <div>
            <div className="bg-[#310f25]">
                <div className="  mx-6   text-4xl text-white font-serif "> Portfilio</div>
                
                    <div>

                <nav className="flex justify-end px-8 space-x-7  hover:cursor-pointer  py-2 text-white">
                    <Link href={"#Home"} className="hover:text-purple-300">Home</Link>
                    <Link href={"#Education"} className="hover:text-purple-300">Education</Link>
                    <Link href={"#Contact"} className="hover:text-purple-300">Contact</Link>
                    <Link href={"#Feed back"} className="hover:text-purple-300">Feed back</Link>
                    <button className=" hover:text-purple-300 bg-stone-900 p-0.5 rounded-2xl ">Curriculum vitae</button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="  w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                    </svg>

                </nav>
                

                    </div>
            </div>













        </div>




    )
}
export default Navbar