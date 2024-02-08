import HeroImage from "@/assets/hero-image.svg";
import "@/assets/css-animations/hero.css";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-[92vh] flex flex-row justify-between items-center pt-[120px]">
      <div className="w-full h-fit flex flex-col lg:flex-row lg:gap-0 items-center justify-between">
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
          <div className="w-fit h-fit mx-auto lg:ml-0">
            <Link href="/notes">
              <Button
                variant="default"
                className="text-background mt-10 w-[230px] h-[60px] gap-4 transition-all text-lg font-semibold hover:font-bold hover:text-2xl active:bg-primary/60 overflow-hidden"
              >
                Get Started
                <span>
                  <ArrowRightIcon className="w-5 h-5" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative lg:absolute -z-10 right-0 w-full h-full max-h-[700px] max-w-[700px]">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default Hero;
