import '../index.css'

interface NavProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string
  id: string
}

export default function NavMenu({ text, id, className }: NavProps) {
  return (
    <button
      onClick={() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }}
      className={`flex items-center p-2 text-[#b3adad] hover:translate-y-px hover:brightness-125 hover:shadow-lg  ${className}`}
    >
      {text}
    </button>
  )
}
