import { File } from "@deemlol/next-icons";

export default function CodeExample() {
    return (
        <div className="hidden lg:flex">
            <div className="mt-40 ml-10 w-100">
                <div className="bg-[#22202A] h-8 flex items-center rounded-t-lg border border-white/10">
                    <p className="pl-4">Typescript</p>
                </div>
                <div className="bg-[#212121] flex flex-row gap-2 p-2 border-b border-white/10">
                    <File color="gray" className="pl-2" />
                    <p className="text-sm pt-0.5 text-[#808080]">portfolio.ts</p>
                </div>
                <pre className="bg-[#212121] p-4 rounded-b-2xl border-b border-white/10">
                    <code className="flex flex-col">
                        <span className="text-[#808080]">{'{'}</span>
                        <span className="text-[#E5A552]">
                            {"    console"}
                            <span className="text-[#808080]">.</span>
                            <span className="text-[#61AFEF]">log</span>
                            <span className="text-[#D19A67]">{'('}</span>
                            <span className="text-[#6BB871]">{"'Hello Dev! Contact-me'"}</span>
                            <span className="text-[#D19A67]">{')'}</span>
                        </span>
                        <span className="text-[#808080]">{'}'}</span>
                    </code>
                </pre>
            </div>
        </div>
    )
}