import img5 from "../../../public/images/img-5.jpg";
import img6 from "../../../public/images/img-6.jpg";
import img7 from "../../../public/images/img-7.jpg";
import img8 from "../../../public/images/img-8.jpg";
import OurServiceItem from "../components/ourserviceitem";

export default function OurServices() {
  const ourserviceitems = [
    {
      id: 1,
      title: "Housekeeping Services",
      text: "We will help you to focus on yourself by taking care of housekeeping duties.",
      image: img5,
    },
    {
      id: 2,
      title: "Recurring Cleanings",
      text: "We offer the flexibility to book visits weekly, bi-weekly, or monthly.",
      image: img6,
    },
    {
      id: 3,
      title: "Moving Cleaning",
      text: "When planning your move leave the pre- and post-move cleaning to us.",
      image: img7,
    },
    {
      id: 4,
      title: "One-Time Cleaning",
      text: "New chapter or special gathering? We’re fully equipped and ready to help.",
      image: img8,
    },
  ];

  return (
    <>
      <div className="bg-green-100 py-20 text-center md:px-40 ourservices">
        <h2 className="text-3xl text-green-400">Our Services</h2>
        <div className="md:flex md:justify-between ">
          {ourserviceitems.map((item) => (
            <OurServiceItem
              key={item.id}
              title={item.title}
              text={item.text}
              img={item.image}
              alter={item.title}
            ></OurServiceItem>
          ))}
        </div>
      </div>
    </>
  );
}
