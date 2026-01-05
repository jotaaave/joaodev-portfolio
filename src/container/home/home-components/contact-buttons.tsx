import Link from "next/link";

export default function ContactHomeButtons() {
    return (
        <div className="flex flex-row gap-10 m-10 ml-10 lg:ml-20">
            <button className="bg-[#0073B2] w-30 h-15 cursor-pointer rounded-3xl hover:bg-[#2CB2FD]">
                <Link target="_blank" href={'https://www.linkedin.com/in/victorcsbrasil/'}>LinkedIn</Link>
            </button>
            <button className="bg-[#0D1117] w-30 h-15 cursor-pointer rounded-3xl hover:bg-[#1D222A]">
                <Link target="_blank" href={'https://github.com/jotaaave'}>Github</Link>
            </button>
        </div>
    )
}