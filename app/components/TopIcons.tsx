import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function TopIcons() {

  return (
    <>
      <AnimateOnScroll delay={100} tduration={1000}>
        <Link 
          href="/files/Full Stack Developer Simón Di Leo.pdf" 
          title="Download Resume"
          download 
          className="p-2 px-4 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
          >
          <Image src="/icons/resume.svg" alt="Resume" width={25} height={25} className="opacity-70"/>
          Resume
        </Link>
      </AnimateOnScroll>
      <AnimateOnScroll delay={200} tduration={1000}>
        <Link
          href="https://github.com/SimonDiLeoGIT" 
          title="GitHub" 
          className="p-2 px-4 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
          >
          <Image src="/icons/github.svg" alt="GitHub" width={25} height={25} className="opacity-70"/>
          SimonDiLeoGIT
        </Link>
      </AnimateOnScroll>
      <AnimateOnScroll delay={300} tduration={1000}>
        <Link 
          href="https://www.linkedin.com/in/simondileodev/" 
          title="Linkedin" 
          className="p-2 px-4 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
          >
          <Image src="/icons/linkedin.svg" alt="Linkedin" width={25} height={25} className="opacity-70"/>
          Linkedin
        </Link>
      </AnimateOnScroll>
  </>
  );
}