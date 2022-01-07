import React from 'react';

export default function MessageForm() {
  return (
    <div className='max-w-md'>
      <h1 className='font-extrabold text-5xl'>Leave a Message!</h1>
      <form className='my-4 flex flex-col gap-2' action='/' method='post'>
        <div className='flex flex-wrap gap-2 justify-start'>
          <input
            className='flex-1 border-solid border-2 border-gray-400 h-12 pl-2'
            id='name'
            type='text'
            placeholder='Your Name'
          />
          <input
            className='flex-1 border-solid border-2 border-gray-400 h-12 pl-2'
            type='text'
            placeholder='Email'
          />
        </div>
        <textarea
          className='border-solid border-2 border-gray-400 h-12 pl-2'
          placeholder='Subject'
        />
        <textarea
          className='border-solid border-2 border-gray-400 h-24 pl-2'
          placeholder='Your message'
        />
        <button
          className='w-full bg-gray-900 text-white py-2  rounded-md text-sm font-medium'
          type='submit'
        >
          Send
        </button>
      </form>
    </div>
  );
}
