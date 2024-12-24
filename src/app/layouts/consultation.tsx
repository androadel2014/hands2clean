import Button from "../components/button/button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Consultation() {
  return (
    <div className="bg-green-100 py-20 text-center  bg-[url('/images/consultation.jpg')] bg-cover bg-center  w-full lg:flex lg:justify-center">
      <div className=" bg-white p-10 lg:w-1/2 m-auto lg:mt-52 mx-5">
        <h4 className="text-green-400 text-3xl mb-5">
          Free In-Home Consultation
        </h4>
        <p className="text-green-400 w-3/4 m-auto ">
          Maid Bright offers free in-home consultations for those who are
          interested in recurring cleanings. You can also book your cleaning
          online if you are looking for initial cleaning as well as move-in and
          move-out cleaning services.
        </p>
        <Button
          text={"Book My First Cleaning"}
          clsname={"bg-green-400 px-16 py-3 mt-10 hover:bg-green-600 "}
          handleDisplay={""}
        ></Button>
      </div>
    </div>
  );
}
