import Link from "next/link";

export const metadata = {
  title: "Main",
};

// get Movie List
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const getMovies = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
};

export default async function PageHome() {
  const movieList = await getMovies();
  return (
    <div>
      <h1>Movie Main Page</h1>
      <div>
        <ul>
          {movieList.map((movie) => {
            return (
              <li key={movie.id}>
                <Link href={`movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
