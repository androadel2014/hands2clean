import Footer from "../layouts/Footer";
import NavBar from "../layouts/navbar";
import RatingSection from "../layouts/ratingsection";
import TestimonialsFirstSection from "./testimonialsfirstsection";
import yelp from "../../../public/images/yelp.png";

export default function Page() {
  const ratingdata = [
    {
      id: 1,
      name: "Kimber L.",
      date: "11/26/2023",
      text: ` I worked with Ruben and team and they were very responsive. They
                  came the same day to give me a quote that was very reasonable. The
                  cleaning took place the next day and I was more than happy with the
                  final result. I was so happy with the first cleaning that I've
                  decided to do regular cleanings with them. Highly recommend them for
                  your cleaning needs.`,
      rate: 4,
      img: yelp,
    },
    {
      id: 2,
      name: "Dr Ellen T.",
      date: "05/2023",
      text: `The service was great! They were very respectful of my home including furniture.
             Also, very nice to me which attributes to the overall feeling of wanting to do a good job.
              They didn't mind recleaning certain things when I pointed them out, and overall excellent.
               This attributes to their great customer service! Looking forward to my biweekly cleaning!!`,
      rate: 5,
      img: yelp,
    },
    {
      id: 3,
      name: "J. S.",
      date: "8/16/2023",
      text: `This is a review for Maid Bright - I’ve never had my house clean before but am pregnant 
            so wanted a good cleaning before the baby arrives (and didn’t feel up to doing it myself). Couldn’t 
            be happier with the outcome - reasonably priced, prompt, professional and my house has never looked 
            so good! Highly recommend`,
      rate: 5,
      img: yelp,
    },
    {
      id: 4,
      name: "G. P.",
      date: "8/4/2023",
      text: `Highly recommend. I used them last year but decided to go for a cheaper 
            alternative to save money. Needless to say, you get what you pay for and I’m back 
            to maid bright. Their pricing is actually reasonable, especially for the amazing job 
            they do. Great customer service too.`,
      rate: 5,
      img: yelp,
    },
    {
      id: 5,
      name: "Carly V.",
      date: "11/5/2021",
      text: `We've had 2 visits now plus the on-site estimate. It's really nice working with 
            a business that runs like a well-oiled machine. There are clear rules and expectations
             and I feel confident the business encourages its employees to uphold. Both times, 
             they have been on time or appropriately early, they wear masks, they are quick and 
             quiet (helpful because we work from home) and most importantly, they have done a wonderful 
             job of cleaning! Of the cleaners that have been to my home, all interactions have been 
             pleasant/friendly and otherwise they are in and out with hardly any disruption.`,
      rate: 5,
      img: yelp,
    },
    {
      id: 6,
      name: "Gail T.",
      date: "10/1/2023",
      text: `MaidBright is an outstanding cleaning company. The team of three cleaned every nook and cranny of my home.
         They exceeded my expectations. They were thorough as they worked efficiently to clean all areas of my home..
          The detailed way in which they they clean reminds me of the way my mother cleaned!`,
      rate: 5,
      img: yelp,
    },
  ];
  return (
    <>
      <NavBar></NavBar>
      <TestimonialsFirstSection></TestimonialsFirstSection>

      <RatingSection ratingdata={ratingdata}></RatingSection>
      <Footer></Footer>
    </>
  );
}
