import RatingCard from "../components/ratingcard";

export default function RatingSection({ ratingdata }) {
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-3 m-10 lg:px-40 my-32 ratingsection">
        {ratingdata.map((data) => {
          return (
            <RatingCard
              key={data.id}
              name={data.name}
              date={data.date}
              text={data.text}
              rating={data.rate}
              img={data.img}
            ></RatingCard>
          );
        })}
      </div>
    </>
  );
}
