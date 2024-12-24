import Header from "@/app/components/header/header";
import NavBar from "./layouts/navbar";
import SecondSection from "./layouts/secondsection";
import ThirdSection from "./layouts/thirdsection";
import OurServices from "./layouts/ourservices";
import Consultation from "./layouts/consultation";
import Carosel from "./layouts/carosal";
import RatingSection from "./layouts/ratingsection";
import CleaningList from "./layouts/cleaninglist";
import GivetheGift from "./layouts/givethegift";
import Percentage from "./layouts/percentage";
import FeaturedIn from "./layouts/featuredin";
import Footer from "./layouts/Footer";
import yelp from "../../public/images/yelp.png";

export default function Home() {
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
  ];

  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <OurServices></OurServices>
      <Consultation></Consultation>
      <Carosel></Carosel>
      <RatingSection ratingdata={ratingdata}></RatingSection>
      <CleaningList></CleaningList>
      <GivetheGift></GivetheGift>
      <Percentage></Percentage>
      <FeaturedIn></FeaturedIn>
      <Footer></Footer>
    </>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
