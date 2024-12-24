import Link from "next/link";

export default function AboutSecond() {
  return (
    <>
      <div className="bg-green-100 lg:py-20 text-center pt-3">
        <h3 className="text-green-700 text-4xl">
          Family Owned and Trusted Since 2004
        </h3>
        <div className="mt-5">
          <Link
            href="/"
            className="underline text-green-700 border-r border-green-600 mr-5 pr-5"
          >
            Virginia
          </Link>
          <Link
            href="/"
            className="underline text-green-700 border-r border-green-600 mr-5 pr-5"
          >
            Washington D.C.
          </Link>
          <Link href="/" className="underline text-green-700">
            Maryland
          </Link>
        </div>
      </div>
    </>
  );
}
