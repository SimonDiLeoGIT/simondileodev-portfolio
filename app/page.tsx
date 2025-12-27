'use client';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AnimateOnScroll from "./components/AnimateOnScroll";
import TopIcons from "./components/TopIcons";

export default function Home() {

  return (
    <div className="">
      <main className="">
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]"></div>
          </div>
          <div className="absolute top-8 right-8 flex gap-4 items-center text-xs text-white/70">
            <TopIcons />
          </div>
          <header className="relative z-10 text-center">
            <AnimateOnScroll translateY={60}>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Simon Di Leo
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100} translateY={60}>
              <p className="text-lg md:text-xl text-gray-300 mb-8 px-4 opacity-100">Full Stack Developer</p>
            </AnimateOnScroll>
          </header>
        </section>
        <div className="bg-gradient-to-br from-black to-white/5">
          <Projects />
        </div>
        <Skills />
      </main>
    </div>
  );
}
