import React from 'react';
import web from '../../../assets/icon/worldwide.png'
import git from '../../../assets/icon/github.png'

const Project = {
   "id": "2",
   "name": "Tour",
   "img": "https://i.ibb.co/DKGMQJx/Screenshot-157.png",
   "live": "https://tour-58294.web.app/",
   "code": "https://github.com/naimur-r61/Tour",
   "title": "- Tourist packages website ",
   "about": "It’s a full responsive web site with many packages for world tour.Anybody can see package details without log in but if you check out you must log in.Here have review about tour packages and tour team, also you can shear your opinion in review box but you have to log in first.",
   "front_end": "I use here JavaScript(ES6), React, React - router - dom, React - photo - view, React - typewriter - effect, react - day - picker, firebase(authentication), CSS, Tailwind CSS, daisyUI(tailwind CSS component),",
   "back_end": " Node.js, Express JS, MongoDB, JsonWebToken, cors, vercel."
}

const Tour = () => {
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

export default Tour;