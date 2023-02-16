import React from 'react';
import Language from '../Home/Language';
import img from '../../../assets/logo/coding.gif'

const About = () => {
   return (
      <div className="md:mx-7">
         <div className='  flex flex-col lg:flex-row justify-between gap-10 lg:gap-5  my-20'>
            <img src={img} alt="" className='video mx-2 rounded-md' />
            <div className='px-5'>
               <h1 className=' text-5xl my-10 '>
                  About Me
               </h1>
               <p className='text-gray-700'>
                  I am a front-end developer. I am skilled in HTML, CSS, JavaScript, TypeScript, React JS, Next.js, Node JS. I have worked on a wide range of projects, including building responsive, mobile-friendly websites and creating user interfaces for web-based applications. In my most recent position, I was responsible for the design and implementation of the user interface for a popular e-commerce platform. I am a self-starter, and I am always looking for ways to improve and learn new technologies
                  <br /><br />
                  I complete some projects with React JS. I'm a student of physics. But I love coding.
                  I'm continually working to improve my skills and advance professionally. I spend time learning new things. And I am a quick learner.
               </p>

            </div>
         </div>
         <Language />
      </div>
   );
};

export default About;