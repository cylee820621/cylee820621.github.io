const Stack = ({ image, name }) => {
  return (
    <div className='flex flex-col items-center m-5'>
      <img className='w-30' src={image} />
      <h4>{name}</h4>
    </div>
  );
};

export default Stack;
