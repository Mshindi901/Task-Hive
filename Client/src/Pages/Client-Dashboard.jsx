/* eslint-disable no-unused-vars */
//logout icon
import { IoPowerOutline } from "react-icons/io5";
//update icon
import { FaArrowCircleUp } from "react-icons/fa";
//Delete icon
import { MdDelete } from "react-icons/md";
import { useState } from "react";
//down icon
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Clients(){
    const [bookings, setBookings] = useState(0)
    const [totalbooking, setTotalBooking] = useState(false)
    const [acceptedbooking, setAcceptedBooking] = useState(false)
    const [paidbooking, setPaidBooking] = useState(false)
    const [completedbooking, setCompletedBooking] = useState(false)
    return(
        <>
            <div className="w-screen h-screen flex gap-2">
                <div className="w-1/5 h-screen p-3 rounded-2xl bg-blue-700 flex flex-col justify-evenly m-1">
                    <Link to='/'><h1 className='text-3xl text-white font-bold'>TaskHive🐝</h1></Link>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-xl text-slate-500">Clients name</h2>
                    </div>
                    <ul className="flex flex-col gap-3 text-xl text-white">
                        <li>Bookings</li>
                        <li>History</li>
                        <li>Payments</li>
                        <li>Reviews</li>
                    </ul>
                    <div className="flex flex-col gap-2 p-3 w-full">
                        <button className="w-full py-3 bg-white text-blue-700 rounded-2xl text-xl flex justify-evenly">Logout!<IoPowerOutline/></button>
                        <button className="w-full py-3 bg-white text-blue-700 rounded-2xl text-xl flex justify-evenly">Update Account<FaArrowCircleUp/></button>
                        <button className="w-full py-3  bg-white text-blue-700 rounded-2xl text-xl flex justify-evenly">Delete account<MdDelete/></button>
                    </div>
                </div>

                <div className="w-4/5 h-fit p-3 rounded-2xl shadow-2xl flex flex-col">
                    <div className="w-full h-fit p-4 border-b border-blue-400 flex justify-between rounded-xl">
                        <Link to='/'><h1 className='text-3xl text-blue-700 font-bold'>TaskHive🐝</h1></Link>
                        <h2 className="text-2xl text-blue-700 font-mono">Clients Dashboard</h2>
                    </div>

                    <div className="grid grid-cols-3 p-4 gap-3">
                        <div className="h-64 rounded-2xl bg-blue-300 flex flex-col gap-3 p-3">
                            <p className="text-xl font-mono">Total Bookings</p>
                            <p className="text-5xl font-bold">{bookings}</p>
                        </div>

                        <div className="h-64 rounded-2xl bg-blue-300 flex flex-col gap-3 p-3">
                            <p className="text-xl font-mono">Accepted Bookings</p>
                            <p className="text-5xl font-bold">{bookings}</p>
                        </div>

                        
                        <div className="h-64 rounded-2xl bg-blue-300 flex flex-col gap-3 p-3">
                            <p className="text-xl font-mono">Pending Bookings</p>
                            <p className="text-5xl font-bold">{bookings}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-4 gap-4">
                        <div className="w-full flex flex-col">
                            <div className="w-full py-4 rounded-2xl bg-blue-800 text-xl text-white flex justify-between px-4" >
                                <p className="text-white">Total Bookings</p>
                                <button className="text-white" onClick={() => {setTotalBooking(true)}}><FaArrowCircleUp/></button>
                            </div>
                            {
                                !totalbooking&&
                                <div className="w-full py-8 rounded-2xl border  border-black flex flex-col justify-center items-center">
                                    <p className="text-xl text-black">All bookings will appear here</p>
                                    <p className="text-md text-black">Enjoy😊🎉</p>
                                </div>
                            }
                            {
                                totalbooking&&
                                <table className="w-full text-black border-0 border-white">
                                    <tr className="bg-blue-700 text-white">
                                        <th>Clients Name</th>
                                        <th>Date</th>
                                        <th>Booking accepted</th>
                                        <th>Booking cancelled</th>
                                        <th>Rating</th>
                                    </tr>
                                </table>
                            }
                        </div>
                        <div className="w-full flex flex-col">
                            <div className="w-full py-4 rounded-2xl bg-blue-800 text-xl text-white flex justify-between px-4" o>
                                <p className="text-white">Accepted Bookings</p>
                                <button className="text-white" onClick={() => {setAcceptedBooking(true)}}><FaArrowCircleUp/></button>
                            </div>
                            {
                                !acceptedbooking&&
                                <div className="w-full py-8 rounded-2xl border  border-black flex flex-col justify-center items-center">
                                    <p className="text-xl text-black">All accepted bookings will appear here</p>
                                    <p className="text-md text-black">Enjoy😊🎉</p>
                                </div>
                            }
                            {
                                acceptedbooking&&
                                <table className="w-full border border-white">
                                    <tr className="bg-blue-700 text-white">
                                        <th>Clients Name</th>
                                        <th>Date</th>
                                        <th>Booking accepted</th>
                                        <th>Rating</th>
                                    </tr>
                                </table>
                            }
                        </div>
                        <div className="w-full flex flex-col">
                            <div className="w-full py-4 rounded-2xl bg-blue-800 text-xl text-white flex justify-between px-4">
                                <p className="text-white">Completed Bookings</p>
                                <button className="text-white" onClick={() =>{setCompletedBooking(true)}}><FaArrowCircleUp/></button>
                            </div>
                            {
                                !completedbooking&&
                                <div className="w-full py-8 rounded-2xl border  border-black flex flex-col justify-center items-center">
                                    <p className="text-xl text-black">All accepted bookings will appear here</p>
                                    <p className="text-md text-black">Enjoy😊🎉</p>
                                </div>
                            }
                            {
                                completedbooking&&
                                <table className="w-full border border-white">
                                    <tr className="bg-blue-700 text-white">
                                        <th>Clients Name</th>
                                        <th>Date</th>
                                        <th>Booking accepted</th>
                                        <th>Work hours</th>
                                        <th>Amount Paid</th>
                                        <th>Rating</th>
                                    </tr>
                                </table>
                            }
                        </div>
                        <div className="w-full flex flex-col">
                            <div className="w-full py-4 rounded-2xl bg-blue-800 text-xl text-white flex justify-between px-4">
                                <p className="text-white">Paid Bookings</p>
                                <button className="text-white" onClick={() => {setPaidBooking(true)}}><FaArrowCircleUp/></button>
                            </div>
                            {
                                !paidbooking&&
                                <div className="w-full py-8 rounded-2xl border  border-black flex flex-col justify-center items-center">
                                    <p className="text-xl text-black">All accepted bookings will appear here</p>
                                    <p className="text-md text-black">Enjoy😊🎉</p>
                                </div>
                            }
                            {
                                paidbooking&&
                                <table className="w-full border border-white">
                                    <tr className="bg-blue-700 text-white">
                                        <th>Clients Name</th>
                                        <th>Date</th>
                                        <th>Booking accepted</th>
                                        <th>Amount Paid</th>
                                    </tr>
                                </table>
                            }
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}