
interface ShoppingCardProps {
    price: number;
    imageUrl: string;
    title: string;
    variant?: 'large' | 'medium' | 'small';
    href: string;
    animation?: 'slideRight' | 'slideLeft' | 'slideUp';
}

export default function ShoppingCard({
    price,
    imageUrl,
    title,
    variant = 'medium',
    animation
}: ShoppingCardProps) {
    const baseClasses = "relative rounded-md group/bento hover:shadow-sm transition border border-[#1f1f20]  dark:shadow-none p-4 dark:bg-black  bg-dark-1/40 border hover:border-blue-500 border-dark-4 flex items-end space-y-4 overflow-hidden group";

    const variantClasses = {
        large: "md:col-start-1 md:row-start-1 md:col-end-3 md:row-end-3 h-[500px] max-sm:h-[400px] md:h-full",
        medium: "h-[500px] max-sm:h-[400px] md:h-full",
        small: "h-[400px] max-sm:h-[300px] md:h-full"
    };

    const animationClasses = {
        slideRight: "animate-slideRight",
        slideLeft: "animate-slideLeft",
        slideUp: "animate-slideUp"
    };

    return (
        <a
            className={`${baseClasses} ${variantClasses[variant]} ${animation ? animationClasses[animation] : ''} duration-1000`}
        >
            <img
                src={imageUrl}
                alt={title}
                className="absolute top-0 left-0 right-0 bottom-0 m-auto max-h-[90%] max-w-[80%] object-contain group-hover:scale-110 transition-all duration-300"
            />
            <div className="z-10 mx-2 flex items-center gap-2 border border-light-2/20 pl-3 pr-1 py-1 rounded-full bg-zinc-600/10 backdrop-blur-lg backdrop-saturate-100">
                <p className="px-1 font-bold capitalize line-clamp-1 text-white">{title}</p>
                <p className="bg-blue-700 font-semibold rounded-full line px-2 py-1 text-white">₹{price}</p>
            </div>
        </a>
    );
}