export default function Button({ text, clsname, handleDisplay }) {
  return (
    <>
      {/* "rounded-3xl  text-md text-white " */}
      <button className={`  ${clsname}`} onClick={handleDisplay}>
        {text}
      </button>
    </>
  );
}
