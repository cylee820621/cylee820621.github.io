import Image from 'next/image';

const Stack = ({ imageUrl, name }) => {
  return (
    <div className='flex flex-col items-center m-5'>
      <Image className='w-30' src={imageUrl} width={80} height={80} />
      <h4>{name}</h4>
    </div>
  );
};

export default Stack;
