export default function Input({
  clsName = "",
  type = "",
  clsNameinput = "",
  plcholder = "",
  req = false,
}) {
  return (
    <div className={`${clsName}`}>
      <input
        type={type}
        className={`md:w-1/2 w-3/4  p-2 mt-5 bg-transparent border
        border-green-600 outline-none rounded-md transition-all
         duration-200 shadow-md hover:shadow-green-500/50 ${clsNameinput}`}
        placeholder={plcholder}
        required={req && true}
      />
    </div>
  );
}
