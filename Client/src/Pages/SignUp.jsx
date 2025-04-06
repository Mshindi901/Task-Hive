import axios from 'axios';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import Globalbar from '../Components/Globalbar';
import { useNavigate } from 'react-router-dom';
export default function Signup(){
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [role, setRole]= useState("Choose your Role")
    const [location, setLocation] = useState({
        city: "",
        state: "",
        zip: ""
    })
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(null)
    const [password, setPassword] = useState("")
    const Navigate = useNavigate()
    const handleImageChange = (e) => {
        try {
            const file = e.target.files[0]
            if(file) {
                setImage(file)
                setPreview(URL.createObjectURL(file))
            }
        } catch (error) {
            console.log(error)
        }

    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const data = await axios.post('api/account',{
                name,
                email,
                role,
                location,
                image,
                password
            })
            console.log(data.message)
            Navigate('/signin')
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
                        <div className='flex items-center justify-center flex-col gap-3 w-1/2 bg-blue-800 rounded-2xl m-3'>
                            <h1 className='text-white text-5xl font-serif'>Welcome</h1>
                            <h2 className='text-white text-2xl font-mono'>If you already have an account!</h2>
                            <Link to='/signin'><button className='bg-white px-12 py-2 rounded-2xl text-xl text-blue-400'>Login!</button></Link>
                        </div>
                        <div className='w-1/2'>
                            <form action="" method="post" className='flex flex-col gap-3 outline-none text-black' onSubmit={handleSubmitForm}>
                                <div className='flex flex-col justify-center items-center p-3 gap-3'>
                                    <h1 className='text-2xl font-bold font-mono text-blue-800'>Welcome!</h1>
                                    <p className='text-lg text-slate-700'>Become a part of us 😊</p>
                                    <div className='flex flex-row gap-1'>
                                        <p className='text-md text-slate-600'>Already have an account!</p>
                                        <Link to='/signin'><button className='underline text-md text-blue-600'>Login!</button></Link>
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
                                    <label htmlFor="role">Role</label>
                                    <select name="" className='w-full py-3 border border-black rounded-2xl' id="role"value={role} onChange={(e) => {setRole(e.target.value)}}>
                                        <option value="Client">Client</option>
                                        <option value="Service Provider">Service Provider</option>
                                    </select>
                                </div>
                                <div className='grid grid-cols-3 gap-2'>
                                    <div className='flex flex-col'>
                                        <label htmlFor="city">city</label>
                                        <input type="text" className='py-3 border border-black rounded-2xl' id='city' value={location.city} onChange={(e) => {setLocation({...location, city: e.target.value})}}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="state">State</label>
                                        <input type="text" className='py-3 border border-black rounded-2xl' id='state' value={location.state} onChange={(e) => {setLocation({...location, state: e.target.value})}}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row gap-2'>
                                            <label htmlFor="zip">Zip code</label>
                                            <p className='text-lg text-slate-500'>*optional</p>
                                        </div>
                                        <input type="text" className='py-3 border border-black rounded-2xl' id='zip' value={location.zip} onChange={(e) => {setLocation({...location, zip: e.target.value})}}/>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="profile">Profile Picture</label>
                                    <input type="file" className='w-full py-4 border border-black rounded-2xl px-2' id='profile' onChange={handleImageChange}/>
                                    {
                                        preview &&(
                                            <img src={preview} alt="" className='w-80 h-80 rounded-full object-center pt-3' />
                                        )
                                    }
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className='py-3 border border-black rounded-2xl' id='state' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
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