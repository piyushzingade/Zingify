import Features from "@/components/featured";
import Footer from "@/components/footer";
import { Marquee } from "@/components/magicui/marquee";
import Navbar from "@/components/navbar";
import Nike from "@/components/Nike";
import { ProductCard } from "@/components/ProductCard";
import { Products } from "@/lib/products";

export default function Home() {

  return (
    <div className=" bg-zinc-950  w-full overflow-hidden">
      <Navbar />
      <main className="relative mx-auto  px-4">
        <Nike />
        <Features />
        <div className="my-3 relative ">
          <Marquee className="[--duration:50s]">
            {Products.map((product) => (
              <ProductCard
                key={product.id}
                _id={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent"></div>
        </div>
        <div className="border-t mt-3 border-zinc-800"></div>
        <Footer />
      </main>
    </div>
  );
}
