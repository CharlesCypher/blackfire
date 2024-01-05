import Link from "next/link";

export default function Navbar() {
  return (
    <header className="container py-3">
      <nav className="flex items-center justify-between">
        <h3>
          <Link href={"/"}>BlackFire</Link>
        </h3>
        <div className="w-8">
          <span className="w-full h-0.5 bg-white block"></span>
          <span className="w-full h-0.5 bg-white block my-1.5"></span>
          <span className="w-full h-0.5 bg-white block"></span>
        </div>
      </nav>
    </header>
  );
}
