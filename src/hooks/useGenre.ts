import useGenres from "./UseGenres";
const useGenre = (genreId?: number) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === genreId);
  return genre;
};

export default useGenre;
