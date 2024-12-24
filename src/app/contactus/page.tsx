import FeaturedIn from "../layouts/featuredin";
import Footer from "../layouts/Footer";
import NavBar from "../layouts/navbar";
import ContactUsForm from "./contactusform";
import Map from "./map";

export default function ContactUs() {
  return (
    <>
      <NavBar></NavBar>
      <div
        className={`bg-green-100 py-20 text-center 
       bg-[url('/images/aboutus.jpg')] bg-cover bg-center  w-full md:h-96 md:flex md:justify-center mobile-bg-img`}
      ></div>
      <ContactUsForm></ContactUsForm>
      <Map></Map>
      <Footer></Footer>
    </>
  );
}
