import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import Globalbar from "../Components/Globalbar.jsx"
export default function Signin(){
    const [name, setName ] = useState("")
    const [email, setEmail] =useState("")
    const [password, setPassword] = useState("")

    const handleSubmitForm = async () =>{
        try {
            const data = await axios.post('api/login', {
                name, 
                email,
                password
            })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
            <div className='w-screen h-screen'>
                <Globalbar/>
                <div className='flex justify-center items-center'>
                    <div className='w-3/4 h-fit p-4 flex gap-3 rounded-2xl shadow-2xl bg-gray-100'>
                        <div className='flex items-center justify-center flex-col gap-3 w-1/2 bg-yellow-500 rounded-2xl m-3'>
                            <h1 className='text-black text-5xl font-serif'>Welcome Back</h1>
                            <h2 className='text-black text-2xl font-mono'>Become a Platinum member</h2>
                            <Link to='/signin'><button className='bg-blue-700 px-12 py-2 rounded-2xl text-xl text-white'>Platinum</button></Link>
                        </div>
                        <div className='w-1/2'>
                            <form action="" method="post" className='flex flex-col gap-3 outline-none text-black' onSubmit={handleSubmitForm}>
                                <div className='flex flex-col justify-center items-center p-3 gap-3'>
                                    <h1 className='text-2xl font-bold font-mono text-blue-800'>Hello There!</h1>
                                    <p className='text-lg text-slate-700'>Welcome again 😊</p>
                                    <div className='flex flex-row gap-1'>
                                        <p className='text-md text-slate-600'>Have you Forgotten your Password</p>
                                        <Link to='/'><button className='underline text-md text-blue-600'>Click Here!</button></Link>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="name">Full name</label>
                                    <input type="text" className='w-full py-3 border border-black rounded-2xl' id='name' value={name} onChange={(e) =>{setName(e.target.value)}}/>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" className='w-full py-3 border border-black rounded-2xl' id='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className='py-3 border border-black rounded-2xl' id='state' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                                </div>
                                <div className="flex flex-row justify-between px-3">
                                    <input type="checkbox" name="" id="" />
                                    <p className="text-black text-lg">Accept Terms and Conditions</p>
                                </div>
                                <input type="submit" value="Signin" className='w-full py-3 bg-blue-800 rounded-2xl text-xl text-white'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}