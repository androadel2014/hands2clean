export default function TitleWithDivider({ text = "", text2 = "" }) {
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-3xl text-green-600">{text}</p>
        <p className="text-3xl text-green-600">{text2}</p>
      </div>
      <div className="border-b border-green-600 my-5"></div>
    </div>
  );
}
