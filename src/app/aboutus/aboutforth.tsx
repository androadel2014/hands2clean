import Image from "next/image";

export default function AboutForth({ img = "", title = "", text = "" }) {
  return (
    <>
      <div className="md:flex md:justify-between md:items-center my-20 p-10">
        <Image
          src={img}
          alt="about"
          className="md:w-1/2 md:p-10 mb-10"
          width={100}
          height={100}
        ></Image>
        <div className="md:w-1/2 md:p-28">
          <h2 className="text-4xl text-green-600 mb-5">{title}</h2>
          <p className="text-green-600">{text}</p>
        </div>
      </div>
    </>
  );
}
