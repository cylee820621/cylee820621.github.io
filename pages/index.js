import Image from 'next/image';
import Layout from '../components/Layout';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import styles from '../styles/Home.module.css';
import Tools from '../components/Tools';
import About from '../components/About';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Navbar from '../components/Navbar';

const TOOLS_DATA = [
  {
    imageUrl:
      'https://img.icons8.com/color/96/000000/visual-studio-code-2019.png',
    name: 'VScode'
  },
  {
    imageUrl: 'https://img.icons8.com/color/96/000000/git.png',
    name: 'Git'
  },
  {
    imageUrl: 'https://img.icons8.com/ios-glyphs/90/000000/github.png',
    name: 'Github'
  },
  {
    imageUrl: 'https://img.icons8.com/color/96/000000/npm.png',
    name: 'NPM'
  },

  {
    imageUrl: 'https://img.icons8.com/color/96/000000/dart.png',
    name: 'Dart'
  },
  {
    imageUrl: 'https://img.icons8.com/color/96/000000/python--v1.png',
    name: 'Python'
  }
];

const SKILL_DATA = [
  {
    imageUrl: 'https://img.icons8.com/color/96/000000/javascript--v1.png',
    name: 'JavaScript'
  },
  {
    imageUrl: 'https://img.icons8.com/color/96/000000/react-native.png',
    name: 'React.js'
  },
  {
    imageUrl: 'https://img.icons8.com/color/96/000000/html-5--v1.png',
    name: 'HTML5'
  },
  {
    imageUrl: 'https://img.icons8.com/color/96/000000/css3.png',
    name: 'CSS3'
  },
  {
    imageUrl: 'https://img.icons8.com/color/96/000000/flutter.png',
    name: 'Flutter'
  },
  {
    imageUrl: 'https://img.icons8.com/color/96/000000/dart.png',
    name: 'Dart'
  },
  {
    imageUrl: 'https://img.icons8.com/color/96/000000/python--v1.png',
    name: 'Python'
  }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <div className='fixed top-0 w-full z-40'>
          <Navbar />
        </div>
        <Landing />
        <About />
        <Projects />
        <Skills items={SKILL_DATA} />
        <Tools tools={TOOLS_DATA} />
        <Contact />
      </Layout>
    </div>
  );
}
