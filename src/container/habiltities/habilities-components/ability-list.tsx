import { TbBrandGithub, TbBrandNodejs, TbBrandReact, TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";
import RevealAbilityDown from "./reveal-down";
import RevealAbilityUp from "./reveal-up"
import { IconType } from "react-icons";
import { ReactElement } from "react";
import { SiFastify, SiJest, SiLua, SiMariadb, SiMysql, SiPostgresql, SiSqlite } from "react-icons/si";
import { RiDiscordLine, RiNextjsLine } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";

interface LanguageList {
    lang: string
    icon: ReactElement<IconType>
    type: string
}

export default function AbilityList() {
    const languageList: LanguageList[] = [
        {
            lang: 'Typescript',
            icon: <TbBrandTypescript className="w-20 h-20 p-2 text-[#573FB7]" />,
            type: 'up',
        },
        {
            lang: 'Node.JS',
            icon: <TbBrandNodejs className="w-20 h-20 p-2 text-[#573FB7]"/>,
            type: 'down',
        },
        {
            lang: 'React',
            icon: <TbBrandReact className="w-20 h-20 p-2 text-[#573FB7]"/>,
            type: 'up',
        },
        {
            lang: 'Git',
            icon: <TbBrandGithub className="w-20 h-20 p-2 text-[#573FB7]"/>,
            type: 'down',
        },
        {
            lang: 'Fastify',
            icon: <SiFastify className="w-20 h-20 p-2 text-[#573FB7]"/>,
            type: 'up',
        },
        {
            lang: 'React Native',
            icon: <TbBrandReactNative className="w-20 h-20 p-2 text-[#573FB7]"/>,
            type: 'down',
        },
        {
            lang: 'Jest/Vitest',
            icon: <SiJest className="w-20 h-20 p-2 text-[#573FB7]"/>,
            type: 'up',
        },
        {
            lang: 'NextJS',
            icon: <RiNextjsLine className="w-20 h-20 p-2 text-[#573FB7]"/>,
            type: 'down',
        },
        {
            lang: 'Discord JS',
            icon: <FaDiscord className="w-20 h-20 p-2 text-[#573FB7]"/>,
            type: 'up',
        },
        {
            lang: 'Lua',
            icon: <SiLua className="w-20 h-20 p-2 text-[#573FB7]"/>,
            type: 'down',
        },
        {
            lang: 'MySQL',
            icon: <SiMysql className="w-20 h-20 p-2 text-[#573FB7]"/>,
            type: 'up',
        },
        {
            lang: 'PostgreSQL',
            icon: <SiPostgresql className="w-20 h-20 p-2 text-[#573FB7]"/>,
            type: 'down',
        },
        {
            lang: 'MongoDB',
            icon: <BiLogoMongodb className="w-20 h-20 p-2 text-[#573FB7]"/>,
            type: 'up',
        },
        {
            lang: 'SQLite',
            icon: <SiSqlite className="w-20 h-20 p-2 text-[#573FB7]"/>,
            type: 'down',
        },
        {
            lang: 'MariaDB',
            icon: <SiMariadb className="w-20 h-20 p-2 text-[#573FB7]"/>,
            type: 'up',
        },
    ]

    return (
        <div className="flex overflow-hidden flex-row items-center justify-center gap-10 mt-10">
            <div className="grid md:grid-rows-3 gap-4 grid-cols-3 md:grid-cols-5 items-center justify-center">
                {languageList.map((value) => {
                    return (
                        value.type === 'up' 
                            ? <RevealAbilityUp key={value.lang}>
                                <div className="flex items-center justify-center flex-col">
                                    {value.icon}
                                    <h1>{value.lang}</h1>
                                </div>
                            </RevealAbilityUp> 
                            : <RevealAbilityDown key={value.lang}>
                                <div className="flex items-center justify-center flex-col">
                                    {value.icon}
                                    <h1>{value.lang}</h1>
                                </div>
                            </RevealAbilityDown>
                    )
                })}
            </div>
        </div>
    )
}