import React from "react";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Image from "next/image";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";

const Movie = ({ result }) => {
  const { data: session } = useSession();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  const [showPlayer, setShowPlayer] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);

  const index = result.videos.results.findIndex(
    (element) => element.type === "Trailer"
  );

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
              <button
                className="btn  bg-black/60 text-[#f9f9f9]"
                onClick={() => setShowPlayer(true)}
              >
                <img
                  src="/images/play-icon-black.svg"
                  alt="playicon"
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Trailer
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

          {/* background overlay */}
          {showPlayer && (
            <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
          )}
          <div
            className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded transition duration-1000 overflow-hidden ${
              showPlayer ? "opacity-100 z-50" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
              <span className="font-semibold">Play Trailer</span>
              <div
                className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
                onClick={() => setShowPlayer(false)}
              >
                <AiOutlineClose className="h-5" />
              </div>
            </div>
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
                width="100%"
                height="100%"
                controls={true}
                playing={showPlayer}
                style={{ position: "absolute", top: "0", left: "0" }}
              />
            </div>
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
