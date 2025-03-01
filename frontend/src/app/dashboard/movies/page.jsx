"use client";

import Link from "next/link";

const Movies = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-10 mb-10">
        <h4 className="text-2xl font-bold">Movies</h4>
        <Link
          href="/dashboard/movies/add"
          className="button button-sm button-primary"
        >
          Add Movie
        </Link>
      </div>
    </>
  );
};

export default Movies;
