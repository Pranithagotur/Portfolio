import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ywso6b",
        "template_k26pc4o",
        form.current,
        "CSsJjQBtf5AnRXeLQ"
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-black py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-blue-500 tracking-widest mb-3">
          05. CONTACT
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get In Touch
        </h2>

        <p className="text-gray-400 mb-16">
          I'm currently looking for frontend and full-stack opportunities.
          Feel free to reach out!
        </p>

        <div className="backdrop-blur-lg bg-white/5 border border-gray-800 rounded-2xl p-12">

          <form ref={form} onSubmit={sendEmail} className="space-y-8 text-left">

            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your name"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="your@email.com"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Your message..."
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none resize-none"
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-black px-8 py-3 rounded-lg font-semibold transition"
              >
                <FiSend />
                Send Message
              </button>
            </div>

            {/* Social Links */}
<div className="flex justify-center gap-8 mt-12 text-gray-400 text-2xl">

  {/* Email */}
  <a
    href="mailto:pranithagotur4@gmail.com"
    className="hover:text-blue-500 transition duration-300 hover:scale-110"
  >
    <FiMail />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/Pranithagotur"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-500 transition duration-300 hover:scale-110"
  >
    <FaGithub />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/gotur-pranitha-150545295/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-500 transition duration-300 hover:scale-110"
  >
    <FaLinkedin />
  </a>

</div>


            {status && (
              <p className="text-center text-blue-400 mt-4">{status}</p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}
