import TitleAppear from "@/components/titles/title-appear";
import Card3DPerspective from "./3d-card";
import academyApi from '@/../public/AcademyApiImage.png'
import { TbBrandTypescript } from "react-icons/tb";
import { SiFastify } from "react-icons/si";
import { GiJesterHat } from "react-icons/gi";
import { BiLogoPostgresql } from "react-icons/bi";

export default function SampleProjectView() {
    return (
        <div>
            <div className="flex flex-col p-20">
                <TitleAppear className="text-4xl">{'Projects (Mini View)'}</TitleAppear>
                <div className="w-50 m-20 flex flex-row">
                    <Card3DPerspective
                        title="Gym api"
                        description=""
                        image={academyApi}
                        progress={false}
                        langs={[
                            <TbBrandTypescript key={'typescript'} className="w-10 h-15" />,
                            <SiFastify key={'fastify'} className="w-10 h-15"/>,
                            <GiJesterHat key={'jester'} className="w-10 h-15"/>,
                            <BiLogoPostgresql key={'postgres'} className="w-10 h-15"/>
                        ]}
                        url="https://github.com/jotaaave/gym-api-rest"
                        msg="I developed this RESTful API using Fastify and TypeScript, focusing on a scalable structure with Clean Architecture and SOLID principles. The application uses Prisma and PostgreSQL for data persistence and JWT for secure authentication. The core of the project is validated by a rigorous suite of unit and integration tests with Vitest, ensuring that complex business rules"
                    />
                    <Card3DPerspective
                        title="Gym api"
                        description=""
                        image={academyApi}
                        progress={false}
                        langs={[
                            <TbBrandTypescript key={'typescript'} className="w-10 h-15" />,
                            <SiFastify key={'fastify'} className="w-10 h-15"/>,
                            <GiJesterHat key={'jester'} className="w-10 h-15"/>,
                            <BiLogoPostgresql key={'postgres'} className="w-10 h-15"/>
                        ]}
                        url="https://github.com/jotaaave/gym-api-rest"
                        msg="I developed this RESTful API using Fastify and TypeScript, focusing on a scalable structure with Clean Architecture and SOLID principles. The application uses Prisma and PostgreSQL for data persistence and JWT for secure authentication. The core of the project is validated by a rigorous suite of unit and integration tests with Vitest, ensuring that complex business rules"
                    />
                    <Card3DPerspective
                        title="Gym api"
                        description=""
                        image={academyApi}
                        progress={false}
                        langs={[
                            <TbBrandTypescript key={'typescript'} className="w-10 h-15" />,
                            <SiFastify key={'fastify'} className="w-10 h-15"/>,
                            <GiJesterHat key={'jester'} className="w-10 h-15"/>,
                            <BiLogoPostgresql key={'postgres'} className="w-10 h-15"/>
                        ]}
                        url="https://github.com/jotaaave/gym-api-rest"
                        msg="I developed this RESTful API using Fastify and TypeScript, focusing on a scalable structure with Clean Architecture and SOLID principles. The application uses Prisma and PostgreSQL for data persistence and JWT for secure authentication. The core of the project is validated by a rigorous suite of unit and integration tests with Vitest, ensuring that complex business rules"
                    />
                </div>
            </div>
        </div>
    )
}