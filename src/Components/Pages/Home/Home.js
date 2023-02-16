import React from 'react';
import dp from '../../../assets/Image/look.jpg'
import './Home.css'
import { MdLocationOn } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFillFileEarmarkTextFill, BsFacebook, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Project from './Project';
import Language from './Language';


const Home = () => {

   return (
      <div className='px-5'>
         <div className=' grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 justify-items-center gap-5 px-3 my-16'>
            <div className='md:col-span-2'>
               <img src={dp} alt="" className='dp-size' />
            </div>
            {/* Intro  */}
            <div className='md:col-span-4 lg:col-span-10 pt-2'>
               <div>

                  <div>
                     <h2 className=' font-extrabold text-2xl'> Md. Naimur Rahman</h2>
                     <div className='flex items-center gap-2'>
                        <p>@naimur-r61</p> <span className=' text-lg font-extrabold'>.</span>
                        <div className='flex items-center gap-2'>
                           <MdLocationOn />
                           <p>Dhaka, Bangladesh</p>
                        </div>
                     </div>
                     <a rel='' target='_blank' href='https://drive.google.com/file/d/1N-5KepebwP0vrwWHUuEzRe5_KRKqk8UH/view?usp=sharing'
                        className=' flex items-center gap-2 w-fit hover:underline font-semibold'
                     >
                        <BsFillFileEarmarkTextFill /> <p>View Resume</p>
                     </a>
                     <p className='mt-2'>Front-end React Developer</p>
                  </div>

                  <div className='flex gap-3 items-center mt-4'>
                     <div><a href='https://github.com/naimur-r61' ><BsGithub className='text-2xl' /></a></div>
                     <div><a href=' https://www.linkedin.com/in/naimur-r61/' ><AiFillLinkedin className='text-2xl text-blue-600' /></a></div>
                     <div><a href='https://www.facebook.com/naimur.r61' ><BsFacebook className='text-2xl text-blue-600' /></a></div>
                  </div>
               </div>
               {/* About  */}
               <div className=' my-16'>
                  <h3 className='font-semibold text-2xl'>
                     About Me
                  </h3>
                  <p className='mt-2 px-3 text-gray-600'>
                     I'm Naimur, a  Front-end Web Application Developer from Bangladesh. I Spend most of time coding outstanding projects.I have strong analytical and problem-solving skills, as well as the ability to think logically and pay attention to detail. I am experienced in JavaScript languages and proficient in using computer systems and software development tools. I have also good communication skills, which can be useful for collaborating with others on a team and working closely with clients to understand their needs and develop solutions that meet their requirements. I am learning and staying up-to-date with the latest technologies and best practices in the field.
                  </p>
               </div>

               {/* Skill  */}
               <Language />


               {/* Project */}
               <Project />

               {/* Second Sec  */}
            </div>

         </div>
      </div>
   );
};

export default Home;