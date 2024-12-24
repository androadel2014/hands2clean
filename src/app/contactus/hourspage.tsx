"use client";

const daysSchedule = [
  { id: 1, day: "Mon", start: "09:00 am", end: "05:00 pm" },
  { id: 2, day: "Tue", start: "09:00 am", end: "07:00 pm" },
  { id: 3, day: "Wed", start: "09:00 am", end: "05:00 pm" },
  { id: 4, day: "Thu", start: "09:00 am", end: "07:00 pm" },
  { id: 5, day: "Fri", start: "09:00 am", end: "07:00 pm" },
  { id: 6, day: "Sat", start: "09:00 am", end: "07:00 pm" },
  { id: 7, day: "Sun", start: "Closed" },
];

export default function HoursPage() {
  const day = new Date().toString().slice(0, 3);
  return (
    <div className="py-5">
      <ul className="lg:w-1/2">
        {daysSchedule.map((item) => (
          <li
            key={item.id}
            className={`flex justify-start gap-5 text-lg text-green-600 ${
              day === item.day ? "font-bold" : ""
            }`}
          >
            <span className="">{item.day}</span>
            <span className="">{item.start}</span>
            <span className="">
              {item.end ? "- " : ""}
              {item.end}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
