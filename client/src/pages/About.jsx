import React from 'react'

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto' style={{maxHeight:'100vh'}}>
    <h1 className='text-3xl font-bold mb-4 text-slate-800'>About <span className='text-red-600'>UrbanBite</span></h1>
    <p className='mb-4 text-slate-700'>At UrbanBite, we're not just another real estate agency we're your trusted partners in finding your dream home. With a passion for matching individuals and families with their perfect living spaces, UrbanBite is dedicated to providing unparalleled service and expertise in the real estate market. Whether you're searching for a cozy apartment in the heart of the city, a spacious suburban home for your growing family, or a luxurious retreat nestled in nature, we're here to guide you every step of the way.</p>
    <p className='mb-4 text-slate-700'>Our team at UrbanBite consists of seasoned professionals with deep knowledge of the local real estate landscape. With years of experience under our belts, we understand the intricacies of buying, selling, and renting properties in today's dynamic market.</p>
    <p className='mb-4 text-slate-700'>Beyond our commitment to excellence in real estate services, UrbanBite is deeply rooted in our communities. We believe in giving back and actively contribute to local charities and initiatives that support housing accessibility and community development. Our mission extends beyond transactions—we strive to make a positive impact on the lives of those we serve and the neighborhoods we operate in. Whether you're a first-time homebuyer, an experienced investor, or simply looking to explore the possibilities of real estate, UrbanBite is your trusted partner for all your housing needs.</p>
    <div className='flex justify-center '>    <img className="max-w-full  object-cover h-[500px] " src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>
    </div>
  )
}
