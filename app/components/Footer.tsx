"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import AnimateOnScroll from "./AnimateOnScroll";
import TopIcons from "./TopIcons";

export default function Footer() {

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus("Message sent!");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => {
            setStatus("");
          }, 2000);
        },
        (error) => {
          setStatus("Failed to send message: " + error.text);
        }
      )
      .catch(
        (error) => setStatus("Failed to send: " + error.text)
      )
      .finally(() => setLoading(false))
      ;
  };

  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-purple-900/20 to-black flex flex-col justify-center relative">
      <div className="w-full max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Let's Connect</h2>
        <p className="text-gray-300 mb-6">Let's Create something together.</p>
        <div className="max-w-xl mx-auto mb-8">
          {
            status === "Message sent!" &&
            <EmailSent />
          }
          <form onSubmit={sendEmail} className={`space-y-6 ${status === "Message sent!" ? "opacity-0" : ""}`}>
            <AnimateOnScroll delay={100}>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" />
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" />
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"></textarea>
            </AnimateOnScroll>
            {!loading ?
              <>
                <AnimateOnScroll delay={100}>
                  <button type="submit" className="w-full px-6 py-3 text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity hover:cursor-pointer">Send Message</button>
                </AnimateOnScroll>
                {status === "Failed to send message: " + status.split("Failed to send message: ")[1] &&
                  <p className="text-red-500 mt-2">{status}</p>
                }
              </>
              :
              <p className="animate-pulse py-3">Sending email...</p>
            }
          </form>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center text-xs text-white/70 mt-16">
        <TopIcons />
      </div>
    </footer>
  );
}

function EmailSent() {
  return (
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center w-lg h-64 bg-gray-700/50 rounded-xl text-white/70 text-xl font-semibold z-50">
        <AnimateOnScroll tduration={200} translateX={-1000} translateY={-10}>
          <p>Email sent successfully!</p>    
        </AnimateOnScroll>
      </div>
  );
}