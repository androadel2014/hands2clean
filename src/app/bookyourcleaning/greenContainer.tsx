export default function GreenContainer({ content, clsname = "" }) {
  return (
    <div
      className={`bg-green-200 md:w-4/6 m-auto md:p-20 p-10 mt-5  ${clsname} `}
    >
      {content}
    </div>
  );
}
