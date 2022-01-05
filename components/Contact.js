function Contact() {
  return (
    <div
      id='contact'
      className='flex flex-wrap gap-20 justify-center align-top p-20'
    >
      <div className='flex-auto'>
        <h1 className='font-extrabold text-5xl'>Leave a Message!</h1>
        <form className='my-4 flex flex-col' action='/' method='post'>
          <div className='flex justify-start '>
            <label htmlFor='name'></label>
            <input
              className='flex-1 border-solid border-2 border-gray-400 h-12 pl-4 m-2'
              id='name'
              type='text'
              placeholder='Your Name:'
            />
            <label htmlFor='email'></label>
            <input
              className='flex-1 border-solid border-2 border-gray-400 h-12 pl-4 m-2'
              type='text'
              placeholder='Email:'
            />
          </div>
          <label htmlFor='Subject'></label>
          <textarea
            className='border-solid border-2 border-gray-400 h-12 pl-4 m-2'
            placeholder='Subject'
          />
          <label htmlFor='message'></label>
          <textarea
            className='border-solid border-2 border-gray-400 h-24 pl-4 m-2'
            placeholder='Your message'
          />
          <button
            className=' w-36 bg-gray-900 text-white px-3 py-2 m-2 rounded-md text-sm font-medium'
            type='submit'
          >
            Send
          </button>
        </form>
      </div>
      <div className='flex flex-col'>
        <h1 className='font-extrabold text-5xl'>Contact info</h1>
        <p className='max-w-md my-3'>
          Feel free to contact me for career prospects, business services, and
          other professional inquiries!
        </p>
        <div className='my-4'>
          <div className='font-medium text-2xl'>Location</div>
          <div className='text-gray-500'>Jersey City, NJ</div>
        </div>
        <div className='my-4'>
          <div className='font-medium text-2xl'>Email Me At</div>
          <div className='text-gray-500'>Cylee820621@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
