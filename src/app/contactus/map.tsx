export default function Map() {
  return (
    <div
      className="w-full min-w-fit m-auto"
      //  style={{ width: "100%", maxWidth: "600px", margin: "auto" }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.606864142239!2d-77.28502971565727!3d38.841463498859426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64c25e988bfb7%3A0x527a422ce2a59098!2s9687%20Main%20St%20STE%20C%2C%20Fairfax%2C%20VA%2022031!5e0!3m2!1sen!2sus!4v1734794171208!5m2!1sen!2sus"
        // width="600"
        // height="450"
        className="w-full h-[30em]"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
