import bg from "../../assets/getquote_bg.jpg";
const MakecallAndGetquate = () => {
  return (
    <div
      className="p-28 flex flex-col items-center mt-10 rounded-3xl shadow-lg shadow-white"
      style={{
        backgroundImage: `linear-gradient(45deg,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.5)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="text-4xl text-white font-bold">
        Make a call & get best quote
      </p>
      <p className="text-xl text-white px-10 text-center mt-5">
        If you’re looking for innovation, results and a team of web, programming
        & multimedia experts for your business, feel free to contact us at
        support@blurockinnovations.com
      </p>
    </div>
  );
};

export default MakecallAndGetquate;
