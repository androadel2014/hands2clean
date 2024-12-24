export default function Percentage() {
  return (
    <>
      <div className="bg-green-100 lg:py-20 flex lg:justify-around lg:px-48 text-green-400 text-center percentage ">
        <div className="mb-10">
          <div className="lg:flex ">
            <h2 className="text-7xl">95</h2>
            <span className="text-3xl mt-2">%</span>
          </div>
          <p className="text-xl">Repeat clients</p>
        </div>
        <div className="mb-10">
          <div className="lg:flex">
            <h2 className="text-7xl">20</h2>
            <span className="text-3xl mt-8">years</span>
          </div>
          <p className="text-xl">In the business</p>
        </div>
        <div className="mb-10">
          <div className="lg:flex">
            <span className="text-3xl mt-8">Top</span>
            <h2 className="text-7xl">25</h2>
          </div>
          <p className="text-xl">Homecleaner on Yelp</p>
        </div>
      </div>
    </>
  );
}
