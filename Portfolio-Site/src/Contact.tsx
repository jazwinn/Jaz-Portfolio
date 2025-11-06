import "./index.css";
import ContactCard from "./Components/ContactCard";
import emailSVG from "./assets/email.svg";
import phoneSVG from "./assets/phone.svg";
import linkedinSVG from "./assets/linkedin.svg";
import githubSVG from "./assets/github.svg";

export default function Contact() {
  const contacts = [
    {
      Icon: <img src={emailSVG} alt="Email" className="w-6 h-6" />,
      header1: "Email",
      header2: "ngjazwin@gmail.com",
      header2Link: "",
      desc: "",
    },
    {
      Icon: <img src={phoneSVG} alt="Phone" className="w-6 h-6" />,
      header1: "Phone",
      header2: "+65 9107 7490",
      header2Link: "",
      desc: "",
    },
    {
      Icon: <img src={linkedinSVG} alt="LinkedIn" className="w-6 h-6" />,
      header1: "LinkedIn",
      header2: "linkedin.com/in/jazwinn-ng",
      header2Link: "https://www.linkedin.com/in/jazwinn-ng/",
      desc: "",
    },
    {
      Icon: <img src={githubSVG} alt="Github" className="w-6 h-6" />,
      header1: "Github",
      header2: "github.com/jazwinn",
      header2Link: "https://github.com/jazwinn",
      desc: "",
    },
  ];

  return (
    <div id="Contact" className="pt-20 pb-20 px-5 md:px-20 lg:px-40 bg-gray-900">
      {/* Title */}
      <div className="flex justify-center mb-16">
        <h1 className="text-white text-5xl font-bold font-Satoshi text-center">
          Let's Get in Contact
        </h1>
      </div>

      {/* Contact Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {contacts.map((contact, idx) => (
          <ContactCard
            key={idx}
            Icon={contact.Icon}
            header1={contact.header1}
            header2={contact.header2}
            header2Link={contact.header2Link}
            desc={contact.desc}
          />
        ))}
      </div>
    </div>
  );
}
