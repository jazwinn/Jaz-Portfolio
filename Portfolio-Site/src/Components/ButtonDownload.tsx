import '../index.css'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string
  id: string
}

export default function ButtonDownload({ text, id, className, ...props }: ButtonProps) {

  return (
    <button
      {...props}
      onClick={() => {
          const link = document.createElement("a");
          link.href = "/" + id; // path in public/
          link.download = id; // filename
          link.click();
      }}
      className={`flex items-center rounded-3xl p-2 text-white hover:-translate-y-px hover:brightness-125 hover:shadow-lg hover:cursor-pointer ${className}`}
    >
      {text}
    </button>
  )
}
