import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const MovieThumbnail = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  return (
    <div
      className="flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg  shadow-xl border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer"
      onClick={() => router.push(`/show/${result.id}`)}
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={330}
        height={210}
        className="rounded-lg"
        alt="image"
      />
    </div>
  );
};

export default MovieThumbnail;
