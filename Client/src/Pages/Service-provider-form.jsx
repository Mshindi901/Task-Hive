import Globalbar from '../Components/Globalbar.jsx';
import { useState } from 'react';
//home icon
import { IoHome } from "react-icons/io5";
//car icon
import { FaCarSide } from "react-icons/fa";
//Hospital icon
import { FaHospitalAlt } from "react-icons/fa";
//camera icon
import { FaCamera } from "react-icons/fa";
//tools icon
import { FaTools } from "react-icons/fa";
//book icon
import { IoBookSharp } from "react-icons/io5";
//pc icon
import { FaLaptopCode } from "react-icons/fa";
//pet icon
import { MdPets } from "react-icons/md";
//Truck icon
import { FaTruckMoving } from "react-icons/fa6";
import axios from 'axios'

export default function Workers(){
    const [name, setName] =useState("")
    const [description, setDescription] = useState("")
    const [service, setService] = useState({
        category: "",
        name: ""
    })
    const [location, setLocation] = useState({
        city: "",
        state: "",
    })
    const [contact, setContact] = useState({
        phone: "",
        email: ""
    })


    const handleSubmitForm = async(e) =>{
        e.preventDefault()
        try {
            const data = await axios.post('api/profile', {
                name,
                description,
                service,
                location,
                contact
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
                    <div className='w-3/4 h-fit p-4 flex flex-col shadow-2xl rounded-2xl'>
                        <div className='w-full h-80 rounded-b-full bg-blue-800 flex flex-col justify-center items-center'>
                            <h2 className='text-3xl text-white font-bold font-mono'>Hello Again!</h2>
                            <p className='text-lg text-white'>Create a profile of what you do!</p>
                        </div>

                        <form action="" method="post" className='w-full h-fit p-3 flex flex-col outline-none gap-2' onSubmit={handleSubmitForm}>
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-blue-700 text-3xl font-bold'>Create Profile</h1>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="name">Full name</label>
                                <input type="text" name="" id="name" className='w-full py-3 border border-black rounded-2xl' value={name} onChange={(e) => {setName(e.target.value)}}/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='flex gap-2'>
                                    <label htmlFor="description">Description</label>
                                    <p className='text-lg text-slate-500'>0-600 words</p>
                                </div>
                                <input type="text" name="" id="description" className='w-full py-8 border border-black rounded-2xl' value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                            </div>
                            <div className='grid grid-cols-2 gap-3'>
                                <div className='flex flex-col'>
                                    <label htmlFor="service">Service</label>
                                    <select name="" id="services" className='py-3 border border-black rounded-2xl' value={service.category} onChange={(e) =>setService({...service, category:e.target.value})}>

                                        <option value="Home services">Home services 🏠</option>



                                        <option value="Automotive Services">Automotive Services 🚗</option>



                                        <option value="Health and wellness">Health and wellness🏥</option>


                                        <option value="Beauty and Personal care">Beauty and Personal care💅</option>


                                        <option value="Event Services">Event Services📸</option>

                                        <option value="Handyman and Repair">Handyman and Repair</option>

   
                                        <option value="Educational and Training">Educational and Training📚</option>


                                        <option value="Technology">Technology🖥️</option>


                                        <option value="Moving and Delivery">Moving and Delivery🚚</option>

                                    </select>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="servicename">Service Name</label>
                                    <input type="text" name="" id="servicename" className='w-full py-3 border border-black rounded-2xl' value={service.name} onChange={(e) => {setService({...service, name:e.target.value})}}/>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-3'>
                                <div className='flex flex-col'>
                                    <label htmlFor="city">city</label>
                                    <input type="text" className='py-3 border border-black rounded-2xl' id='city' value={location.city} onChange={(e) => {setLocation({...location, city: e.target.value})}}/>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="state">State</label>
                                    <input type="text" className='py-3 border border-black rounded-2xl' id='state' value={location.state} onChange={(e) => {setLocation({...location, state: e.target.value})}}/>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-3'>
                                <div className='flex flex-col'>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="text" className='py-3 border border-black rounded-2xl' id='phone' value={contact.phone} onChange={(e) => {setContact({...contact, phone: e.target.value})}}/>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" className='py-3 border border-black rounded-2xl' id='emil' value={contact.email} onChange={(e) => {setContact({...contact, email: e.target.value})}}/>
                                </div>
                            </div>
                            <input type="submit" value="Create Profile!" className='w-full py-3 rounded-2xl bg-blue-700 text-xl text-white' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}