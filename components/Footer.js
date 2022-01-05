const Footer = () => {
  return (
    <footer className='flex bg-black text-white justify-center items-center h-40 mt-10'>
      <div className='flex flex-col '>
        <div className='flex justify-center items-center'>
          <div>
            <a href='https://www.linkedin.com/in/chih-yu-lee/'>
              <img
                width='50px'
                src='https://img.icons8.com/color/48/000000/linkedin.png'
              />
            </a>
          </div>
          <dir>
            <a href='https://github.com/cylee820621'>
              <img
                width='50px'
                src='https://img.icons8.com/nolan/64/github.png'
              />
            </a>
          </dir>
        </div>
        <div>Copyright - 2021 Chih Yu Lee, All Right Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
