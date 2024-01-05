import Image from "next/image";

export default function Character1() {
  return (
    <section id="character1" data-sect className="py-16 invisible">
      <div className="container">
        <div className="flex flex-col">
          <div className="">
            <h2 className="opacity-0 translate-y-7" data-title-text="Character1">
              Character 1
            </h2>
            <p data-sect-paragraph className="opacity-0 translate-y-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>
          <div
            data-sect-img="avatar1"
            className="relative bg-rect-grad bg-center bg-cover bg-no-repeat w-[300px] h-[290px] mt-[36vh] opacity-0 -translate-x-7"
          >
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
