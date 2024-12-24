import "./header.css";

export default function Header() {
  // const { innerWidth: width, innerHeight: height } = window;
  // return {
  //   width,
  //   height
  // };
  return (
    <>
      {/* <div className=" absolute left-0 top-0 -z-10 w-screen h-screen bg-green-100 opacity-80"> */}
      <div className="w-full h-screen bg-green-100 opacity-80 -mt-20">
        <video
          width="600"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full abdolute object-cover opacity-50 headervideo"
          poster="images/poster.jpg"
        >
          <source
            src="/images/headervideo.mp4"
            type="video/mp4"
            className="w-full  h-screen"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute md:top-1/3 w-full flex text-center flex-col top-2/4 ">
          <div>
            <h3 className="text-3xl sm:text-7xl text-white">
              A clean home<br></br> without the stress
            </h3>
          </div>
          <div className="flex justify-around sm:w-1/2 m-auto mt-10 gap-3">
            <button className="bg-green-500 px-7 py-2 sm:px-10 sm:py-3 text-white rounded-3xl  hover:bg-green-800">
              free consultation
            </button>
            <button className="bg-green-500 px-7 py-2 sm:px-10 sm:py-3 text-white rounded-3xl  hover:bg-green-800">
              book my first cleaning
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
