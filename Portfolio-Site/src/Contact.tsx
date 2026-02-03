import "./index.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-12 md:px-20 lg:px-40 bg-white"
    >
      {/* Section Title */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1e293b] font-Satoshi text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-[#64748b] text-center max-w-2xl">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
      </div>

      {/* Contact Information - Centered */}
      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#eef2ff] flex items-center justify-center shrink-0">
              <FaEnvelope className="text-[#6366f1] text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-[#1e293b] mb-1">Email</h4>
              <a
                href="mailto:ngjazwin@gmail.com"
                className="text-[#64748b] hover:text-[#6366f1] transition-colors"
              >
                ngjazwin@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#eef2ff] flex items-center justify-center shrink-0">
              <FaPhone className="text-[#6366f1] text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-[#1e293b] mb-1">Phone</h4>
              <p className="text-[#64748b]">+65 9107 7490</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#eef2ff] flex items-center justify-center shrink-0">
              <FaLinkedin className="text-[#6366f1] text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-[#1e293b] mb-1">LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/jazwinn-ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748b] hover:text-[#6366f1] transition-colors"
              >
                linkedin.com/in/jazwinn-ng
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#eef2ff] flex items-center justify-center shrink-0">
              <FaGithub className="text-[#6366f1] text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-[#1e293b] mb-1">GitHub</h4>
              <a
                href="https://github.com/jazwinn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748b] hover:text-[#6366f1] transition-colors"
              >
                github.com/jazwinn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


