import { Link } from 'react-router-dom';

function Navbar (){
    return(
        <>
            <div className='w-full h-fit py-2 flex justify-between'>
                <h1 className='text-5xl text-gray-900 font-bold'>TaskHive🐝</h1>

                <ul className='flex gap-3 text-gray-600 text-2xl'>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/'>Contacts</Link></li>
                </ul>

                <div className='flex gap-1'>
                    <button className='px-8 py-2 rounded-2xl bg-blue-600 text-xl text-white'><Link to='/signup'>SignUp</Link></button>
                    <button className='px-6 py-2 rounded-2xl bg-blue-600 text-xl text-white'><Link to='/signin'>SignIn</Link></button>
                </div>
            </div>
        </>
    )
}
export default Navbar;