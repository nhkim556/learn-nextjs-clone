import { API_URL } from "../app/(home)/page";

export const getMovieVideo = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  const resJson = response.json();
  return resJson;
};

export default async function MovieVideo({ id }: { id: string }) {
  const movie = await getMovieVideo(id);
  return (
    <>
      <h2>VIDEO</h2>
      <div>{JSON.stringify(movie)}</div>
    </>
  );
}
