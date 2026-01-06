import ShortDivisor from "@/components/divisors/short-divisor";
import DescriptionLabel from "@/components/titles/description-label";
import LittleLink from "@/components/titles/little-link";
import TitleAppear from "@/components/titles/title-appear";
import { BsPerson } from "react-icons/bs";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

export default function Footer() {
    return (
        <div id="contact" className="bg-(--secondary-color) w-full">
            <div className="p-5 md:p-20">
                <TitleAppear className="text-5xl text-(--label-one)">Lets Connect</TitleAppear>
                <ShortDivisor/>
                <div className="md:flex md:flex-row">
                    <div>
                        <div className="cursor-pointer mt-10 bg-(--purple-dark) rounded-[300] w-10 h-10 flex items-center justify-center">
                            <h1 className="text-2xl font-bold">JV</h1>
                        </div>
                        <DescriptionLabel className="ml-0 w-100">
                            My name is João Victor, I love programming and I made this portfolio with all my love and care to showcase some of my skills. If you are interested in any service, get in touch via email or another platform.
                        </DescriptionLabel>
                    </div>
                    <div className="md:flex md:flex-row">
                        <div className="mt-10 md:ml-10">
                            <p className="mb-5 text-(--label-one)">Navigation</p>
                            <LittleLink href="#home">Home</LittleLink>
                            <LittleLink href="#hability">Ability</LittleLink>
                            <LittleLink href="#projects">Projects</LittleLink>
                        </div>
                        <div className="mt-10 md:ml-10">
                            <p className="mb-5 text-(--label-one)">Contact</p>
                            <div className="flex flex-row gap-2">
                                <TbMail className="text-(--label-secondary)"/>
                                <LittleLink href="">jv1446170@gmail.com</LittleLink>
                            </div>
                            <div className="flex flex-row gap-2">
                                <TbBrandLinkedin className="text-(--label-secondary)" />
                                <LittleLink href="https://www.linkedin.com/in/victorcsbrasil/">LinkedIn</LittleLink>
                            </div>
                            <div className="flex flex-row gap-2">
                                <TbBrandGithub className="text-(--label-secondary)" />
                                <LittleLink href="https://github.com/jotaaave">Github</LittleLink>
                            </div>
                            <div className="flex flex-row gap-2">
                                <BsPerson className="text-(--label-secondary)" />
                                <LittleLink href="https://joaodev.online">Portfolio</LittleLink>
                            </div>
                        </div>
                    </div>
                </div>
                <ShortDivisor/>
                <p className="text-(--label-secondary) mt-10">{`Copyright© ${new Date().getFullYear()} | Designed by João Victor`}</p>
            </div>
        </div>
    )
}