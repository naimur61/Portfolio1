import React from 'react';
import js from '../../../assets/logo/js.png'
import html from '../../../assets/logo/html-5.png'
import css from '../../../assets/logo/css-3.png'
import react from '../../../assets/logo/react.png'
import next from '../../../assets/logo/next.png'
import node from '../../../assets/logo/node.jpeg'
import express from '../../../assets/logo/express.jpeg'
import mui from '../../../assets/logo/mui.png'
import tailwind from '../../../assets/logo/tailwind.png'
import daisyui from '../../../assets/logo/daisyui.png'
import mongo from '../../../assets/logo/mongo.png'
import figma from '../../../assets/logo/figma.png'
import ts from '../../../assets/logo/typescript.png'
import bootstrap from '../../../assets/logo/bootstrap.jpeg'
import vs from '../../../assets/logo/vs.jpeg'
import vsercel from '../../../assets/logo/vercel.jpg'
import github from '../../../assets/logo/github.png'
import git from '../../../assets/logo/git.png'
import chrome from '../../../assets/logo/chrome.png'
import discord from '../../../assets/logo/discord.png'
import excel from '../../../assets/logo/excel.png'
import firebase from '../../../assets/logo/firebase.png'
import notion from '../../../assets/logo/notion.png'
import firefox from '../../../assets/logo/firefox.png'





const Language = () => {
   return (
      <div>
         <div className='my-20 p-7 border border-slate-400 rounded-lg m-3 shadow-md text-center font-bold'>
            <h1 className='mb-7 text-5xl text-red-700'>Skills</h1>
            <div className=' grid grid-cols-2   lg:grid-cols-4 gap-y-4 gap-x-5'>

               <div className=' flex items-center gap-3'>
                  <img src={js} alt="JavaScript" className='logo' />
                  <div>JavaScript</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={ts} alt="TypeScript" className='logo' />
                  <div>TypeScript</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={html} alt="HTML5" className='logo' />
                  <div>HTML5</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={css} alt="CSS 3" className='logo' />
                  <div>CSS 3</div>
               </div>


               <div className=' flex items-center gap-3'>
                  <img src={react} alt="React" className='logo' />
                  <div>React</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={next} alt="Next.js" className='logo' />
                  <div>Next.js</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={node} alt="Node.js" className='logo' />
                  <div>Node.js</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={express} alt="ExpressJS" className='logo' />
                  <div>ExpressJS</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={mongo} alt="MongoDV" className='logo' />
                  <div>MongoDV</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={mui} alt="Material-UI" className='logo' />
                  <div>Material-UI</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={tailwind} alt="Tailwind CSS" className='logo' />
                  <div>Tailwind CSS</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={daisyui} alt="daisyUI" className='logo' />
                  <div>daisyUI</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={bootstrap} alt="Bootstrap" className='logo' />
                  <div>Bootstrap</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={figma} alt="Figma" className='logo' />
                  <div>Figma</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={github} alt="GitHub" className='logo' />
                  <div>GitHub</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={git} alt="Git" className='logo' />
                  <div>Git</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={firebase} alt="Firebase" className='logo' />
                  <div>Firebase</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={vs} alt="Visual Studio" className='logo' />
                  <div>Visual Studio</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={vsercel} alt="Vercel" className='logo' />
                  <div>Vercel</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={chrome} alt="Chrome" className='logo' />
                  <div>Chrome</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={firefox} alt="Firefox" className='logo' />
                  <div>Firefox </div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={notion} alt="Nation" className='logo' />
                  <div>Nation</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={excel} alt="Excel" className='logo' />
                  <div>Excel</div>
               </div>

               <div className=' flex items-center gap-3'>
                  <img src={discord} alt="Discord" className='logo' />
                  <div>Discord</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Language;