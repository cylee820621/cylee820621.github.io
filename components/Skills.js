import Stack from './Stack';

function Skills({ items }) {
  return (
    <div
      id='skills'
      className='flex justify-center min-h-screen items-center p-10'
    >
      <div className='flex flex-col items-center'>
        <h1 className='font-bold text-5xl  m-5'> Skills</h1>
        <p>
          Languages and Technologies that I have learned and applied to my
          projects
        </p>
        <div className='grid  gap-16 grid-cols-2 md:grid-cols-4 m-10'>
          {items.map((item, index) => (
            <Stack key={index} image={item.image} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
