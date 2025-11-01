import '../index.css'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string
  id: string
}

export default function Button({ text, id, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      onClick={() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }}
      className={`flex items-center rounded-3xl p-2 text-white hover:-translate-y-px hover:brightness-125 hover:shadow-lg hover:cursor-pointer ${className}`}
    >
      {text}
    </button>
  )
}
