import Image from "next/image"
const Heros = () => {
    return (
        <div className="grid grid-cols-[auto,450px] rounded-3xl mb-48  ">


            <div className=" mx-auto  text-5xl px-20 mt-36 text-white font-sans">Welcome to my Portfolio


                <div className=" mt-10 text-3xl font-sans">
                    Hey ! My Name is Aashir Shabbir.I am learning Generative Al and Metaverse from Presidential Initiative for Artifical intelligence & Computing (PIAIC) . I enrolled as a batch 51 student now i am in Quater 2 where we are learning NEXT.JS
                </div>
                 <button className="bg-red-950 hover:bg-red-900 text-xl font-light rounded-3xl p-3 px-16 mt-20">Download Cv</button>
            </div>
            <div className=" px-28 py-24 ">
                <Image src={require("../../../public/logo/IMG_2193.jpg")} alt="logo" height={600} width={700} />
            </div>

        </div>
    )
}
export default Heros