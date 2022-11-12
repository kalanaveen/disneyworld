import React from "react";
import ShowsThumbnail from "./ShowsThumbnail";

const MoviesCollection = ({ results, title }) => {
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll p-2 -m-2 scrollbar-hide">
        {results.map((result) => (
          <ShowsThumbnail key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default MoviesCollection;
