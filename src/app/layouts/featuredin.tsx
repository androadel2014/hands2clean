import Image from "next/image";
import post from "../../../public/images/post.png";
import select from "../../../public/images/select.png";
import apartment from "../../../public/images/apartment.png";
import realsimple from "../../../public/images/realsimple.png";
import mydomaine from "../../../public/images/mydomaine.png";
import redfin from "../../../public/images/redfin.png";
import issa from "../../../public/images/issa.png";
export default function FeaturedIn() {
  return (
    <>
      <div className=" text-center px-10 py-10">
        <h2 className="text-lg mb-5 text-green-400">Featured In</h2>
        <div className="lg:flex lg:justify-between featuredin">
          <Image
            src={post}
            alt="post"
            className="min-w-[87px] max-w-[150px] max-h-[58px] object-contain"
          ></Image>
          <Image
            src={select}
            alt="select"
            className="min-w-[87px] max-w-[150px] max-h-[58px] object-contain"
          ></Image>
          <Image
            src={apartment}
            alt="apartment"
            className="min-w-[87px] max-w-[150px] max-h-[58px] object-contain"
          ></Image>
          <Image
            src={realsimple}
            alt="realsimple"
            className="min-w-[87px] max-w-[150px] max-h-[58px] object-contain"
          ></Image>
          <Image
            src={mydomaine}
            alt="mydomaine"
            className="min-w-[87px] max-w-[150px] max-h-[58px] object-contain"
          ></Image>
          <Image
            src={redfin}
            alt="redfin"
            className="min-w-[87px] max-w-[150px] max-h-[58px] object-contain"
          ></Image>
          <Image
            src={issa}
            alt="issa"
            className="min-w-[87px] max-w-[150px] max-h-[58px] object-contain hidden lg:block"
          ></Image>
        </div>
      </div>
    </>
  );
}
