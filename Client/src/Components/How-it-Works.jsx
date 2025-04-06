export default function Workings(){
    return(
        <>
            <div className='w-screen h-fit p-4 flex gap-6 px-3'>
                <div className='flex flex-col gap-3 justify-center w-1/3 h-full'>
                    <h1 className="text-3xl text-grey-600 font-mono">About Us</h1>
                    <h2 className='text-2xl text-slate-500'>TaskHive – Connecting Services, Simplifying Lives</h2>
                    <p className='text-xl font-serif tex-grey-900'>At TaskHive, we bridge the gap between service providers and customers by offering a seamless booking experience. Whether you're looking to hire a professional or showcase your skills, our platform makes it effortless, secure, and efficient.</p>
                </div>
                <div className='flex flex-col gap-3 w-2/3'>
                    <div className="flex items-center justify-center">
                        <h1 className='text-3xl text-grey-600'>How it Works</h1>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='h-fit p-4 flex flex-col gap-3 bg-grey-100 shadow-2xl'>
                            <h2 className='text-2xl font-mono text-slate-500'>📝 Sign Up & Create a Profile</h2>
                            <p className='text-xl text-grey-200 font-mono'>Customers and service providers can easily register and set up their profiles. Providers can showcase their skills and experience,based on ratings</p>
                        </div>
                        <div className='h-full p-4 flex flex-col gap-3 bg-grey-100 shadow-2xl'>
                            <h2 className='text-2xl font-mono text-slate-500'>🔍 Find & Book Services</h2>
                            <p className='text-xl text-grey-200 font-mono'>Customers can browse through verified service providers, check their ratings, and book services instantly</p>
                        </div>
                        <div className='h-fit p-4 flex flex-col gap-3 bg-grey-100 shadow-2xl'>
                            <h2 className='text-2xl font-mono text-slate-500'>💳 Secure Payments & Subscription</h2>
                            <p className='text-xl text-grey-200 font-mono'>Service providers subscribe to a plan of (a week, a month or a year) to accept bookings, and customers can securely agree on payment terms</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}