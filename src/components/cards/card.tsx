import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";
import { IconType } from "react-icons";

export interface ICard {
    title: string
    progress: boolean
    description: string
    langs: ReactElement<IconType>[]
    url: string,
    image: StaticImageData,
    msg: string
    demo?: string
}

export default function Card({ title, progress, description, langs, url, image, msg }: ICard) {
    return (
        <div className="mt-10 bg-(--purple-dark) rounded-xl h-100 flex flex-col">
            <Image className="h-50 rounded-t-xl" src={image} alt="image"/>
            <div className="flex flex-col md:ml-15 items-center text-center px-4">
                <h1 className="text-md mt-4 font-bold">{title}</h1>
                <p className={`${progress === true ? 'text-green-500' : 'text-red-500'} text-sm`}>{progress === true ? 'CONCLUIDO' : 'EM DESENVOLVIMENTO'}</p>
                <p className="">{description}</p>
            </div>
            <div className="flex p-5 gap-4">
                <button className="bg-white m-auto cursor-pointer text-black w-[85%] h-15 rounded-2xl"><a target="_blank" href={url}>Ver Código</a></button>
                <button disabled={true} className={`${progress === true ? 'bg-green-500' : 'bg-gray-500'} m-auto cursor-pointer text-black w-[85%] h-15 rounded-2xl`}>{progress === true ? 'Demo' : 'Unavailable'}</button>
            </div>
        </div>
    )
}