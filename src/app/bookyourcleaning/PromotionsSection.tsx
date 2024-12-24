import PromotionsCard from "./PromotionsCard";

export default function PromotionsSection() {
  return (
    <div className="bg-green-200 md:p-20 p-5 my-10">
      <h2 className="text-3xl text-center text-green-600 mb-10">
        Current Promotions
      </h2>
      <div className="md:flex ">
        <PromotionsCard
          bigText="Receive 10% Off Your First Cleaning"
          text="Receive 10% Off Your Total First Cleaning, Move-In or Move-Out
          Cleaning Service."
        ></PromotionsCard>
        <PromotionsCard
          bigText="$100 Off Recurring Customers"
          text="Take $50 OFF Your 2nd Recurring Cleaning. Take $50 OFF Your 4th Recurring Cleaning"
        ></PromotionsCard>
      </div>
    </div>
  );
}
