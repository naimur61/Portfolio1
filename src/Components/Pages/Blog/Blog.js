import React from 'react';

import { useTypewriter } from 'react-simple-typewriter'

const Blog = () => {
   const [text] = useTypewriter({
      words: ['.....'],
      loop: 0
   })

   return (
      <div style={{ height: '100vh' }}>
         <div className=' mt-32 text-center flex justify-center gap-2 text-gray-600 text-3xl font-serif font-bold'>
            <h1 >Coming Soon </h1>
            <h1 className='font-extrabold'>{text}</h1>
         </div>
      </div>
   );
};

export default Blog;