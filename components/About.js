import Image from 'next/image';

function About() {
  return (
    <div id='about' className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-wrap justify-center'>
        <div className='mb-5'>
          <Image
            src='/me.png'
            alt='me'
            width={176}
            height={176}
            className='rounded-full'
          />
        </div>

        <div className=' ml-10 max-w-md'>
          <h1 className='text-2xl font-extrabold mb-3'>
            Hello! I'm Chih-Yu Lee,
          </h1>
          <h1>A Frontend & Mobile developer From Jersey city, NJ.</h1>
          <div className='max-w-md mt-5'>
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
