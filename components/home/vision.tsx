import { PlayIcon } from "lucide-react";
import Image from "next/image";
import Ticker from "../ui/ticker";

export default function Vision() {
  return (
    <section id="vision" className="py-16 overflow-hidden">
      <div className="">
        <div className="container mb-28">
          <h2>Our vision</h2>
          <p>
            Black Energy is the force of a female hip hop duo. Black Energy is a visual and musical phenomena, infusing the metaverse with their fresh
            beats and lyrics. Be sure to check out our new video &ldquo;BRIDGEWORLD&rdquo; available on all major digital portals.
          </p>
        </div>
        <div className="relative">
          <div className=""></div>
          <div className="">
            <PlayIcon size={30} />
          </div>
        </div>
        <Ticker word={"Characters"} alt={false} />
        <Ticker word={"Characters"} alt={true} />
      </div>
    </section>
  );
}
