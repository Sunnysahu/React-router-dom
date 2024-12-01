import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className=" flex flex-col justify-center text-center items-center mt-20">
      <div>
        <h1>This is Our Contact</h1>
        If you have any Queries Reach us out at{" "}
        <Link
          to={"mailto:contact@bitcoinleef.com"}
          className="inline-block text-blue-500"
        >
          contact@bitcoinleef.com
        </Link>
      </div>
    </div>
  );
}

export default Contact;
