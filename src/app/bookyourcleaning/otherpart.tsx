import ItemBookInput from "./itembookinput";

export default function OtherPart({ selectedOption }) {
  const options = [
    {
      id: 1,
      selectedoption: "SingleFamilyHouse",
      items: [
        {
          id: 1,
          inpname: "SingleFamilyHouse",
          inpid: "insidewindows",
          labeltext: "Inside Windows",
          price: "+ $95",
          image: "/images/InsideWindows.png",
        },
        {
          id: 2,
          inpname: "SingleFamilyHouse",
          inpid: "insidecabinets",
          labeltext: "insidecabinets",
          price: "+ $55",
          image: "/images/InsideCabinets.png",
        },
        {
          id: 3,
          inpname: "SingleFamilyHouse",
          inpid: "postconstruction",
          labeltext: "Post Construction",
          price: "+ $195",
          image: "/images/PostConstruction.png",
          span: "Dust removal; floor, walls, cabinet surfaces, furniture",
        },
        {
          id: 4,
          inpname: "SingleFamilyHouse",
          inpid: "insidegarage",
          labeltext: "Inside Garage",
          price: "+ $35",
          image: "/images/InsideGarage.png",
        },
        {
          id: 5,
          inpname: "SingleFamilyHouse",
          inpid: "screenedporch",
          labeltext: "Screened Porch",
          price: "+ $30",
          image: "/images/ScreenedPorch.png",
        },
      ],
    },
    {
      id: 2,
      selectedoption: "Townhome",
      items: [
        {
          id: 1,
          inpname: "Townhome",
          inpid: "insidewindows",
          labeltext: "Inside Windows",
          price: "+ $55",
          image: "/images/InsideWindows.png",
        },
        {
          id: 2,
          inpname: "Townhome",
          inpid: "insidecabinets",
          labeltext: "insidecabinets",
          price: "+ $45",
          image: "/images/InsideCabinets.png",
        },
        {
          id: 3,
          inpname: "Townhome",
          inpid: "postconstruction",
          labeltext: "Post Construction",
          price: "+ $150",
          image: "/images/PostConstruction.png",
          span: "Dust removal; floor, walls, cabinet surfaces, furniture",
        },
        {
          id: 4,
          inpname: "Townhome",
          inpid: "insidegarage",
          labeltext: "Inside Garage",
          price: "+ $25",
          image: "/images/InsideGarage.png",
        },
      ],
    },
    {
      id: 3,
      selectedoption: "Apartment",
      items: [
        {
          id: 1,
          inpname: "Apartment",
          inpid: "insidewindows",
          labeltext: "Inside Windows",
          price: "+ $45",
          image: "/images/InsideWindows.png",
        },
        {
          id: 2,
          inpname: "Apartment",
          inpid: "insidecabinets",
          labeltext: "insidecabinets",
          price: "+ $35",
          image: "/images/InsideCabinets.png",
        },
        {
          id: 3,
          inpname: "Apartment",
          inpid: "postconstruction",
          labeltext: "Post Construction",
          price: "+ $100",
          image: "/images/PostConstruction.png",
          span: "Dust removal; floor, walls, cabinet surfaces, furniture",
        },
      ],
    },
  ];
  const filteredOption = options.find(
    (item) => item.selectedoption === selectedOption
  );

  return (
    <div className="bg-green-200 lg:w-4/6 m-auto lg:p-20 lg:pt-0">
      {filteredOption ? (
        <div className="flex justify-between mr-5">
          {filteredOption.items.map((option) => (
            <div key={option.id} className="text-center w1/5">
              <ItemBookInput
                type="checkbox"
                name={option.inpname}
                imgurl={option.image}
                id={option.inpid}
                span={option.price}
                span2={option.labeltext}
                span3={option.span}
                onchangefun={""}
              ></ItemBookInput>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-500">
          No options available for the selected type.
        </p>
      )}
    </div>
  );
}
