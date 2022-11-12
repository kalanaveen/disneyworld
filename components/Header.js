import React from "react";
import Image from "next/image";
import { HomeIcon, PlusIcon, StarIcon } from "@heroicons/react/24/solid";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 h-[72px] md:px-12">
      <Image
        src="/images/logo.svg"
        height="0"
        width="0"
        alt="logo"
        className="cursor-pointer w-auto h-full"
        onClick={() => router.push("/")}
      />
      {session && (
        <div className="hidden md:flex md:ml-2 lg:ml-10 justify-center items-center lg:space-x-12 md:space-x-2">
          <a className="header-link group">
            <HomeIcon className="h-4" />
            <span className="span">Home</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="movies" className="h-5" />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="/images/series-icon.svg" alt="series" className="h-5" />
            <span className="span">Series</span>
          </a>
        </div>
      )}
      {!session ? (
        <button
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
          onClick={() => signIn()}
        >
          Login
        </button>
      ) : (
        <img
          src={session.user.image}
          className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer"
          onClick={signOut}
        />
      )}
    </header>
  );
};

export default Header;
