import Link from "next/link";

export default function PromotionsCard({ bigText = "", text = "" }) {
  return (
    <div className="p-1 lg:w-1/2 m-10 bg-green-400 text-white">
      <div className="border border-white px-10 py-5">
        <h2 className="text-2xl ">{bigText}</h2>
        <p className="mt-3 ">{text}</p>
        <Link
          href="/bookyourcleaning"
          className={
            "bg-white text-green-400 mt-10 inline-block py-1 px-6 rounded-2xl hover:bg-green-600 hover:text-white "
          }
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
