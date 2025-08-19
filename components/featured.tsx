import ShoppingCard from "./ShoppingCard";


export default function Features() {
    return (
        <div className="min-h-screen flex flex-col mx-auto px-18 py-8">
            {/* Title */}
            <div className="flex justify-start items-center mb-8">
                <h1 className="text-7xl font-extrabold bg-gradient-to-b from-[#e3e3e4] to-[#222325] text-transparent bg-clip-text text-shadow text-border-[#545454]">
                    FEATURED
                </h1>
            </div>

            {/* Cards */}
            <div className="grid md:auto-rows-[22rem] grid-cols-1 gap-4 max-w-7xl h-[80%] max-sm:min-h-screen mx-auto md:grid-cols-3 w-full">
                <ShoppingCard
                    title="Nike Mercurial Vapor 16"
                    price={27999}
                    imageUrl="https://zinstore.vercel.app/uploads/file-1728044747102.png"
                    variant="large"
                    href="/product/66ffdecdab305916377211d6"
                    animation="slideRight"
                />
                <ShoppingCard
                    title="Jeans"
                    price={2499}
                    imageUrl="https://zinstore.vercel.app/uploads/file-1725989861157.png"
                    variant="medium"
                    href="/product/66e083e61fbe1c0c8badf3be"
                    animation="slideLeft"
                />
                <ShoppingCard
                    title="Hoodie"
                    price={1799}
                    imageUrl="https://zinstore.vercel.app/uploads/file-1725771108228.png"
                    variant="medium"
                    href="/product/66dd2d66c601a94ef8f7bbfa"
                    animation="slideUp"
                />
            </div>
        </div>
    );
}