import Electrician from '../assets/Images/Electrician.jpg'
import Navbar from '../Components/Navbar.jsx'
import { Link } from 'react-router-dom'
export default function Welcome(){
    return(
        <>
            <div className='w-screen h-fit bg-gray-100 p-6'>
                <Navbar/>
                <div className='flex justify-evenly'>
                    <div className='w-1/2 flex flex-col gap-3 justify-center'>
                        <h2 className='text-3xl text-gray-600'>Welcome to TaskHive 🐝</h2>
                        <p className='text-xl text-grey-300 font-serif'>TaskHive connects you with skilled professionals for all your service needs. Whether you need a handyman, a tutor, or a home cleaner, we make it easy</p>
                        <Link to='/signup'><button className='px-16 py-3 rounded-2xl bg-blue-600 text-xl text-white'>Get Started !</button></Link>
                    </div>
                    <div className='w-1/2 flex items-center justify-center h-1/2 object-cover'>
                        <img className='w-96 h-96 rounded-full border-amber-300' src={Electrician} alt="an Electrician"/>
                    </div>
                </div>
            </div>
        </>
    )
}