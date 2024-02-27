import Hero from "@/components/home/hero/Hero";
import Stats from "@/components/home/stats/Stats";

export default function Home() {
  return (
    <main className="sm:container px-4 min-h-screen w-full pt-[50px] lg:pt-0">
      <Hero />
      <Stats />
    </main>
  );
}
