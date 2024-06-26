import { MouseEvent, useState } from "react";
import MovieDetails from "./MovieDetails";

const SearchMovie = () => {
  const [movieName, setMovieName] = useState<string>("");
  const [movieDetails, setMovieDetails] = useState<any>();
  const [error, setError] = useState<string>();

  const apiKey = "f9a45b2e";

  const getMoviesClickHandler = async (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    try {
      setError("");
      const movieResponse = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${movieName}`
      );

      const movieResponseData = await movieResponse.json();
      console.log(movieResponseData);
      if (movieResponseData.Error) setError(movieResponseData.Error);
      if (!movieResponseData.Error) setError("");
      setMovieDetails(movieResponseData);
      console.log(movieResponseData.Error);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(movieDetails);

  return (
    <>
      <form className="flex justify-center items-center h-[30%]">
        <input
          type="text"
          placeholder="Enter Movie Name"
          value={movieName}
          onChange={(event) => setMovieName(event.target.value)}
          className="w-[40%] p-2 rounded-tl-md rounded-bl-md outline-none"
        />

        <button
          onClick={getMoviesClickHandler}
          className="bg-rose-500 p-2 rounded-tr-md rounded-br-md text-white">
          Get Movie Details
        </button>
      </form>
      {!error && movieDetails?.Title && (
        <MovieDetails movieDetails={movieDetails} />
      )}
      {error && (
        <p className="text-2xl text-center bg-rose-500 mx-[20%] text-white rounded-md p-3">
          ❌ {error}
        </p>
      )}
    </>
  );
};

export default SearchMovie;
