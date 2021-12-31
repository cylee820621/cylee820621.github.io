const Stack = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center ">
      <img src={image} />
      <h4>{name}</h4>
    </div>
  );
};

export default Stack;
