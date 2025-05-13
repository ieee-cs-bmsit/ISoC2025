import React from 'react';
import ProfileComp from '../ProfileComp';
import { useAuth } from '../../context/Authcontext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div
      className="bg-repeat"
      style={{
        backgroundImage: "url('/images/repopagebg2.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "200%",
      }}
    >
      <style>
        {`
          @media (min-width: 768px) {
            div.bg-repeat {
              background-size: 100% !important;
            }
          }
        `}
      </style>

      <div className="space-grotesk-regular w-full min-h-screen bg-transparent text-[#000] md:pt-10 md:py-7 px-8 shadow-lg space-y-5">
        <h1
          className="text-3xl md:text-5xl font-bold mb-8 text-center"
          style={{
            fontFamily: "CameraObscuraDEMO, sans-serif",
            letterSpacing: 2,
            textShadow: `
              -2px -2px 0 #fff,
              2px -2px 0 #fff,
              -2px 2px 0 #fff,
              2px 2px 0 #fff,
              0px 2px 0 #fff,
              2px 0px 0 #fff,
              0px -2px 0 #fff,
              -2px 0px 0 #fff
            `,
          }}
        >
          <span className="text-[#ee540e] block md:inline">Welcome,</span> {user.displayName}
        </h1>

        <ProfileComp />

        {/* Collectibles Section */}
        <div className="space-y-4">
          <h2 className=" mt-20 text-3xl text-[#ed550e] font-semibold"
          style={{
            fontFamily: "CameraObscuraDEMO, sans-serif",
            letterSpacing: 2,
            textShadow: `
              -2px -2px 0 #fff,
              2px -2px 0 #fff,
              -2px 2px 0 #fff,
              2px 2px 0 #fff,
              0px 2px 0 #fff,
              2px 0px 0 #fff,
              0px -2px 0 #fff,
              -2px 0px 0 #fff
            `,
          }}
          >Collectibles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="transition-transform duration-300 hover:scale-105 p-4 rounded-lg border-2 border-gray-200 bg-white">
              <div>
                <p className='text-gray-400 text-center'>No Collectibles to show</p>
              </div>
              {/* <p className="font-medium">Collectible #1</p>
              <p className="text-sm">Description of item 1</p>
            </div>
            <div className="transition-transform duration-300 hover:scale-105 p-4 rounded-lg border-2 border-gray-200 bg-white">
              <p className="font-medium">Collectible #2</p>
              <p className="text-sm">Description of item 2</p>
            </div>
            <div className="transition-transform duration-300 hover:scale-105 p-4 rounded-lg border-2 border-gray-200 bg-white">
              <p className="font-medium">Collectible #3</p>
              <p className="text-sm">Description of item 3</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
