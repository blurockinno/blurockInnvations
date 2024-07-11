import ProfileCard from "./ProfileCard";
import avatar from "../../assets/avatar.jpg"

const TeamMembers = () => {
  const members = [
    {
      image: avatar,
      name: "John Doe",
      designation: "Software Engineer",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      image: avatar,
      name: "Jane Smith",
      designation: "Product Manager",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      image: avatar,
      name: "Emily Johnson",
      designation: "UX Designer",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      image: avatar,
      name: "Michael Brown",
      designation: "Marketing Specialist",
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
      <div className="flex flex-col items-center justify-center">
        <h6 className="text-[#146EF5] text-center uppercase font-semibold">
          Team members
        </h6>
        <h1 className="text-[#141415] text-center text-5xl font-bold p-4">
          We&apos;re a results driven team
        </h1>
        <p className="text-gray-400 text-center text-lg space-y-10 leading-snug">
          With a passion for innovation and a dedication to excellence,
          <br /> we bring diverse expertise to every project we undertake.
        </p>
      </div>
      <div className=" py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-20">
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
