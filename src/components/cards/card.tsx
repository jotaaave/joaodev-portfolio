import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";
import { IconType } from "react-icons";

interface ICard {
    title: string
    progress: boolean
    description: string
    langs: ReactElement<IconType>[]
    url: string,
    image: StaticImageData,
    msg: string
}

export default function Card({ title, progress, description, langs, url, image, msg }: ICard) {
    return (
        <div className="mt-10 bg-(--purple-dark) rounded-xl h-100 flex flex-col">
            <Image className="w-[85%] h-50 m-auto rounded-4xl" src={image} alt="image" />
            <div className="ml-10 md:ml-15">
                <h1 className="text-md font-bold">{title}</h1>
                <p className={`${progress === true ? 'text-green-500' : 'text-red-500'} text-sm`}>{progress === true ? 'CONCLUIDO' : 'EM DESENVOLVIMENTO'}</p>
                <p className="">{description}</p>
            </div>
            <button className="bg-white m-auto cursor-pointer text-black w-[85%] h-15 rounded-2xl">Ver Código</button>
        </div>
    )
}