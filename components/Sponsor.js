import Image from "next/image";
import React from "react";

const Sponsor = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
      <div className="sponsor group">
        <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
        <video
          className="hidden group-hover:inline rounded-lg  object-cover"
          autoPlay
          loop
          playsInline
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="sponsor group">
        <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
        <video
          className="hidden group-hover:inline rounded-lg  object-cover"
          autoPlay
          loop
          playsInline
        >
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="sponsor group">
        <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
        <video
          className="hidden group-hover:inline rounded-lg  object-cover"
          autoPlay
          loop
          playsInline
        >
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="sponsor group">
        <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
        <video
          className="hidden group-hover:inline rounded-lg  object-cover"
          autoPlay
          loop
          playsInline
        >
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="sponsor group">
        <Image
          src="/images/national-geographic.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          className="hidden group-hover:inline rounded-lg  object-cover"
          autoPlay
          loop
          playsInline
        >
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Sponsor;
