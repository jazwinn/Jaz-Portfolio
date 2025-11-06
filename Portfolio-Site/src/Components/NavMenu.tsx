import '../index.css'
import {useNavigate } from "react-router-dom";

interface NavProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string
  id: string
  active: boolean
}

export default function NavMenu({ text, id, active, className }: NavProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        // const section = document.getElementById(id);
        // section?.scrollIntoView({ behavior: "smooth" });
        if(id){
          navigate(id);
        }
      }}
      className={`flex items-center p-2  ${active ? "text-white font-bold underline underline-offset-6" : "text-[#968d8d]"} hover:translate-y-px hover:brightness-125 hover:shadow-lg hover:cursor-pointer  ${className}`}
    >
      {text}
    </button>
  )
}
