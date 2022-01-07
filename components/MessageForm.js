import React from 'react';

export default function MessageForm() {
  return (
    <div className='px-5'>
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
  );
}
