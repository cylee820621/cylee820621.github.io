import Image from 'next/image';

function About() {
  return (
    <div
      id='about'
      className='flex  justify-center items-center min-h-screen p-10'
    >
      <div className='flex flex-wrap'>
        <div className='w-96 mb-5'>
          <img className='' src='/me.png' alt='' />
        </div>

        <div className='flex-1 ml-10 max-w-80'>
          <h1 className='text-2xl w-80 font-extrabold my-3'>
            Hello! I'm Chih Yu Lee,
          </h1>
          <h1>A Full Stack Developer From Jersey city, NJ.</h1>
          <div className='max-w-md mt-5 '>
            I love learning new things, and I don't set boundaries on myself.
            Finding problems and coming up with solutions are deeply rooted in
            my mind. I came to the United States from Taiwan 3 years ago. At
            that time, I had little to no experience in programing and software
            development. Now I have experienced with Web development, data
            processing, Database, AI algorithm, Mobile app development, Cloud,
            Financial technology, and problem-solving mindset.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
