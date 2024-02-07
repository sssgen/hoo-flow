import HeroImage from "@/assets/hero-image.svg";
import "@/assets/css-animations/hero.css";

export default function Home() {
  return (
    <main className="container px-4 flex min-h-screen w-full flex-col pt-[120px] lg:pt-0">
      <div className="h-screen flex flex-row justify-between items-center pt-[60px]">
        <div className="w-full h-fit flex flex-col lg:flex-row gap-20 lg:gap-0 items-center justify-between">
          <div className="w-full lg:w-1/2 lg:-translate-y-20">
            <h1 className="text-6xl font-bold line-clamp-5 backdrop-blur-sm text-center lg:text-start">
              Welcome to Hoo
              <span className="text-primary">Flow</span>
              <br />
              <span className="text-lg font-normal line-clamp-none mt-[40px]">
                Our project is dedicated to valuing your notes and inquiries,
                providing an AI capable of answering all the questions you have
                about your notes.
              </span>
            </h1>
          </div>
          <div className="relative lg:absolute -z-10 right-0 w-full h-full max-h-[700px] max-w-[700px]">
            <HeroImage />
          </div>
        </div>
      </div>
    </main>
  );
}
