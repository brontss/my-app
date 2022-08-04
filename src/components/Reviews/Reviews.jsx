import { Review } from "../Review/Review"

export const Reviews = ({reviews}) => {
  return (
    <div>
      {
        reviews.length > 0 && reviews.map((review) => (
          <Review
            key={review.id}
            rating={review.rating}
            text={review.text}
            author={review.author}
          />
        ))
      }
    </div>
  )
}