import { API_URL } from "../app/(home)/page";

const getMovieInfo = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  const resJson = response.json();
  return resJson;
};

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovieInfo(id);
  return (
    <>
      <h2>Movie Info</h2>
      <div>{JSON.stringify(movie)}</div>
    </>
  );
}
