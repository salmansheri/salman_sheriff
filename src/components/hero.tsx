import Image from "next/image";
import Salman from "../../public/my_photo-removebg.png";
import TypingAnimation from "./typing-effect";
import AnimatedGradientBadge from "./ui/animate-badge";
import { RainbowButton } from "./ui/rainbow-button";
import { ContactIcon, DownloadIcon, ProjectorIcon } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative  min-h-screen flex items-center justify-center">
      <div className="size-[300px] lg:size-[523px] hero-ring"></div>
      <div className="size-[400px] lg:size-[823px] hero-ring"></div>
      <div className="size-[500px] lg:size-[1230px] hero-ring"></div>
      <div className="container flex flex-col gap-4 items-center mt-[100px] justify-center">
        <div className="w-[200px] h-[200px] relative rounded-full overflow-hidden">
          <Image src={Salman} alt="profile" fill className="object-cover" />
        </div>
        <div>
          <div className="my-2 flex items-center justify-center flex-col gap-4">
            <AnimatedGradientBadge>
              🎉 Available for new Projects
            </AnimatedGradientBadge>
            <p className="tracking-wide font-semibold text-xl lg:text-3xl mt-1">
              Hi, I am
              <span className="text-violet-700 ml-2 font-bold">
                Salman Sheriff 👋
              </span>{" "}
            </p>
            <TypingAnimation
              className="tracking-wider text-lg lg:text-2xl"
              text="I am a Fullstack Developer  "
            />
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <a
                href="#"
                className=" hover:cursor-pointer border p-2 rounded-lg flex gap-2 items-center border-white/20"
              >
                <DownloadIcon className="size-4 animate-bounce" />
                Download Resume
              </a>
              <a href="#contact" className="hover:cursor-pointer">
                <RainbowButton>
                  Contact me <ContactIcon className="size-4 ml-2" />
                </RainbowButton>
              </a>
              <a href="#project">
                <button className="inline-flex items-center border border-white/10 p-2 rounded-lg">
                  Explore my works <ProjectorIcon className="size-4 ml-2" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
