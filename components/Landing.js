function Landing() {
  return (
    <div id='home' className='flex justify-center items-center'>
      <video className='' autoPlay loop muted>
        <source src='/loop.mp4' type='video/mp4' />
      </video>

      <div className='absolute flex-col m-5 '>
        <h1 className='font-bold text-5xl text-white'>Chih-Yu</h1>
        <h1 className='font-bold text-5xl text-white'>Lee</h1>
      </div>
    </div>
  );
}

export default Landing;
