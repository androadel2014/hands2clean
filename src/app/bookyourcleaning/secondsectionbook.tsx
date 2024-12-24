import GreenContainer from "./greenContainer";
import ItemBookInput from "./itembookinput";
import TitleWithDivider from "./TitleWithDivider";

export default function SecondSectionBook() {
  const addOns = [
    {
      key: 1,
      type: "checkbox",
      name: "add-ons",
      id: "insidethefridge",
      labeltext: "Inside the Fridge ",
      span: "+35",
      imgurl: "/images/fride.png",
    },
    {
      key: 2,
      type: "checkbox",
      name: "add-ons",
      id: "insidetheoven",
      labeltext: "Inside the oven",
      span: "+45",
      imgurl: "/images/oven.png",
    },
    {
      key: 3,
      type: "checkbox",
      name: "add-ons",
      id: "dishes",
      span: "+45",
      labeltext: "Dishes — Sink Full Only",
      imgurl: "/images/dishes.png",
    },
  ];
  return (
    <GreenContainer
      clsname="mt-5"
      content={
        <>
          <TitleWithDivider text="Select add-ons"></TitleWithDivider>
          <p className="text-green-600">Appliances and Kitchen</p>
          <p className="text-green-600">
            Your microwave, toaster oven, and the exterior of your fridge are
            already included.
          </p>
          <div className="flex justify-between mt-10 text-center">
            {addOns.map((item) => (
              <ItemBookInput
                key={item.key}
                type={item.type}
                name={item.name}
                id={item.id}
                labeltext={item.labeltext}
                span={item.span}
                imgurl={item.imgurl}
              ></ItemBookInput>
            ))}
          </div>
        </>
      }
    ></GreenContainer>
  );
}
