import { ImBooks } from "react-icons/im";
import Image from "next/image";
const Education = () => {
    return (
        <div className="grid grid-cols-[1fr,700px] gap-9 mb-28 mt-28 ">
            <div>


                <div className="px-20 text-white max-h-full mt-64">
                    <p className="text-6xl font-serif py-9 ">Education Dashboard </p>
                    <p className="text-3xl ">Welcome to Education section </p>
                </div>




                <div className="flex text-white underline items-center px-20 ">
                    <ImBooks className="  text-3xl  " />
                    <div className="flex text-2xl py-2 mr-14 ">2016---2019 </div>
                    <div className="py-8 text-xl ">Completed bachelors in Avionics from<br /> PAF-KIET</div>

                </div>


                <div className="flex text-white underline items-center px-20 ">
                    <ImBooks className="  text-3xl  " />
                    <div className="flex text-2xl py-2 mr-14 ">2012---2014 </div>
                    <div className="py-8 text-xl ">Completed Hsc from <br />Saleem Nawaz Fazia college Base masroor</div>

                </div>

                <div className="flex text-white underline items-center px-20 ">
                    <ImBooks className="  text-3xl  " />
                    <div className="flex text-2xl  mr-14 ">2010---2012 </div>
                    <div className="py-8 text-xl ">Completed ssc from Happy villa School</div>

                </div>

            </div>
            <div className="">

                <div className="text-white text-4xl mt-72 px-52 py-10 font-sans">
                    Technical Skills
                </div>
                <div className="flex text-white ">
                   

                        <div className="text-xl bg-slate-400 px-28 py-12">
                            <div className=" text-2xl py-2   ">Software skills</div>
                            <p>Basic understanding of</p>
                            <li>Canva</li>
                            <li>Pr</li>

                        </div>
                  
                    <div className="flex flex-col bg-slate-400 p-12 text-xl  ">
                        <div className=" text-2xl py-2 ">Coding skills</div>
                        <p>Basic knowledge of</p>
                        <li >HTML</li>
                        <li >CSS</li>
                        <li >Tailwind</li>
                        <li >NEXT.JS</li>

                    </div>



                </div>

            </div>


        </div>
    )
}
export default Education