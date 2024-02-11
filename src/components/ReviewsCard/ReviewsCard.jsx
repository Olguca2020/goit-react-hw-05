export const ReviewsCard = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((rev) => (
        <li key={rev.id}>
          <h3>{rev.author}</h3>
          <p>{rev.content}</p>
        </li>
      ))}
    </ul>
  );
};
