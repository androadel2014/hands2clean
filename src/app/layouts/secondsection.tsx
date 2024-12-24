import Link from "next/link";

export default function SecondSection() {
  return (
    <div className="bg-green-100 py-20 ">
      <div className=" max-w-screen-xl py-14 px-5 lg:p-10 m-auto lg:w-1/2 text-center ">
        <h3 className="text-blue-600 text-4xl ">
          No Mess. No Stress. Just Clean Homes.
        </h3>
        <p className="text-blue-600 my-5">
          Who doesn&apos;t love that just-cleaned feeling? Our dedicated team of
          trusted professionals is committed to bringing a fresh perspective
          into every space we touch. Whether it&apos;s just a one-time clean or
          on-going services, let us help you turn your house into a
          home—refreshing room by room with smart solutions.
        </p>
        <div className="flex justify-around w-2/3 m-auto text-blue-500 mt-5">
          <Link href="/Virginia">Virginia</Link>|
          <Link href="/dc">Washington, D.C.</Link>|
          <Link href="/Maryland">Maryland</Link>
        </div>
      </div>
    </div>
  );
}
