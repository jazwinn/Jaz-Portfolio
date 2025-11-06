
interface ContactProp {
  Icon: React.ReactNode; // pass the SVG component
  header1: string;
  header2: string;
  header2Link: string;
  desc: string;
}

export default function ContactCard({ Icon, header1, header2, header2Link, desc }: ContactProp) {
  return (
    <div className="flex items-center m-2 p-3 rounded-lg shadow-md bg-[#1B1933] hover:shadow-lg transition">
      <div className="w-10 h-10 flex justify-center items-center bg-blue-100 rounded-full">
        {Icon}
      </div>
      <div className="ml-3">
        <h3 className="font-bold text-lg text-white">{header1}</h3>
        {header2Link ? (<a href={header2Link} target="_blank" className='text-white hover:underline hover:cursor-pointerr'>{header2}</a>) : (<h4 className='text-white'>{header2}</h4>)}
        <p className="text-gray-500 text-sm">{desc}</p>
      </div>
    </div>
  );
}