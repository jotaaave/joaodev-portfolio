import Link from "next/link";

export default function NavbarMobileLink({ children, href }: { children: string, href: string }) {
    return (
        <Link href={href}>
            <div className="flex items-center hover:bg-gray-400 m-4 cursor-pointer rounded-2xl">
                <h1 className="p-2">{children}</h1>
            </div>
        </Link>
    )
}