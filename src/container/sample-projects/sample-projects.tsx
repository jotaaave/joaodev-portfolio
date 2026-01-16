'use client';

import TitleAppear from "@/components/titles/title-appear";
import Card3DPerspective from "../../components/cards/3d-card";
import academyApi from '@/../public/AcademyApiImage.png'
import portfolioImage from '@/../public/meu_portfolio.png'
import { TbBrandNextjs, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";
import { SiFastify } from "react-icons/si";
import { GiJesterHat } from "react-icons/gi";
import { BiLogoPostgresql } from "react-icons/bi";
import Card, { ICard } from "@/components/cards/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from "react";

export default function SampleProjectView() {
    const projectsCardMobile: ICard[] = [
        {
            title: "GYM API",
            description: "Gympass-style REST API for gym management and check-ins.",
            image: academyApi,
            progress: false,
            langs: [
                <TbBrandTypescript key={'typescript'} className="w-10 h-15" />,
                <SiFastify key={'fastify'} className="w-10 h-15"/>,
                <GiJesterHat key={'jester'} className="w-10 h-15"/>,
                <BiLogoPostgresql key={'postgres'} className="w-10 h-15"/>
            ],
            url: "https://github.com/jotaaave/gym-api-rest",
            msg: "I developed this RESTful API using Fastify and TypeScript, focusing on a scalable structure with Clean Architecture and SOLID principles. The application uses Prisma and PostgreSQL for data persistence and JWT for secure authentication. The core of the project is validated by a rigorous suite of unit and integration tests with Vitest, ensuring that complex business rules"              
        },
        {
            title: "My Portfolio",
            description: "My personal corner of the web. A showcase of full-stack projects",
            image: portfolioImage,
            progress: true,
            langs: [
                <TbBrandTypescript key={'typescript'} className="w-10 h-15" />,
                <TbBrandNextjs key={'nextjs'} className="w-10 h-15" />,
                <TbBrandTailwind key={'tailwind'} className="w-10 h-15" />
            ],
            url: "https://github.com/jotaaave/joaodev-portfolio",
            msg: "I developed this personal portfolio using Next.js and TypeScript, focusing on high performance and a seamless user experience through modern web standards. The application utilizes Tailwind CSS for a refined, mobile-first UI and Framer Motion for interactive animations, ensuring a polished and responsive design. By integrating SEO best practices and optimized assets, this project not only showcases my technical expertise and full-stack journey but also serves as a benchmark for clean, maintainable frontend architecture and component-based development."
        }
    ]

    const [actualDot, setDot] = useState(0)

    return (
        <div>
            <div id="projects" className="flex flex-col p-20">
                <TitleAppear className="text-4xl text-(--label-one)">{'Projects'}</TitleAppear>
                <div className="hidden lg:w-50 lg:m-20 lg:flex lg:flex-row">
                    <Card3DPerspective
                        title="Gym api"
                        description="Gympass-style REST API for gym management and check-ins."
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
                        title="My Portfolio"
                        description="My personal corner of the web. A showcase of full-stack projects"
                        image={portfolioImage}
                        progress={true}
                        langs={[
                            <TbBrandTypescript key={'typescript'} className="w-10 h-15" />,
                            <TbBrandNextjs key={'nextjs'} className="w-10 h-15" />,
                            <TbBrandTailwind key={'tailwind'} className="w-10 h-15" />
                        ]}
                        url="https://github.com/jotaaave/joaodev-portfolio"
                        msg="I developed this personal portfolio using Next.js and TypeScript, focusing on high performance and a seamless user experience through modern web standards. The application utilizes Tailwind CSS for a refined, mobile-first UI and Framer Motion for interactive animations, ensuring a polished and responsive design. By integrating SEO best practices and optimized assets, this project not only showcases my technical expertise and full-stack journey but also serves as a benchmark for clean, maintainable frontend architecture and component-based development."
                    />
                </div>
                <div className="lg:hidden mt-10">
                    <Swiper
                        pagination={{
                        type: 'progressbar',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        onSlideChange={(swiper) => setDot(swiper.activeIndex)}
                        className="mySwiper"
                    >
                        {projectsCardMobile.map((value, index) => (
                            <SwiperSlide key={`item_${index}`}>
                                <Card
                                    key={`card_${index}`}
                                    title={value.title}
                                    description={value.description}
                                    image={value.image}
                                    langs={value.langs}
                                    msg={value.msg}
                                    progress={value.progress}
                                    url={value.url}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex items-center justify-center gap-4">
                        {projectsCardMobile.map((value, index) => (
                            <div key={`dot_${index}`} className={`mt-10 ${actualDot === index ? 'bg-(--purple-dark)' : 'bg-gray-500'} w-4 h-4 rounded-4xl transition-all ease-in-out duration-200`}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}