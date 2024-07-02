const Setting = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold mb-2">Profile Settings</h2>
          <p className="text-gray-700">Update your profile information.</p>
        </div>
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold mb-2">Account Settings</h2>
          <p className="text-gray-700">Manage your account preferences.</p>
        </div>
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold mb-2">Notification Settings</h2>
          <p className="text-gray-700">
            Configure your notification preferences.
          </p>
        </div>
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold mb-2">Security Settings</h2>
          <p className="text-gray-700">
            Manage your password and security settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Setting;
