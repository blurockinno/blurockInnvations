import MakecallAndGetquate from "./MakecallAndGetquate";

const AboutusHome = () => {
  return (
    <div className=" bg-black p-10 ">
      <p className="text-white text-7xl font-semibold">
        Blurock
        <br />
        Innovations Technology.
      </p>
      <p className="text-gray-100 mt-5 w-1/2 mb-5">
        <span className="text-white">Blurock Innovations Private Limited</span>
        is an innovative Information Technology company which is committed to
        stay ahead of the curve in terms of technological advancements, and is
        always on the lookout for new and innovative ways to help businesses
        succeed in the digital age. We have a team of highly skilled & dedicated
        developers.
      </p>
      <span className="text-blue-500 cursor-pointer text-xl hover:underline">
        Explore more about Blurock Inovations...
      </span>
      {/* make a call and get quotes */}
      <MakecallAndGetquate />
      {/* make a call and get quotesend */}
    </div>
  );
};

export default AboutusHome;
