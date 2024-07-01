
const ProfileCard = ({ profilePicture, name, email, bio }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg max-w-sm mx-auto">
      <img
        className="w-24 h-24 rounded-full object-cover"
        src={profilePicture}
        alt="Profile"
      />
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="mt-4 text-center text-gray-700">{bio}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Edit Profile
      </button>
    </div>
  )
}

export default ProfileCard