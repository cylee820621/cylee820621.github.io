import Image from "next/image";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import styles from "../styles/Home.module.css";
import Tools from "../components/Tools";
import About from "../components/About";
import Landing from "../components/Landing";
import Projects from "../components/Projects";

const SKILL_DATA = [
  {
    image: "https://img.icons8.com/color/96/000000/javascript--v1.png",
    name: "JavaScript"
  },
  {
    image: "https://img.icons8.com/color/96/000000/react-native.png",
    name: "React.js"
  },
  {
    image: "https://img.icons8.com/color/96/000000/html-5--v1.png",
    name: "HTML5"
  },
  {
    image: "https://img.icons8.com/color/96/000000/css3.png",
    name: "CSS3"
  },
  {
    image: "https://img.icons8.com/color/96/000000/flutter.png",
    name: "Flutter"
  },
  {
    image: "https://img.icons8.com/color/96/000000/dart.png",
    name: "Dart"
  },
  {
    image: "https://img.icons8.com/color/96/000000/python--v1.png",
    name: "Python"
  }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <Landing />
        <About />
        <Projects />
        <Skills items={SKILL_DATA} />
        <Tools />
        <Contact />
      </Layout>
    </div>
  );
}
