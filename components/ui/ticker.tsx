import Image from "next/image";

export default function Ticker({ word, alt }: { word: string; alt: boolean }) {
  return (
    <div className={`relative w-[110vw] h-16 ${alt ? "-mt-16 rotate-[-8deg]" : "mt-0 rotate-[8deg]"} -ml-[3vw] bdr overflow-hidden z-[200]`}>
      <div
        className={`bg-background absolute whitespace-nowrap will-change-transform flex items-center justify-start py-[17.5px] ${
          alt ? "animate-tickeralt" : "animate-ticker"
        }`}
      >
        <div className="flex text-lg uppercase whitespace-nowrap font-medium mr-[2vw]">{word}</div>
        <Image src={"/images/star-blue.png"} width={25} height={25} className="mr-[2vw]" alt="blue star icon" loading="lazy" />
        <div className="flex text-lg uppercase whitespace-nowrap font-medium mr-[2vw]">{word}</div>
        <Image src={"/images/star-green.png"} width={25} height={25} className="mr-[2vw]" alt="green star icon" loading="lazy" />
        <div className="flex text-lg uppercase whitespace-nowrap font-medium mr-[2vw]">{word}</div>
        <Image src={"/images/star-lime.png"} width={25} height={25} className="mr-[2vw]" alt="green star icon" loading="lazy" />
        <div className="flex text-lg uppercase whitespace-nowrap font-medium mr-[2vw]">{word}</div>
        <Image src={"/images/star-blue.png"} width={25} height={25} className="mr-[2vw]" alt="blue star icon" loading="lazy" />
        <div className="flex text-lg uppercase whitespace-nowrap font-medium mr-[2vw]">{word}</div>
        <Image src={"/images/star-green.png"} width={25} height={25} className="mr-[2vw]" alt="green star icon" loading="lazy" />
        <div className="flex text-lg uppercase whitespace-nowrap font-medium mr-[2vw]">{word}</div>
        <Image src={"/images/star-lime.png"} width={25} height={25} className="mr-[2vw]" alt="green star icon" loading="lazy" />
        <div className="flex text-lg uppercase whitespace-nowrap font-medium mr-[2vw]">{word}</div>
        <Image src={"/images/star-blue.png"} width={25} height={25} className="mr-[2vw]" alt="blue star icon" loading="lazy" />
        <div className="flex text-lg uppercase whitespace-nowrap font-medium mr-[2vw]">{word}</div>
        <Image src={"/images/star-green.png"} width={25} height={25} className="mr-[2vw]" alt="green star icon" loading="lazy" />
        <div className="flex text-lg uppercase whitespace-nowrap font-medium mr-[2vw]">{word}</div>
        <Image src={"/images/star-lime.png"} width={25} height={25} className="mr-[2vw]" alt="green star icon" loading="lazy" />
        <div className="flex text-lg uppercase whitespace-nowrap font-medium mr-[2vw]">{word}</div>
        <Image src={"/images/star-blue.png"} width={25} height={25} className="mr-[2vw]" alt="blue star icon" loading="lazy" />
        <div className="flex text-lg uppercase whitespace-nowrap font-medium mr-[2vw]">{word}</div>
        <Image src={"/images/star-green.png"} width={25} height={25} className="mr-[2vw]" alt="green star icon" loading="lazy" />
        <div className="flex text-lg uppercase whitespace-nowrap font-medium mr-[2vw]">{word}</div>
        <Image src={"/images/star-lime.png"} width={25} height={25} className="mr-[2vw]" alt="green star icon" loading="lazy" />
        <div className="flex text-lg uppercase whitespace-nowrap font-medium mr-[2vw]">{word}</div>
        <Image src={"/images/star-blue.png"} width={25} height={25} className="mr-[2vw]" alt="blue star icon" loading="lazy" />
        <div className="flex text-lg uppercase whitespace-nowrap font-medium mr-[2vw]">{word}</div>
        <Image src={"/images/star-green.png"} width={25} height={25} className="mr-[2vw]" alt="green star icon" loading="lazy" />
        <div className="flex text-lg uppercase whitespace-nowrap font-medium mr-[2vw]">{word}</div>
        <Image src={"/images/star-lime.png"} width={25} height={25} className="mr-[2vw]" alt="green star icon" loading="lazy" />
      </div>
    </div>
  );
}
