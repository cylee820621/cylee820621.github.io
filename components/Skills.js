function Skills({ items }) {
  return (
    <div className="flex justify-center min-h-screen p-10">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-5xl"> Skills</h1>
        <p>Languages and Technologies that I have learned and applied to my projects</p>
        <div>
          <div className="grid  gap-10 grid-cols-2 md:grid-cols-4 mt-10">
            <div className="flex flex-col  items-center ">
              <img src="https://img.icons8.com/color/96/000000/javascript--v1.png" />
              <h4>JavaScript</h4>
            </div>
            <div className="flex flex-col items-center ">
              <img src="https://img.icons8.com/color/96/000000/react-native.png" />
              <h4>React.js</h4>
            </div>
            <div className="flex flex-col items-center ">Next.js</div>
            <div className="flex flex-col items-center ">
              <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" />
              <div>HTML5</div>
            </div>
            <div className="flex flex-col items-center  ">
              <img src="https://img.icons8.com/color/96/000000/css3.png" />
              <div>CSS3</div>
            </div>
            <div className="flex flex-col items-center ">Tailwind css</div>
            <div className="flex flex-col items-center">
              <img src="https://img.icons8.com/color/96/000000/flutter.png" />
              <div>Flutter</div>
            </div>
            <div className="flex flex-col items-center ">
              <img src="https://img.icons8.com/color/96/000000/dart.png" />
              <div>Dart</div>{" "}
            </div>
            <div className="flex flex-col items-center ">
              <img src="https://img.icons8.com/color/48/000000/python--v1.png" />
              <div>Python</div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      items: [
        {
          image: "https://img.icons8.com/color/96/000000/javascript--v1.png",
          name: "JavaScript"
        }
      ]
    }
  };
}

export default Skills;
