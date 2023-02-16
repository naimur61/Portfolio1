import React from 'react';
import web from '../../../assets/icon/worldwide.png'
import git from '../../../assets/icon/github.png'

const Project = {
   "id": "1",
   "name": "Bike",
   "img": "https://i.ibb.co/Zhmv7yz/Screenshot-156.png",
   "title": "– It’s a secondhand bike reseller web site",
   "about": "It’s a full responsive web site. Here is admin route. Admin can control this web site & all users. A user can choose his or her role as buyer or seller. Buyer Onley buy product by card payment. Seller can add product for sell & can advertise any product. Admin can change any role as seller or buyer and verify any seller. Verified sellers will get blue tick for selling product.",
   "front_end": " I use here JavaScript (ES6), React, React-router-dom, React-hook-form, React-query, React-stripe (for payment), react-day-picker, firebase (authentication), CSS, Tailwind CSS, daisyUI (tailwind CSS component), ",
   "back_end": " Node.js, Express JS, MongoDB, JsonWebToken, cors, Stripe, vercel.",
   "live": "https://bike-4.web.app/",
   "code": "https://github.com/naimur-r61/Bike"
}
const Bike = () => {

   return (
      <div className='mx-5 my-20'>
         <img src={Project?.img} alt="" className='mx' />

         <div className=' mt-10 border border-base-300 shadow-md mx-3 p-10 rounded-lg'>
            <h1 className='text-5xl text-red-600 font-bold'>{Project?.name}</h1>
            <p className='text-2xl mt-2 font-bold'>{Project?.title}</p>
            <div className=' mt-3 text-gray-700 font-bold'>
               <p><strong className=' font-bold text-cyan-600 text-lg'>About  : </strong> <span > </span> {Project?.about}</p>
               <p><strong className=' font-bold text-cyan-600 text-lg'>Front-End : </strong> <span > </span> {Project?.front_end}</p>
               <p><strong className=' font-bold text-cyan-600 text-lg'>Back-End : </strong> <span > </span> {Project?.back_end}</p>
            </div>
         </div>

         <div className='flex items-center gap-5 mx-3 mt-5'>
            <div>
               <a href={Project?.code} target="_blank" rel="noreferrer">
                  <img src={git} alt="" style={{ height: "50px", width: '50px' }} />
               </a>
            </div>

            <div>
               <a href={Project?.live} target="_blank" rel="noreferrer">
                  <img src={web} alt="" style={{ height: "50px", width: '50px' }} />
               </a>
            </div>

         </div>

      </div>
   );
};

export default Bike;