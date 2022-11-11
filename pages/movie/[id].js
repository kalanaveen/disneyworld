import React from "react";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Image from "next/image";
import { PlusIcon, XIcon } from "@heroicons/react/24/solid";

const Movie = ({ result }) => {
  console.log(result);
  const { data: session } = useSession();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="relative">
      <Head>
        <title>{result.title || result.original_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <section className="relative z-50">
          <div className="relative min-h-[calc(100vh-72px)]">
            <Image
              src={
                `${BASE_URL}${result.backdrop_path}` ||
                `${BASE_URL}${result.poster_path}`
              }
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {result.title || result.original_title}
            </h1>
            <div className="flex items-center space-x-3 md:space-x-5">
              <button className="btn bg-[#f9f9f9] text-black">
                <img
                  src="/images/play-icon-black.svg"
                  alt="playicon"
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Play
                </span>
              </button>
              <button className="btn  bg-black/60 text-[#f9f9f9]">
                <img
                  src="/images/play-icon-black.svg"
                  alt="playicon"
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Play
                </span>
              </button>

              <div className="iconbtn">
                <PlusIcon className="h-6" />
              </div>

              <div className="iconbtn">
                <img src="/images/group-icon.svg" alt="groupicon" />
              </div>
            </div>

            <p className="text-xs md:text-sm">
              {result.release_date || result.first_air_date} •{" "}
              {Math.floor(result.runtime / 60)}h {result.runtime % 60}m .{" "}
              {result.genres.map((genre) => genre.name + " ")}{" "}
            </p>
            <h4 className="text-sm md:text-lg max-w-4xl">{result.overview}</h4>
          </div>
        </section>
      )}
    </div>
  );
};

export default Movie;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.query;
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=videos`
  ).then((response) => response.json());
  return {
    props: {
      session,
      result: request,
    },
  };
}
