import Image from 'next/image';
import Link from 'next/link';

function Projects() {
  return (
    <div
      id='project'
      className='flex flex-col justify-center items-center w-screen  md:min-h-screen'
    >
      <h1 className='font-bold text-5xl m-5'>Projects</h1>
      <div className='flex w-4/5 justify-center cursor-pointer hover:scale-105 transition duration-700'>
        <div className=' w-60 relative'>
          <Link href='https://github.com/cylee820621/getphoto-flutter-app'>
            <Image
              src='/home.png'
              alt='flutter app'
              width={1530}
              height={2892}
              layout='responsive'
            />
          </Link>
        </div>
        <div className=' w-60 relative'>
          <Image
            src='/select.png'
            alt=''
            width={1530}
            height={2892}
            layout='responsive'
          />
        </div>
        <div className='  w-60 relative'>
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
