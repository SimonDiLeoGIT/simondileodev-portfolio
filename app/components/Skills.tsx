import AnimateOnScroll from "./AnimateOnScroll";

export default function Skills() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center opacity-100 transform-none">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimateOnScroll>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-2 border-white/10">
              <h2 className="mb-4 text-lg font-semibold">📱 Frontend</h2>
              <div className="space-y-4">
                <AnimateOnScroll translateY={-2} translateX={-4}>
                  <div className="bg-white/5 rounded-xl p-4 text-center transition-colors">
                    <h3 className="text-md font-semibold">TypeScript & JavaScript</h3>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll delay={100} translateY={-2} translateX={-4}>
                  <div className="bg-white/5 rounded-xl p-4 text-center transition-colors">
                    <h3 className="text-md font-semibold">React & Next.js</h3>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll delay={200} translateY={-2} translateX={-4}>
                  <div className="bg-white/5 rounded-xl p-4 text-center transition-colors">
                    <h3 className="text-md font-semibold">CSS & Tailwind</h3>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll delay={300} translateY={-2} translateX={-4}>
                  <div className="bg-white/5 rounded-xl p-4 text-center transition-colors">
                    <h3 className="text-md font-semibold">HTML</h3>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-900/20 to-green-900/20 border-2 border-white/10">
              <h2 className="mb-4 text-lg font-semibold">⚡ Backend</h2>
              <div className="space-y-4">
                <AnimateOnScroll delay={100} translateY={-2} translateX={-4}>
                  <div className="bg-white/5 rounded-xl p-4 text-center transition-colors">
                    <h3 className="text-md font-semibold">Python (Django & Flask)</h3>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll delay={200} translateY={-2} translateX={-4}>
                  <div className="bg-white/5 rounded-xl p-4 text-center transition-colors">
                    <h3 className="text-md font-semibold">RESTful APIs</h3>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll delay={300} translateY={-2} translateX={-4}>
                  <div className="bg-white/5 rounded-xl p-4 text-center transition-colors">
                    <h3 className="text-md font-semibold">SQL & NoSQL</h3>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll delay={400} translateY={-2} translateX={-4}>
                  <div className="bg-white/5 rounded-xl p-4 text-center transition-colors">
                    <h3 className="text-md font-semibold">Unit Test</h3>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-green-900/20 to-purple-900/20 border-2 border-white/10">
              <h2 className="mb-4 text-lg font-semibold">🔧 Cloud & Tools</h2>
              <div className="space-y-4">
                <AnimateOnScroll delay={200} translateY={-2} translateX={-4}>
                  <div className="bg-white/5 rounded-xl p-4 text-center transition-colors">
                    <h3 className="text-md font-semibold">AWS & GCloud</h3>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll delay={300} translateY={-2} translateX={-4}>
                  <div className="bg-white/5 rounded-xl p-4 text-center transition-colors">
                    <h3 className="text-md font-semibold">CI/CD</h3>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll delay={400} translateY={-2} translateX={-4}>
                  <div className="bg-white/5 rounded-xl p-4 text-center transition-colors">
                    <h3 className="text-md font-semibold">Docker</h3>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll delay={500} translateY={-2} translateX={-4}>
                  <div className="bg-white/5 rounded-xl p-4 text-center transition-colors">
                    <h3 className="text-md font-semibold">Kubernetes</h3>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}