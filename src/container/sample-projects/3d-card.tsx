import Image, { StaticImageData } from "next/image";
import { TbBrandTypescript } from "react-icons/tb";
import { SiFastify } from "react-icons/si";
import { GiJesterHat } from "react-icons/gi";
import { BiLogoPostgresql } from "react-icons/bi";
import { IconType } from "react-icons";
import { ReactElement } from "react";

interface ICardPerspective {
    title: string
    progress: boolean
    description: string
    langs: ReactElement<IconType>[]
    url: string,
    image: StaticImageData,
    msg: string
}

export default function Card3DPerspective(
    { title, progress, description, langs, url, image, msg }: ICardPerspective) {
    return (
        <div className="group z-40 hover:z-50 perspective-[1000px] flex flex-row">
            <div className="relative w-64 h-100 bg-[#573FB7] rounded-xl shadow-2xl transition-all duration-500 ease-out
                            transform-[rotateY(25deg)_rotateX(10deg)]
                            group-hover:transform-[rotateY(10deg)_rotateX(5deg)] group-hover:shadow-[#573FB7]/50">
                <div className="p-6 flex flex-col h-full justify-between">
                    <div className="space-y-2">
                        <div className=" bg-indigo-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                            <div className="relative w-full h-30 bg-blue-500">
                                <Image 
                                    alt="gym-api"
                                    src={image}
                                    quality={95}
                                    fill
                                    className="object-cover object-center scale-110"
                                />
                            </div>
                        </div>
                        <h3 className="text-white font-bold text-xl uppercase tracking-wider">{title}</h3>
                        <p className={`${progress === true ? 'text-green-500' : 'text-red-500'} text-sm`}>{progress === true ? 'CONCLUIDO' : 'EM DESENVOLVIMENTO'}</p>
                        <p className="text-indigo-100 text-sm">{description}</p>
                        <div className="flex flex-row gap-2">
                            {langs ? langs.map((value) => {
                                return value ? value : null
                            }) : null}
                        </div>
                    </div>
                    <button className="bg-white text-black py-2 rounded-lg font-bold hover:bg-indigo-50 transition-colors">
                        <a target="_blank" href={url}>Ver Código</a>
                    </button>
                </div>
            </div>
            <div className="m-10 group-hover:z-50 bg-[#212121] h-fit w-100 rounded-2xl hidden group-hover:flex group-hover:opacity-70 left-50 absolute">
                <h1 className="p-2">{msg}</h1>
            </div>
        </div>
    )
}