import Image from "next/image";

export default function Hero() {
  return (
    <main className="pt-16 min-h-[200vh]">
      <section className="container">
        <div className="">
          <h1>BLACK FIRE</h1>
          <h2>MALE FORCE</h2>
        </div>
        <div className="relative w-full h-full">
          <Image
            src={"/images/hero-char.png"}
            width={375}
            height={430}
            className="absolute w-full h-auto bottom-0 left-0 z-10"
            alt="detroit character"
          />
          <Image src={"/images/hero-rect-grad.png"} width={375} height={430} className="relative w-full h-full" alt="background-gradient" />
        </div>
      </section>
    </main>
  );
}
