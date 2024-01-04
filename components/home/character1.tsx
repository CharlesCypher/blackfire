import Image from "next/image";

export default function Character1() {
  return (
    <section id="character1" className="sect py-16">
      <div className="container">
        <div className="flex flex-col">
          <div className="">
            <h2>Character 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div className="relative bg-rect-grad bg-center bg-cover bg-no-repeat w-[300px] h-[290px] mt-[36vh]" data-scroll data-scroll-speed="1">
            <Image
              src={"/images/avatar-model-baseball.png"}
              width={300}
              height={480}
              className="absolute bottom-0"
              alt="avatar model holding baseball bat"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
