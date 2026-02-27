import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image src="/icons/logo.png" alt="" width={30} height={30} />
          <p>DevEvent</p>
        </Link>

        <ul>
          <Link href={"/"}>home</Link>
          <Link href={"/"}>events</Link>
          <Link href={"/"}>create Event</Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
