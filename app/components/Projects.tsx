import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Projects() {

  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Projects</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg">
          <AnimateOnScroll translateY={6} translateX={-1} tduration={1200}>
            <article className="group relative aspect-video hover:cursor-pointer  bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden">
              <Image
                src="/images/ecommerce.png"
                alt="E-Commerce Platform"
                fill
                className="object-cover transition-transform group-hover:scale-105 rounded-xl"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-gray-300 mb-4">A full-featured e-commerce platform with user authentication, product management, and payment integration.</p>
                <div className="flex gap-4">
                  <Link href="https://crystalgym.vercel.app/" className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                    View Project
                  </Link>
                  <Link href="https://github.com/SimonDiLeoGIT/crystalgym-ecommerce" className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                    GitHub
                  </Link>
                </div>
              </div>
            </article>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300} translateY={6} translateX={-1} tduration={1200}>
            <article className="group relative aspect-video hover:cursor-pointer bg-gradient-to-br from-purple-900/50 to-blue-900/50 overflow-hidden rounded-xl opacity-100 transform-none">
              <Image
                src="/images/inventomate.PNG"
                alt="Sales Analysis"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300 rounded-xl"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2">Sales Analysis</h3>
                <p className="text-gray-300 mb-4">A sales analysis platform.</p>
                <div className="flex gap-4">
                  <Link href="https://youtu.be/z0cK0wmltZI" className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                    View Project
                  </Link>
                  <Link href="https://github.com/SimonDiLeoGIT/inventomate" className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                    GitHub
                  </Link>
                </div>
              </div>
            </article>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300} translateY={6} translateX={-1} tduration={1200}>
            <article className="group relative aspect-video hover:cursor-pointer bg-gradient-to-br from-purple-900/50 to-blue-900/50 overflow-hidden rounded-xl opacity-100 transform-none">
              <Image
                src="/images/songhub.png"
                alt="SongHub"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300 rounded-xl"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2">Social Media</h3>
                <p className="text-gray-300 mb-4">Music reviews web site (Inspiration: Letterbox)</p>
                <div className="flex gap-4">
                  {/* <Link href="https://youtu.be/z0cK0wmltZI" className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                    View Project
                  </Link> */}
                  <Link href="https://github.com/matiagimenez/songhub" className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                    GitHub
                  </Link>
                </div>
              </div>
            </article>
          </AnimateOnScroll>
      </section>
    </section>
  );
}