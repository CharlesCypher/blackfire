import Link from "next/link";

export default function TopBanner() {
  return (
    <Link href={"#music"} className="max-w-[90%] mx-auto">
      <div className="flex justify-center py-1.5">Banner</div>
    </Link>
  );
}
