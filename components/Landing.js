function Landing() {
  return (
    <div id='home' className='flex justify-center items-center'>
      <video playsinline autoPlay loop muted>
        <source src='/loop.mp4' type='video/mp4' />
      </video>

      <div className='absolute flex-col m-5 text-white'>
        <h1 className='font-bold text-5xl '>Chih-Yu</h1>
        <h1 className='font-bold text-5xl '>Lee</h1>
        <a
          className='text-xl hover:underline cursor-pointer'
          href='https://github.com/cylee820621/resume/blob/main/CY.L_resume.pdf'
        >
          [Resume]
        </a>
      </div>
    </div>
  );
}

export default Landing;
