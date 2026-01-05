import AbilityList from "./habilities-components/ability-list";
import DescriptionAppear from "./habilities-components/description-appear";
import TitleAppear from "../../components/titles/title-appear";


export default function Habilities() {
    return (
        <div id="habilities" className="bg-[#22202A] w-full">
            <div className="flex flex-col items-center justify-center pt-20">
                <TitleAppear className="text-2xl">My</TitleAppear>
                <TitleAppear className="text-4xl">Habilities</TitleAppear>
                <div className="text-center mb-15 p-5 w-[50%] mx-auto border-b-2 border-solid [border-image:linear-gradient(90deg,#573FB7_50%,#7c2fa100_100%)_1]" />
                <DescriptionAppear className="text-gray-500 m-10 lg:m-0 text-xl">The languages, frameworks, and tools I use to build high-performance applications.</DescriptionAppear>
            </div>
            <AbilityList />
        </div>
    )
}