const Feedback=()=>{
    return(
        <div className="grid grid-cols-2 mt-20">


            <div className="text-white text-3xl mt-24 px-14">
                    Suggest your feedback here we ensure to work on this. Thankyou


            </div>
           

           <div>
           <div className=" grid ">
                <div className="text-4xl text-white my-3">Send Message</div>
                <input className="p-2 w-1/2 border border-1  my-3 border-purple-900 focus:outline-2 outline-purple-800" type="text " placeholder="FullName" required />
                <input className=" p-2  w-1/2 my-3 border border-1 border-purple-900" type="text " placeholder="Email" />


                <input className=" p-10 flex items-start justify-start w-2/3 border border-1 border-purple-900 focus-outline-2   " type="text " placeholder="Send Message" required />
                <div>

                    <button className=" p-7 mt-6 mb-20 text-white text-xl py-2 bg-purple-800 rounded-3xl">Send </button>
                </div>






            </div>



           </div>










        </div>
    )
        
}
export default Feedback