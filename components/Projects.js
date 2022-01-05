import React, { useEffect } from 'react';

function Projects() {
  return (
    <div id='project' className='flex  items-center justify-center'>
      <div className='flex flex-col items-center'>
        <h1 className='font-bold text-5xl  m-5'>Projects</h1>
        <div className='flex flex-wrap justify-between '>
          <div className='w-60 mx-5 sm:flex justify-center '>
            <img src='/home.png' alt='flutter app' />
          </div>
          <div className='w-60 mx-5 '>
            <img src='/received_request.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
