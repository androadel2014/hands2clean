import Carosel from "../layouts/carosal";
import Footer from "../layouts/Footer";
import NavBar from "../layouts/navbar";
import BookYourCleaning from "./bookCleaningsection";

export default function page() {
  return (
    <>
      <NavBar />
      <BookYourCleaning />
      <Carosel />
      <Footer />
    </>
  );
}
