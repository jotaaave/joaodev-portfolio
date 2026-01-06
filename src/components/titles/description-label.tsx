export default function DescriptionLabel({ children, className }: { children: string, className?: string }) {
    return (
        <p className={className 
            ? `font-sans text-gray-500 mt-5 ${className}`
            : `ml-10 mr-10 lg:ml-20 mt-5 font-sans lg:w-170 text-gray-500`}>
            {children}
        </p>
    )
}