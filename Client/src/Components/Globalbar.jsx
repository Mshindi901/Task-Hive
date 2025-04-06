import {Link} from 'react-router-dom';

export default function Globalbar(){
    return(
        <>
            <div className='w-screen h-fit py-2 flex justify-between px-2'>
                <Link to='/'><h1 className='text-3xl text-gray-900 font-bold'>TaskHive🐝</h1></Link>

                <ul className='flex gap-2 text-gray-600 text-xl'>
                    <li><Link to="/">About</Link></li>
                    <li><Link to='/'>Contacts</Link></li>
                    <li><Link to='/'>FAQs</Link></li>
                </ul>
            </div>
        </>
    )
}