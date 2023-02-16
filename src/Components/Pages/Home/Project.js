import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import { TiArrowRight } from 'react-icons/ti';

const demos = [
   {
      id: 1,
      img: 'https://i.ibb.co/Zhmv7yz/Screenshot-156.png',
      name: "Bike",
      "title": "– It’s a secondhand bike reseller web site"
   },
   {
      id: 2,
      img: 'https://i.ibb.co/DKGMQJx/Screenshot-157.png',
      "name": "Tour",
      "title": "- Tourist packages website "
   },
   {
      id: 3,
      img: 'https://i.ibb.co/DwQs0cf/Screenshot-158.png',
      "name": "Coder",
      "title": " - Online programming course related website "
   }
]




const Project = () => {
   const navigate = useNavigate();
   const handleNavigate = (l) => {
      navigate(`/products/${l}`);
      window.scrollTo(0, 0);
   }

   return (
      <div>
         <div className=' mx-3 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
               demos.map((demo, i) => <div className="card bg-base-100 shadow-xl" key={i}>
                  <figure><img src={demo?.img} alt="Shoes" /></figure>
                  <div className="card-body">
                     <h2 className="card-title"> {demo?.name}</h2>
                     <p>{demo?.title}</p>
                     <div className="card-actions justify-end">
                     </div>
                     <div className=' flex justify-end'>< TiArrowRight onClick={() => handleNavigate(demo?.id)} className=' text-4xl text-red-600 font-extrabold cursor-pointer' /></div>
                  </div>
               </div>)
            }

         </div>

      </div>
   );
};

export default Project;


















