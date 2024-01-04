import Link from "next/link";

export default function Navbar() {
  return (
    <header className="container pt-3">
      <nav className="flex items-center justify-between">
        <h3>
          <Link href={"/"}>BlackFire</Link>
        </h3>
        <div className="">
          <span className=""></span>
          <span className=""></span>
          <span className=""></span>
        </div>
      </nav>
    </header>
  );
}
