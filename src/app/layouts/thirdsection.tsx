import Image from "next/image";
import img9 from "../../../public/images/img-9.jpg";
import logo1 from "../../../public/images/logo1.png";
import logo2 from "../../../public/images/logo2.png";
import logo3 from "../../../public/images/logo3.png";

export default function ThirdSection() {
  return (
    <>
      <div className="bg-green-100 lg:py-20  third-section lg:flex lg:justify-center lg:px-40 lg:px-5">
        <Image
          src={img9}
          alt="Award Wining Service"
          className="m-auto lg:w-1/2"
        ></Image>
        <div className="text-center py-10 px-20 lg:w-1/2 bg-white">
          <h3 className="text-3xl mb-6">Award Wining Service</h3>
          <p>
            Services to write home about. We are humbled to be the recipient of
            several awards over the years. Recognized by top consumer
            organizations, including Yelp, Angie’s List, and Consumer’s
            Checkbook, our track record makes us confident in our
            quality-assured services as a professional cleaning company.
          </p>
          <br />
          <p>
            Our company philosophy lies in the fact that each and every customer
            is an essential part of our growing family in Northern Virginia, DC,
            and Maryland. We strive for excellence in each cleaning service that
            we provide in order to establish strong family bonds. At Maid
            Bright, we care about the relationships we continually build, which
            makes us a highly recommended and award-winning home cleaning
            service.
          </p>
          <div className="flex justify-between mt-16">
            <Image src={logo1} alt="logo1" className="w-1/4"></Image>
            <Image src={logo2} alt="logo2" className="w-1/4"></Image>
            <Image src={logo3} alt="logo3" className="w-1/4"></Image>
          </div>
        </div>
      </div>
    </>
  );
}
