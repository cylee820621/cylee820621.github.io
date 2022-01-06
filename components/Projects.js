import Image from 'next/image';

function Projects() {
  return (
    <div
      id='project'
      className='flex flex-col items-center justify-center h-auto'
    >
      <h1 className='font-bold text-5xl m-5'>Projects</h1>
      <div className='flex w-full justify-center gap-3 p-5'>
        <div className='w-60 relative'>
          <Image
            src='/home.png'
            alt='flutter app'
            width={1530}
            height={2892}
            layout='responsive'
          />
        </div>
        <div className='w-60  relative'>
          <Image
            src='/select.png'
            alt=''
            width={1530}
            height={2892}
            layout='responsive'
          />
        </div>
        <div className='w-60  relative'>
          <Image
            src='/received_request.png'
            width={1530}
            height={2892}
            alt=''
            layout='responsive'
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
