import Image from "next/image";

export default function Character3() {
  return (
    <section id="character3" data-sect className="py-16 invisible">
      <div className="container">
        <div className="flex flex-col">
          <div className="">
            <h2 className="" data-title-text="Character3">
              Character 3
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div data-sect-img="avatar3" className="relative bg-rect-grad bg-center bg-cover bg-no-repeat w-[300px] h-[290px] mt-[36vh]">
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
