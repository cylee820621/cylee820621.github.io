import Image from 'next/image';
const Footer = () => {
  return (
    <footer className='flex flex-col bg-black justify-center items-center h-40 mt-10'>
      <div className='flex justify-center items-center'>
        <div>
          <a href='https://www.linkedin.com/in/chih-yu-lee/'>
            <Image
              width={50}
              height={50}
              alt='linkedin'
              src='https://img.icons8.com/color/48/000000/linkedin.png'
            />
          </a>
        </div>
        <dir>
          <a href='https://github.com/cylee820621'>
            <Image
              width={50}
              height={50}
              alt='github'
              src='https://img.icons8.com/nolan/64/github.png'
            />
          </a>
        </dir>
      </div>
      <div className='text-white '>
        Copyright - 2021 Chih Yu Lee, All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
