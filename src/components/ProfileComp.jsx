import React from "react";
import { useAuth } from "../context/Authcontext";

const ProfileComp = () => {
  const { user } = useAuth();

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-white rounded-md border shadow-md">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
        {/* Left: Avatar and user info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
            <div className="w-full aspect-square rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={user.avatar}
                alt="avatar"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h2 className="text-2xl font-bold text-gray-800">
                {user.username}
              </h2>
            </div>
            <p className="text-gray-500 mt-1">GitHub User</p>
          </div>
        </div>

        {/* Right: ISOC ID */}
        <div className="md:text-lg text-sm text-gray-600 sm:text-right">
          <p className="text-black">
            <span className=" text-gray-500">ISOC id:</span > {"  "}
            {user.isoc_id}
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-md text-gray-600">
        <div>
          <p className="text-gray-500">Username:</p>
          <p className="text-gray-800 font-medium">{user.username}</p>
        </div>
        <div>
          <p className="text-gray-500">Joined:</p>
          <p className="text-gray-800 font-medium">
            {user.joinedAt.slice(0, 10)}
          </p>
        </div>

        <div>
          <p className="text-gray-500">Followers:</p>
          <p className="text-gray-800 font-medium">{user.followers}</p>
        </div>
        <div>
          <p className="text-gray-500">Following:</p>
          <p className="text-gray-800 font-medium">{user.following}</p>
        </div>
        <div>
          <p>Points:</p>
          <p className="font-medium">TBD</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileComp;
