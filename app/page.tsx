import Navbar from "@/components/navbar";
import Nike from "@/components/Nike";

export default function Home() {
  return (
    <div className=" bg-zinc-950 text-white w-full overflow-hidden">
      <Navbar />
      <main className="relative mx-auto  px-4">
        <Nike />
      </main>
    </div>
  );
}
