import { useMemo } from "react";
import { FilmDetails } from "./components/FilmDetails/FilmDetails";
import { Reviews } from "./components/Reviews/Reviews";

const filmDetails = {
  id: 'kgwhoghwo',
  title: 'The Simpsons',
  seasonsCount: 33,
  genre: 'Comedy',
  similar: [],
  reviews: [
    {
      id: 'wghoefhio',
      author: 'SP',
      text: 'Самый лучший мультфильм',
      rating: 10,
    }
  ]
}

export const App = () => {
  const filmRating = useMemo(() => {
    return Math.floor(
      filmDetails.reviews.reduce((sum, review) => {
        return sum + review.rating
      }, 0) / filmDetails.reviews.length
    )
  }, [filmDetails.reviews]);

  return (
    <div>
      <header />
      <FilmDetails
        title={filmDetails.title}
        seasonsCount={filmDetails.seasonsCount}
        genre={filmDetails.genre}
      />
      <Reviews reviews={filmDetails.reviews}/>
      
      <footer />
    </div>
  );
};
