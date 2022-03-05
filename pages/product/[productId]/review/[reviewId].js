import { useRouter } from 'next/router';

function Review() {
  const route = useRouter();
  const { productId, reviewId } = route.query;

  return (
    <h1>
      Review - {reviewId} & product - {productId}
    </h1>
  );
}
export default Review;
