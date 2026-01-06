import Link from "next/link";

export default function NavbarLink({ children, href }: { children: string, href: string}) {
    return (
        <Link href={href} className="duration-300 ease-in-out hover:bg-(--purple-dark) flex w-30 h-15 rounded-4xl items-center justify-center">
            <h3 className="font-bold text-md text-(--label-one)">{children}</h3>
        </Link>
    )
}