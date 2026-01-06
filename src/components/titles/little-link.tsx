import Link from "next/link";

export default function LittleLink({ children, href, className }: { children: string, href: string, className?: string }) {
    return (
        <Link href={href}>
            <p className="text-(--label-secondary) text-[14px] pb-4 hover:text-(--label-one)">
                {children}
            </p>
        </Link>
    )
}