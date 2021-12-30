import Image from "next/image";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import styles from "../styles/Home.module.css";
import Tools from "../components/Tools";
import About from "../components/About";
import Landing from "../components/Landing";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <Landing />
        <About />
        <Projects />
        <Skills />
        <Tools />
        <Contact />
      </Layout>
    </div>
  );
}
