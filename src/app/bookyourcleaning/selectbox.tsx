export default function SelectBox({
  name = "",
  id = "",
  clasName = "",
  options,
  textSelect = "Please Select",
}) {
  return (
    <>
      <select
        name={name}
        id={id}
        className={`lg:w-1/2 w-3/4  p-2 mt-5 bg-transparent border
         border-green-600 outline-none rounded-md transition-all
          duration-200 shadow-md hover:shadow-green-500/50${clasName}`}
      >
        <option>{textSelect}</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
