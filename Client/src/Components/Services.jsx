import { Link } from "react-router-dom"
export default function Services(){
    return(
        <>
            <div className="w-full h-fit p-4 flex flex-col gap-4 justify-center items-center bg-gray-100">
                <div className="flex flex-col items-center justify-center gap-1">
                    <h1 className="text-8xl text-blue-400 font-serif font-bold">Join Us Today </h1>
                    <h2 className="text-2xl text-grey-500 font-mono">Become a Part of us😊</h2>
                </div>
                <Link to='/signup'><button className="px-16 py-3 rounded-2xl bg-blue-600 text-xl text-white">Welcome</button></Link>
            </div>
        </>
    )
}