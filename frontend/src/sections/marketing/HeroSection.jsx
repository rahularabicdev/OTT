import Image from "next/image";

import { Hero } from "@/static/images";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className={`relative w-full min-h-[90vh] h-auto flex justify-center py-10`}
    >
      <div className="container flex items-center justify-end flex-col relative z-20">
        <h1 className="text-6xl font-bold text-light capitalize mb-5">
          Ready To Watch?
        </h1>
        <h3 className="text-light text-2xl font-medium mb-8">
          Unlimited Movies, TV Shows and more.
        </h3>
        <Link href="/login" className="button">
          Get Started
        </Link>
      </div>

      <div className="absolute h-full w-full z-10">
        <Image src={Hero} alt="Hero Image" layout="fill" />
      </div>
    </section>
  );
};

export default HeroSection;
