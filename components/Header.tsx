import {
  MagnifyingGlassIcon as SearchIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    //understand this shit, useEffect, what does mounting mean,
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll); //understand this shit

    return () => {
      window.removeEventListener("scroll", handleScroll); //understand this shit
    };
  }, []); //understand this shit, why the brackets

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain" alt={""}        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New and Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden sm:inline h-6 w-6"></SearchIcon>
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className=" h-6 w-6"></BellIcon>
        <Link href={"/account"}>
          <Image
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
