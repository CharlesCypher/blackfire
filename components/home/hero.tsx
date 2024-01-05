import Image from "next/image";

export default function Hero() {
  return (
    <main>
      <section id="home" className="container py-16">
        <div className="">
          <h1 className="text-[11.5vw] font-black neon uppercase whitespace-nowrap leading-[110%]">BLACK ENERGY</h1>
          <h2 className="font-glitch text-[7vw] glitch-neon font-bold uppercase tracking-[5px] whitespace-nowrap leading-[110%]">FEMALE FORCE</h2>
        </div>
        <div className="relative w-full h-full my-6 lg:py-0">
          <Image
            src={"/images/hero-char.png"}
            width={375}
            height={430}
            className="absolute w-full h-auto bottom-0 left-0 z-10"
            alt="detroit character"
            loading="eager"
            priority
          />
          <Image
            src={"/images/hero-rect-grad.png"}
            width={375}
            height={430}
            className="relative w-full h-full"
            alt="background-gradient"
            loading="eager"
          />
        </div>
        <div className="">
          <p className="uppercase">Build your collection of the world’s most cutting-edge digital art</p>
          <div className="relative w-full h-1 bg-line-grad"></div>
          <div className="">
            <Image src={"/images/hero-green-bar.png"} width={290} height={155} className="w-auto h-auto" alt="coyote cojo green club" />
          </div>
        </div>
      </section>
    </main>
  );
}
