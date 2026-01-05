import TypewriterTitle from "./typewriter";


export default function HomeTitle() {
    return <div>
        <h1 className="text-5xl ml-10 mt-10 lg:text-7xl lg:ml-20 lg:mt-20">
            I&apos;m João Victor,
        </h1>
        <h1 className="text-5xl ml-10 lg:text-7xl lg:ml-20 text-red-700">{<TypewriterTitle />}</h1>
        <p className="ml-10 mr-10 lg:ml-20 mt-5 font-sans lg:w-170 text-gray-500">
            I am a Full-Stack Web Developer with a strong interest in UI design, which I explore out of both curiosity and passion. I am currently seeking new opportunities where I can learn, grow, and contribute to real-world projects. I am highly motivated by new challenges and genuinely enjoy turning ideas into code. I mainly work with JavaScript and TypeScript, React and Next.js, Node.js, RESTful APIs, and Tailwind CSS for UI styling.
        </p>
    </div>
}