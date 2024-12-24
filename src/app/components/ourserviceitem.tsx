import Image from "next/image";
import Link from "next/link";

export default function OurServiceItem({ title, text, img, alter }) {
  return (
    <>
      <Link href="" className="px-5 py-5 lg:py-20 inline-block">
        <div className="group text-left">
          <Image src={img} alt={alter} className="h-80 w-fit "></Image>
          <h2 className="text-green-400 text-2xl">{title}</h2>
          <p className="text-green-400">{text}</p>
          <svg
            viewBox="0 0 37.2594521 18.1591317"
            xmlns="http://www.w3.org/2000/svg"
            width="37.2594521px"
            height="18.1591317px"
            className="text-blue group-hover:translate-x-5 transition-transform duration-300 mt-10 hover:translate-x-16"
          >
            <g
              id="Final"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="TBA-Maid-Bright-Mobile-01-Homepage"
                transform="translate(-20.5, -2256.6207)"
                stroke="currentColor"
              >
                <g id="Our-Services" transform="translate(20, 1527)">
                  <g id="Group-3-Copy-2" transform="translate(0, 730)">
                    <line x1="0.5" y1="9" x2="36.5" y2="9" id="Path-2"></line>
                    <polyline
                      id="Path-2-Copy"
                      points="26.5 -1.13694666e-13 36.9764238 9 26.5 17.3895842"
                    ></polyline>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </Link>
    </>
  );
}
