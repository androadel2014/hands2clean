import Image from "next/image";

export default function CleaningItem({ cleaningServices }) {
  return (
    <>
      {cleaningServices.map(
        (items) => (
          <div
            className="w-full m-10 text-center text-green-500"
            key={items.id}
          >
            <div className="w-full lg:mt-10 flex justify-center ">
              {/* {items.image.src} */}
              <Image
                src={items.image.src}
                alt={items.image.src}
                className="w-full"
                width={1000}
                height={100}
              ></Image>
            </div>
            <h3 className="text-h3-mobile lg:text-h3-desktop whitespace-break-spaces text-blue mb-5 text-left text-2xl mt-5">
              {items.title}
            </h3>
            <div className="lg:flex lg:flex-col flex-row lg:space-x-8  cleaningitems">
              <ul className="lg:grid lg:grid-rows-6 lg:grid-flow-col ">
                {items.description.map((itemss) => (
                  <li
                    key={itemss.id}
                    // className="transition-all duration-300 font-sans text-base-lg flex flex-row mb-2 items-center text-blue"
                    className="transition-all duration-300 font-sans text-base-lg flex lg:flex-row mb-2 items-center text-blue mr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21px"
                      height="21px"
                      className="lg:mr-[9.68px] items-center"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle
                          cx="10.5"
                          cy="10.5"
                          r="10"
                          stroke="currentColor"
                        ></circle>
                        <path
                          fill="currentColor"
                          d="m4 11 4.7 4.8 8.1-8.5L15.4 6l-6.8 7-3.3-3.5z"
                        ></path>
                      </g>
                    </svg>
                    <span>{itemss.text}</span>
                  </li>
                ))}
              </ul>
              {/* <ul className="flex-1">
                <li className="transition-all duration-300 font-sans text-base-lg flex flex-row mb-2 items-center text-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21px"
                    height="21px"
                    className="mr-[9.68px] items-center"
                  >
                    <g fill="none" fillRule="evenodd">
                      <circle
                        cx="10.5"
                        cy="10.5"
                        r="10"
                        stroke="currentColor"
                      ></circle>
                      <path
                        fill="currentColor"
                        d="m4 11 4.7 4.8 8.1-8.5L15.4 6l-6.8 7-3.3-3.5z"
                      ></path>
                    </g>
                  </svg>
                  <span>Doors Spot Cleaned</span>
                </li>
              </ul> */}
            </div>
          </div>
        )
        // items.description.map((itemss) => itemss.text)
      )}
    </>
  );
}
