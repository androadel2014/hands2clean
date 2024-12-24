import Image from "next/image";
import Button from "./button/button";
import Link from "next/link";

export default function SectionBook({
  img,
  service,
  textcolor,
  title,
  buttomText,
}) {
  return (
    <>
      <div
        className="flex flex-col pr-0 py-7 xl:py-0 first:pt-0 first:pb-10 last:pt-10 xl:last:pt-0 xl:first:pb-0 border-b
       xl:border-b-0 xl:even:border-x xl:pr-20 xl:even:px-20 xl:last:pl-20 border-blue-border/[.37]"
      >
        <Image
          src={img}
          width={300}
          height={200}
          alt="logo"
          className="mt-5 mb-5  shadow-lg w-full "
        />
        <h3 className="mb-5 text-2xl text-blue-800">{title}</h3>
        <ul className="list-disc pl-5">
          {/* {console.log(service)} */}
          {service.map((item) => (
            <li className={`mb-3 text-lg  ${textcolor}`} key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
        <Link
          href="/bookyourcleaning"
          className="hover:bg-blue-950 px-5 text-center py-3 rounded-3xl bg-blue-600 text-md text-white  mt-5"
        >
          {buttomText}
        </Link>

        {/* <Button text={buttomText} clsname={"w-full mt-5 px-1 "}></Button> */}
      </div>
    </>
  );
}
