import RatingCard from "../components/ratingcard";

export default function RatingSection({ ratingdata }) {
  return (
    <>
      <div className="grid md:grid-cols-3 m-10 md:px-40 my-32 ratingsection">
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
