export default function HeadReq({ clasName = "", text = "", req = false }) {
  return (
    <p className={` ${clasName}`}>
      {text} {req === true && <span className="text-red-600">*</span>}
    </p>
  );
}
