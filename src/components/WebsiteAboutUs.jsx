import Back from "./utils/Back";

function WebsiteAboutUs() {
  return (
    <div className="  flex flex-col h-screen text-center justify-center">
      <h1 className="text-3xl">This is Webiste About Us</h1>
      <p className="text-2xl ">we build this Just for Fun</p>
      <div class="shadow-lg shadow-red-600 bg-gray-700 p-8 m-4">
        Test Shadow
      </div>
      <Back />
    </div>
  );
}

export default WebsiteAboutUs;
