import { Suspense } from "react";
import MovieInfo from "../../../../component/movie-info";
import MovieVideo from "../../../../component/movie-video";

export default function MoiveDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>movie detail</h1>
      <div>
        <h3>Movie detail page</h3>
        <Suspense fallback={<h1>Loading movie info</h1>}>
          <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
          <MovieVideo id={id} />
        </Suspense>
      </div>
    </div>
  );
}
