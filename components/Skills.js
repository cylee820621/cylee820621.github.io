import Stack from "./Stack";

function Skills({ items }) {
  return (
    <div className="flex justify-center min-h-screen p-10">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-5xl"> Skills</h1>
        <p>Languages and Technologies that I have learned and applied to my projects</p>
        <div className="grid  gap-16 grid-cols-2 md:grid-cols-4 m-10">
          {items.map((item) => (
            <Stack image={item.image} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
