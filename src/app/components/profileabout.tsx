import Image from "next/image";

export default function ProfileAbout({ img, alt, name, position, text }) {
  return (
    <>
      <div className="md:my-10 md:px-5 mb-10 mxmobile5">
        <Image src={img} alt={alt} className="w-full"></Image>
        <p className="text-green-600 mt-5 text-2xl">{name}</p>
        <p className="text-green-600 mb-2">{position}</p>
        <p className="text-green-600">{text}</p>
      </div>
    </>
  );
}
