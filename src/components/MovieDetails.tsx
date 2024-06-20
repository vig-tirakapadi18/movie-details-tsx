interface IMovieDetails {
  movieDetails:
    | {
        Genre: string;
        imdbRating: number;
        Title: string;
        totalSeasons: number;
        Language: string;
        Released: string;
      }
    | undefined;
}

const MovieDetails = (props: IMovieDetails) => {
  return (
    <div className="bg-slate-300 mx-auto w-[50%] p-4 rounded-md">
      <h1 className="text-center font-bold text-3xl border-b-2 border-slate-700 text-slate-700">
        {props.movieDetails?.Title}
      </h1>
      <h3>
        <span>Genre:</span> {props.movieDetails?.Genre}
      </h3>
      <h3>
        <span>Language:</span> {props.movieDetails?.Language}
      </h3>
      <h3>
        <span>Release Date:</span> {props.movieDetails?.Released}
      </h3>
      <h3>
        <span>Total Seasons:</span> {props.movieDetails?.totalSeasons}
      </h3>
      <h3>
        <span>Rating:</span> {props.movieDetails?.imdbRating || "N/A"} / 10
      </h3>
    </div>
  );
};

export default MovieDetails;
