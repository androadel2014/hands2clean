import FeaturedIn from "../layouts/featuredin";
import Footer from "../layouts/Footer";
import NavBar from "../layouts/navbar";
import Percentage from "../layouts/percentage";
import AboutForth from "./aboutforth";
import AboutSecond from "./aboutsecond";
import AboutThird from "./aboutthird";
import AboutTeamMember from "./aboutteammember";

export default function page() {
  return (
    <>
      <NavBar></NavBar>
      <div
        className={`bg-green-100 py-20 text-center 
       bg-[url('/images/aboutus.jpg')] bg-cover bg-center  w-full md:h-96 md:flex md:justify-center mobile-bg-img`}
      ></div>
      <AboutSecond></AboutSecond>
      <AboutThird></AboutThird>
      <AboutForth
        img={"/images/forthabout.jpg"}
        title={"As the Brother’s Families Have Grown"}
        text={`So has the tapestry of the Maid Bright team-the entrepreneurs found
            strategic placements for everyone that wanted to be involved. With a
            love of clean, organized spaces at the heart of the brand’s ethos,
            the team is able to bring efficiency and productivity into every
            home they enter. Through creative cleaning routines, stress reducing
            tactics and structure through organizational solutions, Maid Bright
            takes a high-quality, customer-centric approach to every service
            offered.`}
      ></AboutForth>
      <Percentage></Percentage>
      <AboutForth
        img={"/images/forthtwice.jpg"}
        title={
          "Attributing the Success of the Brand to Their Dedicated Employees"
        }
        text={`The family owned and operated business continues to strive for excellence 
          and innovation at every step. Maid Bright is active within the community, 
          continually supporting charities and causes that are important and aligned with
           the brand’s values. It is crucial for the team to have an impact and share success
            with others—these are the inherent fibers of the Maid Bright culture.`}
      ></AboutForth>
      <AboutTeamMember></AboutTeamMember>
      <div
        className={`bg-green-100 py-20 text-center 
       bg-[url('/images/aboutlast.jpg')] bg-cover bg-center  w-full md:h-screen  md:flex md:justify-center mobile-bg-img`}
      ></div>
      <FeaturedIn></FeaturedIn>
      <Footer></Footer>
    </>
  );
}
