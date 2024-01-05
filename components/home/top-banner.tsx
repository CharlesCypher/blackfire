import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TopBanner() {
  return (
    <Link href={"#music"}>
      <div className="bg-line-grad container h-10 flex justify-center items-center">
        <span className="text-background text-sm font-semibold flex items-center gap-2 uppercase">
          NEW MUSIC ADDED <ArrowRight size={20} />{" "}
        </span>
      </div>
    </Link>
  );
}
