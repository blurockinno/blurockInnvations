import ProfileCard from "./ProfileCard";
import avatar from "/assets/avatar.jpg";
import aryan from "/assets/team-members/sai.jpeg";
import biruly from "/assets/team-members/biruly.jpeg";
import rishabh from "/assets/team-members/rishabh.jpeg";

const TeamMembers = () => {
  const members = [
    {
      image: biruly,
      name: "Bhagwan Biruly",
      designation: "Technical Product Manager",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      image: aryan,
      name: "Sai Aryan Goswami",
      designation: "Software Developer",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      image: rishabh,
      name: "Rishabh Parashar",
      designation: "Software Developer",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },

    {
      image: avatar,
      name: "Arun Uphadhayay",
      designation: "Sr. Software Developer",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      image: avatar,
      name: "Akash Shrotiya",
      designation: "Quality Manager",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },

    {
      image: avatar,
      name: "Navnit Kumar Singh",
      designation: "Software Developer",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
  ];
  return (
    <div className=" w-full bg-[#FAFAFC] relative -top-60 py-36">
      <div className="flex flex-col items-center justify-center text-center">
        <h6 className="text-[#146EF5] uppercase font-semibold text-sm md:text-base">
          Team members
        </h6>
        <h1 className="text-[#141415] text-3xl md:text-5xl font-bold p-4">
          We&apos;re a results-driven team
        </h1>
        <p className="text-gray-400 text-base md:text-lg leading-normal md:leading-snug">
          With a passion for innovation and a dedication to excellence,
          <br /> we bring diverse expertise to every project we undertake.
        </p>
      </div>

      <div className=" md:py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20">
            {members.map((member, index) => (
              <ProfileCard
                key={index}
                image={member?.image}
                name={member?.name}
                designation={member?.designation}
                social={member?.social}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
